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
        }
      }
      nextToken
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
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
        boundary {
          lat
          lng
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
      boundary {
        lat
        lng
      }
      createdAt
      updatedAt
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
        lat
        lng
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
          lat
          lng
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
        }
      }
      nextToken
    }
  }
`;
