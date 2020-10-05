/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImageS3Key
      device {
        id
        userID
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
          radius
          createdAt
          updatedAt
        }
        data {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        device {
          id
          userID
          deviceStatus
          geofence {
           id
           locationName
           centerpoint {
           latitude
           longitude
           }
           radius
          }
          createdAt
          updatedAt
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
        }
        additionalNotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      userID
      deviceStatus
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
      geofence {
        id
        locationName
        centerpoint {
          latitude
          longitude
        }
        radius
        createdAt
        updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
          radius
          createdAt
          updatedAt
        }
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      locationName
      centerpoint {
        latitude
        longitude
      }
      radius
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationName
        centerpoint {
          latitude
          longitude
        }
        radius
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlert = /* GraphQL */ `
  query GetAlert($id: ID!) {
    getAlert(id: $id) {
      id
      deviceID
      type
      description
      location {
        latitude
        longitude
      }
      createdAt
      expirationTime
      updatedAt
    }
  }
`;
export const listAlerts = /* GraphQL */ `
  query ListAlerts(
    $filter: ModelAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceID
        type
        description
        location {
          latitude
          longitude
        }
        createdAt
        expirationTime
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeviceData = /* GraphQL */ `
  query GetDeviceData($id: ID!) {
    getDeviceData(id: $id) {
      id
      deviceID
      device {
        id
        userID
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
          radius
          createdAt
          updatedAt
        }
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      location {
        latitude
        longitude
      }
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      expirationTime
      updatedAt
    }
  }
`;
export const listDeviceDatas = /* GraphQL */ `
  query ListDeviceDatas(
    $filter: ModelDeviceDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceID
        device {
          id
          userID
          deviceStatus
          createdAt
          updatedAt
        }
        location {
          latitude
          longitude
        }
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
`;
