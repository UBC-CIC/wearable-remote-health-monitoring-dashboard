import * as React from "react";
import {Map, Polygon, GoogleApiWrapper} from 'google-maps-react';


class LocationMapTwo extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            center: [49.263232, -123.25429],
            zoom: 17,
        }
    }


   /* apiActions = (map, maps) => {
        const {path} = this.props;

        // define polygon
        let polygon = new maps.Polygon({
            paths: path,
            strokeWeight: 2,
            fillOpacity: 0.3,
            fillColor: "#20b2c9",
            strokeColor: "#20b2c9",
        })
        // add the polygon to the map
        polygon.setMap(map);


        // fit map viewport with polygon bounds
        let bounds = new maps.LatLngBounds();
        for (let i = 0; i < path.length; i++) {
            let point = new maps.LatLng(path[i].lat, path[0].lng);
            bounds.extend(point);
        }
        map.fitBounds(bounds);
    }*/


    render() {
        const {center, zoom} = this.state;
        const {path} = this.props;
        let bounds = new this.props.google.maps.LatLngBounds();
        for (let i = 0; i < path.length; i++) {
            bounds.extend(path[i]);
        }
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
        return(
            <div style={{width: "250px", height: "250px"}}>
                <Map
                google={this.props.google}
                initialCenter={{
                    lat: path[0].lat,
                    lng: path[0].lng
                }}
                bounds={bounds}
                containerStyle={containerStyle}
                >
                    {(path)?
                        <Polygon
                            path={path}
                            strokeColor={"#20b2c9"}
                            strokeOpacity={0.9}
                            strokeWeight={2}
                            fillColor={"#20b2c9"}
                            fillOpacity={0.3}
                        />
                        :
                        null
                    }
                </Map>
            </div>
        )
    }

}




export default GoogleApiWrapper({apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(LocationMapTwo);