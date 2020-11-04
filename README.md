This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Setup Instructions

Please create a new Google Maps JavaScript API Key by following the instructions here: https://developers.google.com/maps/documentation/javascript/get-api-key

Then enable the following APIs:
- Maps Javascript API
- Places API
- Geocoding API

# MHMP Web Application
The Mobile Health Monitoring Platform (MHMP) is a prototype that aims to provide real-time information of patients remotley monitored via WearOS and WatchOS wearable devices.  

## Stack

* **Front-end** - ReactJS on NodeJS as the core framework, Argon Dashboard for UI, Amplify for Auth UI component and AWS integration.
* **Data** - All data is saved in Amazon S3 and Amazon DynamoDB.
* **Auth** - Cognito provides JSON Web Tokens (JWT) and along with AppSync fine-grained authorization on what data types users can access.
* **Data Processing** - In the back-end, there are three Lambda functions. One that processes incoming data through a Kinesis Data Stream, one that checks for heart rate anoamlies, and one that checks for device activity. 

## High level architecture



# Deployment
To deploy this solution into your AWS Account please follow our [Deployment Guide](./docs/deployment_guide.md)

# Authors


# Changelog
* Nov 13, 2020: Initial release.

# License
This project is distributed under  [MIT](https://github.com/UBC-CIC/Mobile_Health_Monitoring_Platform/blob/master/LICENSE.md) 
