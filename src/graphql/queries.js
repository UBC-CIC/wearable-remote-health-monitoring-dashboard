/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      profileURL
      profileImageURL
      room
      age
      deviceID
      device {
        id
        userID
        associatedUser {
          id
          firstName
          lastName
          profileURL
          profileImageURL
          room
          age
          deviceID
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        deviceSerial
        deviceStatus
        currentLocation
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
        items {
          id
          firstName
          lastName
          userID
          relationshipToUser
          phoneNumber
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      careGivers {
        items {
          id
          firstName
          lastName
          userID
          relationshipToUser
          phoneNumber
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        streetAddress
        city
        stateProvince
        country
        postalZip
        createdAt
        updatedAt
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
        profileURL
        profileImageURL
        room
        age
        deviceID
        device {
          id
          userID
          deviceSerial
          deviceStatus
          currentLocation
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
          nextToken
        }
        careGivers {
          nextToken
        }
        address {
          id
          streetAddress
          city
          stateProvince
          country
          postalZip
          createdAt
          updatedAt
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
      associatedUser {
        id
        firstName
        lastName
        profileURL
        profileImageURL
        room
        age
        deviceID
        device {
          id
          userID
          deviceSerial
          deviceStatus
          currentLocation
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
          nextToken
        }
        careGivers {
          nextToken
        }
        address {
          id
          streetAddress
          city
          stateProvince
          country
          postalZip
          createdAt
          updatedAt
        }
        additionalNotes
        createdAt
        updatedAt
      }
      deviceSerial
      deviceStatus
      currentLocation
      data {
        items {
          id
          deviceID
          location
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
        userID
        associatedUser {
          id
          firstName
          lastName
          profileURL
          profileImageURL
          room
          age
          deviceID
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        deviceSerial
        deviceStatus
        currentLocation
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
        userID
        associatedUser {
          id
          firstName
          lastName
          profileURL
          profileImageURL
          room
          age
          deviceID
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        deviceSerial
        deviceStatus
        currentLocation
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      location
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
          userID
          deviceSerial
          deviceStatus
          currentLocation
          createdAt
          updatedAt
        }
        location
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
      perimeterCoordinates
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
        perimeterCoordinates
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
        profileURL
        profileImageURL
        room
        age
        deviceID
        device {
          id
          userID
          deviceSerial
          deviceStatus
          currentLocation
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
          nextToken
        }
        careGivers {
          nextToken
        }
        address {
          id
          streetAddress
          city
          stateProvince
          country
          postalZip
          createdAt
          updatedAt
        }
        additionalNotes
        createdAt
        updatedAt
      }
      geofence {
        id
        locationName
        perimeterCoordinates
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
          profileURL
          profileImageURL
          room
          age
          deviceID
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
          perimeterCoordinates
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
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      firstName
      lastName
      userID
      user {
        id
        firstName
        lastName
        profileURL
        profileImageURL
        room
        age
        deviceID
        device {
          id
          userID
          deviceSerial
          deviceStatus
          currentLocation
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
          nextToken
        }
        careGivers {
          nextToken
        }
        address {
          id
          streetAddress
          city
          stateProvince
          country
          postalZip
          createdAt
          updatedAt
        }
        additionalNotes
        createdAt
        updatedAt
      }
      relationshipToUser
      phoneNumber
      email
      address {
        id
        streetAddress
        city
        stateProvince
        country
        postalZip
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        userID
        user {
          id
          firstName
          lastName
          profileURL
          profileImageURL
          room
          age
          deviceID
          facility
          phoneNumber
          email
          additionalNotes
          createdAt
          updatedAt
        }
        relationshipToUser
        phoneNumber
        email
        address {
          id
          streetAddress
          city
          stateProvince
          country
          postalZip
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
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      streetAddress
      city
      stateProvince
      country
      postalZip
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        streetAddress
        city
        stateProvince
        country
        postalZip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByDevice = /* GraphQL */ `
  query UsersByDevice(
    $deviceID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByDevice(
      deviceID: $deviceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        profileURL
        profileImageURL
        room
        age
        deviceID
        device {
          id
          userID
          deviceSerial
          deviceStatus
          currentLocation
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
          nextToken
        }
        careGivers {
          nextToken
        }
        address {
          id
          streetAddress
          city
          stateProvince
          country
          postalZip
          createdAt
          updatedAt
        }
        additionalNotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
