# Requirements
Before you deploy, you must have the following in place:
*  [AWS Account](https://aws.amazon.com/account/) 
*  [GitHub Account](https://github.com/) 
*  [Node 10 or greater](https://nodejs.org/en/download/) 
*  [Amplify CLI 4.13.1 or greater installed and configured](https://aws-amplify.github.io/docs/cli-toolchain/quickstart#quickstart) 
*  Please create a new Google Maps JavaScript API Key by following the instructions here: https://developers.google.com/maps/documentation/javascript/get-api-key
   
   Then enable the following APIs:
      - Maps Javascript API
      - Places API


# Step 1: Front-end Deployment
In this step we will use the Amplify console to deploy and build the front-end application automatically. 

[![One-click deployment](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/UBC-CIC/Mobile_Health_Monitoring_Platform)

1. **1-click deployment** button above. Make sure to start the deployment before continuing. 
2. Go to the [Amplify Console](https://console.aws.amazon.com/amplify/home) 
3. Select the **MHMP** app
4. Wait until **Provision, Build, Deploy and Verify** are all green. 
5. In the left-hand menu under *App Settings*, click on **Environment Variables** then **Manage variables**.
6. Please add the following environment variables:

