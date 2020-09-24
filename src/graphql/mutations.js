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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
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
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
export const createDeviceData = /* GraphQL */ `
  mutation CreateDeviceData(
    $input: CreateDeviceDataInput!
    $condition: ModelDeviceDataConditionInput
  ) {
    createDeviceData(input: $input, condition: $condition) {
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
export const updateDeviceData = /* GraphQL */ `
  mutation UpdateDeviceData(
    $input: UpdateDeviceDataInput!
    $condition: ModelDeviceDataConditionInput
  ) {
    updateDeviceData(input: $input, condition: $condition) {
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
export const deleteDeviceData = /* GraphQL */ `
  mutation DeleteDeviceData(
    $input: DeleteDeviceDataInput!
    $condition: ModelDeviceDataConditionInput
  ) {
    deleteDeviceData(input: $input, condition: $condition) {
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
export const createGeofence = /* GraphQL */ `
  mutation CreateGeofence(
    $input: CreateGeofenceInput!
    $condition: ModelGeofenceConditionInput
  ) {
    createGeofence(input: $input, condition: $condition) {
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
export const updateGeofence = /* GraphQL */ `
  mutation UpdateGeofence(
    $input: UpdateGeofenceInput!
    $condition: ModelGeofenceConditionInput
  ) {
    updateGeofence(input: $input, condition: $condition) {
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
export const deleteGeofence = /* GraphQL */ `
  mutation DeleteGeofence(
    $input: DeleteGeofenceInput!
    $condition: ModelGeofenceConditionInput
  ) {
    deleteGeofence(input: $input, condition: $condition) {
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
export const createUserGeo = /* GraphQL */ `
  mutation CreateUserGeo(
    $input: CreateUserGeoInput!
    $condition: ModelUserGeoConditionInput
  ) {
    createUserGeo(input: $input, condition: $condition) {
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
export const updateUserGeo = /* GraphQL */ `
  mutation UpdateUserGeo(
    $input: UpdateUserGeoInput!
    $condition: ModelUserGeoConditionInput
  ) {
    updateUserGeo(input: $input, condition: $condition) {
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
export const deleteUserGeo = /* GraphQL */ `
  mutation DeleteUserGeo(
    $input: DeleteUserGeoInput!
    $condition: ModelUserGeoConditionInput
  ) {
    deleteUserGeo(input: $input, condition: $condition) {
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
