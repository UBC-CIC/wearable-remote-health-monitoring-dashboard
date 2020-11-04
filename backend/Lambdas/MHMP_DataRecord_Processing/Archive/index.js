'use strict';
console.log('Loading function');
const AWS = require('aws-sdk');
//const { v4: uuidv4 } = require('uuid');


exports.handler = async function(event, context) {

    var heartRate;
    var heart_rate;
    var latitude;
    var longitude;
    var deviceID;
    var geoFence;
    var location;
    var polygon = getGeoFence();

    //console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        // Kinesis data is base64 encoded so decode here
        var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');



        console.log('Decoded payload:', payload);

        const obj = JSON.parse(payload);
        heart_rate = obj.heart_rate;
        latitude = obj.latitude;
        longitude = obj.longitude;
        deviceID = obj.deviceID;
        location = {lat: latitude, lng: longitude};
        console.log(heart_rate);
        console.log(latitude);
        console.log(longitude);
        console.log(deviceID);
        var point = [];
        point[0] = latitude;
        point[1] = longitude;
        //var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
        geoFence = inside(point, polygon);
        heartRate = heart_anomaly(heart_rate);


    });

    if(geoFence)
    {
        console.log("Geofence alert!");
        const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
        const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1"});
        const params = {
            TableName: "Alert-asbpzzgppfhddebyxdyajtklce-dev",
            Item: {
                id: Math.round(Math.random()*1000).toString(),
                deviceID: deviceID,
                description: "Out of Bounds",
                type: "location",
                heart_rate: heart_rate,
                location: location,
                createdAt: new Date().toISOString(),
                expirationTime: Math.floor(new Date().getTime()/1000.0)+604800, //TTL: expire after a week
                updatedAt: new Date().toISOString(),
                __typename:"Alert"
            }
        };

        try {
            const data = await documentClient.put(params).promise();
            console.log("Returned data from DynamoDB add Alert: ", data);
        } catch (err) {
            console.log("Error adding alert to DaynamoDB: ", err);
        }

    }

    if(heartRate)
    {
        console.log("Heart rate alert!");
        const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
        const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1"});
        const params = {
            TableName: "Alert-asbpzzgppfhddebyxdyajtklce-dev",
            Item: {
                id: Math.round(Math.random()*1000).toString(),
                deviceID: deviceID,
                description: "Heart Anomaly",
                type: "heart",
                heart_rate: heart_rate,
                location: location,
                createdAt: new Date().toISOString(),
                expirationTime: Math.floor(new Date().getTime()/1000.0)+604800, //TTL: expire after a week
                updatedAt: new Date().toISOString(),
                __typename:"Alert"
            }
        };

        try {
            const data = await documentClient.put(params).promise();
            console.log("Returned data from DynamoDB add Alert: ", data);
        } catch (err) {
            console.log("Error adding alert to DaynamoDB: ", err);
        }

    }

};


function inside(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};

function heart_anomaly(heart_rate){
    if(heart_rate > 60){
        return true;
    }
    return false;
}

async function getGeoFence(){
    console.log("getting geofence!");
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1"});

    const params = {
        TableName: "GeoFence",
        Key: {
            id: "12345"
        }
    }

    try {
        const data = await documentClient.get(params).promise();
        console.log(data);
        return JSON.stringify(data.Item.location)

    } catch (err) {
        console.log(err);
    }

}