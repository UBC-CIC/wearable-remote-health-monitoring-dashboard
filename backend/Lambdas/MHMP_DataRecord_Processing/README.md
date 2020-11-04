## MHMP_Backend
MHMP Backend: Lambda Functions

Runtime: Node.js 12.x

### Description
**Lambda Function: DataProcessing**

Processes device data sent via Kinesis Data Stream.

**Lambda Function: DeviceStatusRefresh**

Checks device data on an hourly schedule to ensure device activity. 

## Setup

1. Save the following files/folders to a zip file named "index.js.zip":
    - Actions folder , Processing folder, node_modules folder, index.js, initiateProcessing.js, and package.json
2. Upload the index.js.zip file to the DataProcessing Lambda function.
