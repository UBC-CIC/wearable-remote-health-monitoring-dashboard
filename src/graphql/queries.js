/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      profileImageURL
      room
      age
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          profileImageURL
          room
          age
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        deviceStatus
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      assignedGeofencing {
        items {
          id
          userID
          geofenceID
          createdAt
          updatedAt
        }
        nextToken
      }
      facility
      phoneNumber
      email
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
      careGivers {
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
      address {
        streetAddress
        city
        stateProvince
        country
        postalZip
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
        profileImageURL
        room
        age
        device {
          id
          deviceStatus
          createdAt
          updatedAt
        }
        assignedGeofencing {
          nextToken
        }
        facility
        phoneNumber
        email
        emergencyContacts {
          firstName
          lastName
          relationshipToUser
          phoneNumber
          email
        }
        careGivers {
          firstName
          lastName
          relationshipToUser
          phoneNumber
          email
        }
        address {
          streetAddress
          city
          stateProvince
          country
          postalZip
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
      associatedUser {
        id
        firstName
        lastName
        profileImageURL
        room
        age
        device {
          id
          deviceStatus
          createdAt
          updatedAt
        }
        assignedGeofencing {
          nextToken
        }
        facility
        phoneNumber
        email
        emergencyContacts {
          firstName
          lastName
          relationshipToUser
          phoneNumber
          email
        }
        careGivers {
          firstName
          lastName
          relationshipToUser
          phoneNumber
          email
        }
        address {
          streetAddress
          city
          stateProvince
          country
          postalZip
        }
        additionalNotes
        createdAt
        updatedAt
      }
      deviceStatus
      data {
        items {
          id
          deviceID
          heartRate
          createdAt
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
        associatedUser {
          id
          firstName
          lastName
          profileImageURL
          room
          age
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        deviceStatus
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
export const getDeviceData = /* GraphQL */ `
  query GetDeviceData($deviceID: ID!, $createdAt: String!) {
    getDeviceData(deviceID: $deviceID, createdAt: $createdAt) {
      id
      deviceID
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          profileImageURL
          room
          age
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        deviceStatus
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      location {
        Latitude
        Longitude
      }
      heartRate
      createdAt
      updatedAt
    }
  }
`;
export const listDeviceDatas = /* GraphQL */ `
  query ListDeviceDatas(
    $deviceID: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelDeviceDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDeviceDatas(
      deviceID: $deviceID
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        deviceID
        device {
          id
          deviceStatus
          createdAt
          updatedAt
        }
        location {
          Latitude
          Longitude
        }
        heartRate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGeofence = /* GraphQL */ `
  query GetGeofence($id: ID!) {
    getGeofence(id: $id) {
      id
      locationName
      centerpointCoordinates {
        Latitude
        Longitude
      }
      radius
      users {
        items {
          id
          userID
          geofenceID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGeofences = /* GraphQL */ `
  query ListGeofences(
    $filter: ModelGeofenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeofences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationName
        centerpointCoordinates {
          Latitude
          Longitude
        }
        radius
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserGeo = /* GraphQL */ `
  query GetUserGeo($id: ID!) {
    getUserGeo(id: $id) {
      id
      userID
      geofenceID
      user {
        id
        firstName
        lastName
        profileImageURL
        room
        age
        device {
          id
          deviceStatus
          createdAt
          updatedAt
        }
        assignedGeofencing {
          nextToken
        }
        facility
        phoneNumber
        email
        emergencyContacts {
          firstName
          lastName
          relationshipToUser
          phoneNumber
          email
        }
        careGivers {
          firstName
          lastName
          relationshipToUser
          phoneNumber
          email
        }
        address {
          streetAddress
          city
          stateProvince
          country
          postalZip
        }
        additionalNotes
        createdAt
        updatedAt
      }
      geofence {
        id
        locationName
        centerpointCoordinates {
          Latitude
          Longitude
        }
        radius
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserGeos = /* GraphQL */ `
  query ListUserGeos(
    $filter: ModelUserGeoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGeos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        geofenceID
        user {
          id
          firstName
          lastName
          profileImageURL
          room
          age
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        geofence {
          id
          locationName
          radius
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
