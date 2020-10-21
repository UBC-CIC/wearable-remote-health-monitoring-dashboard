/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImage {
        bucket
        region
        key
      }
      facility
      phoneNumber
      email
      address {
        streetAddress
        city
        stateProvince
        country
        postalZip
      }
      emergencyContacts {
        firstName
        lastName
        relationshipToUser
        phoneNumber
        email
        address {
          streetAddress
          city
          stateProvince
          country
          postalZip
        }
      }
      additionalNotes
      createdAt
      updatedAt
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        createdAt
        updatedAt
        geofence {
          id
          locationName
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        data {
          nextToken
        }
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImage {
        bucket
        region
        key
      }
      facility
      phoneNumber
      email
      address {
        streetAddress
        city
        stateProvince
        country
        postalZip
      }
      emergencyContacts {
        firstName
        lastName
        relationshipToUser
        phoneNumber
        email
        address {
          streetAddress
          city
          stateProvince
          country
          postalZip
        }
      }
      additionalNotes
      createdAt
      updatedAt
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        createdAt
        updatedAt
        geofence {
          id
          locationName
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        data {
          nextToken
        }
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImage {
        bucket
        region
        key
      }
      facility
      phoneNumber
      email
      address {
        streetAddress
        city
        stateProvince
        country
        postalZip
      }
      emergencyContacts {
        firstName
        lastName
        relationshipToUser
        phoneNumber
        email
        address {
          streetAddress
          city
          stateProvince
          country
          postalZip
        }
      }
      additionalNotes
      createdAt
      updatedAt
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        createdAt
        updatedAt
        geofence {
          id
          locationName
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        data {
          nextToken
        }
      }
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      userID
      deviceOS
      osVersion
      deviceStatus
      createdAt
      updatedAt
      geofence {
        id
        locationName
        boundary {
          lat
          lng
        }
        createdAt
        updatedAt
      }
      alerts {
        items {
          id
          deviceID
          type
          description
          createdAt
          expirationTime
          updatedAt
        }
        nextToken
      }
      data {
        items {
          id
          deviceID
          observationType
          observationUnit
          observationValue
          observationDescription
          createdAt
          expirationTime
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      userID
      deviceOS
      osVersion
      deviceStatus
      createdAt
      updatedAt
      geofence {
        id
        locationName
        boundary {
          lat
          lng
        }
        createdAt
        updatedAt
      }
      alerts {
        items {
          id
          deviceID
          type
          description
          createdAt
          expirationTime
          updatedAt
        }
        nextToken
      }
      data {
        items {
          id
          deviceID
          observationType
          observationUnit
          observationValue
          observationDescription
          createdAt
          expirationTime
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      userID
      deviceOS
      osVersion
      deviceStatus
      createdAt
      updatedAt
      geofence {
        id
        locationName
        boundary {
          lat
          lng
        }
        createdAt
        updatedAt
      }
      alerts {
        items {
          id
          deviceID
          type
          description
          createdAt
          expirationTime
          updatedAt
        }
        nextToken
      }
      data {
        items {
          id
          deviceID
          observationType
          observationUnit
          observationValue
          observationDescription
          createdAt
          expirationTime
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      locationName
      boundary {
        lat
        lng
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      locationName
      boundary {
        lat
        lng
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      locationName
      boundary {
        lat
        lng
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAlert = /* GraphQL */ `
  mutation CreateAlert(
    $input: CreateAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    createAlert(input: $input, condition: $condition) {
      id
      deviceID
      type
      description
      location {
        lat
        lng
      }
      createdAt
      expirationTime
      updatedAt
    }
  }
`;
export const updateAlert = /* GraphQL */ `
  mutation UpdateAlert(
    $input: UpdateAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    updateAlert(input: $input, condition: $condition) {
      id
      deviceID
      type
      description
      location {
        lat
        lng
      }
      createdAt
      expirationTime
      updatedAt
    }
  }
`;
export const deleteAlert = /* GraphQL */ `
  mutation DeleteAlert(
    $input: DeleteAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    deleteAlert(input: $input, condition: $condition) {
      id
      deviceID
      type
      description
      location {
        lat
        lng
      }
      createdAt
      expirationTime
      updatedAt
    }
  }
`;
export const createDeviceData = /* GraphQL */ `
  mutation CreateDeviceData(
    $input: CreateDeviceDataInput!
    $condition: ModelDeviceDataConditionInput
  ) {
    createDeviceData(input: $input, condition: $condition) {
      id
      deviceID
      location {
        lat
        lng
      }
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      expirationTime
      updatedAt
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        createdAt
        updatedAt
        geofence {
          id
          locationName
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        data {
          nextToken
        }
      }
    }
  }
`;
export const updateDeviceData = /* GraphQL */ `
  mutation UpdateDeviceData(
    $input: UpdateDeviceDataInput!
    $condition: ModelDeviceDataConditionInput
  ) {
    updateDeviceData(input: $input, condition: $condition) {
      id
      deviceID
      location {
        lat
        lng
      }
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      expirationTime
      updatedAt
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        createdAt
        updatedAt
        geofence {
          id
          locationName
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        data {
          nextToken
        }
      }
    }
  }
`;
export const deleteDeviceData = /* GraphQL */ `
  mutation DeleteDeviceData(
    $input: DeleteDeviceDataInput!
    $condition: ModelDeviceDataConditionInput
  ) {
    deleteDeviceData(input: $input, condition: $condition) {
      id
      deviceID
      location {
        lat
        lng
      }
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      expirationTime
      updatedAt
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        createdAt
        updatedAt
        geofence {
          id
          locationName
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        data {
          nextToken
        }
      }
    }
  }
`;
