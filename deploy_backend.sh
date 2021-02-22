#!/bin/bash

if [[ ! -f "./amplify/.config/project-config.json" ]]; then
    echo 'Project file does not exist'
    exit 1
fi

PROJECT_NAME=$(cat ./amplify/.config/project-config.json | jq -r '.projectName')
if [ -z "$PROJECT_NAME" ]; then
    echo 'Unable to find PROJECT NAME'
    exit 1
fi
echo "Project Name: ${PROJECT_NAME}"

DYNAMO_TABLES=$(aws resourcegroupstaggingapi get-resources --tag-filters Key=user:Application,Values="${PROJECT_NAME}" --resource-type-filters dynamodb --query 'ResourceTagMappingList[*].[ResourceARN]' --output text | cut -f2- -d/)

S3_BUCKET=$(aws resourcegroupstaggingapi get-resources --tag-filters Key=user:Application,Values="${PROJECT_NAME}" --resource-type-filters s3 --query 'ResourceTagMappingList[*].[ResourceARN]' --output text | grep -v deployment | awk -F':::' '{print $2}')
echo "BUCKET: $S3_BUCKET"

#GRAPHQL_ENDPOINT=

while IFS= read -r table; do
    if [[ $table == Device* ]]; then
        DEVICE_TABLE=table
        echo "DEVICE TABLE: $DEVICE_TABLE"
    elif [[ $table == User* ]]; then
        USER_TABLE=table
        echo "USER TABLE: $USER_TABLE"
    elif [[ $table == Data* ]]; then
        DATA_TABLE=table
        echo "DATA TABLE: $DATA_TABLE"
    fi
done <<< "$DYNAMO_TABLES"

echo "Creating Lambda Layer"

./create_layer.sh

echo "Creating AthenaDB"

aws athena start-query-execution --query-string "CREATE DATABASE IF NOT EXISTS wearable_health_data;" --query-execution-context Database="default" --result-configuration OutputLocation=s3://${S3_BUCKET}/ath-output


sam package --s3-bucket ${S3_BUCKET} --output-template-file out.yaml

sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM \
--stack-name "${PROJECT_NAME}Lambda" --parameter-overrides \
ParameterKey=s3Bucket,ParameterValue="${S3_BUCKET}" \
ParameterKey=UserTable,ParameterValue="${USER_TABLE}" \
ParameterKey=DeviceTable,ParameterValue="${DEVICE_TABLE}" \
ParameterKey=DataTable,ParameterValue="${DATA_TABLE}"

rm ./layer/layer.zip
