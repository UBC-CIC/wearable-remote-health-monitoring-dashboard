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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
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
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
export const createGeofence = /* GraphQL */ `
  mutation CreateGeofence(
    $input: CreateGeofenceInput!
    $condition: ModelGeofenceConditionInput
  ) {
    createGeofence(input: $input, condition: $condition) {
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
export const updateGeofence = /* GraphQL */ `
  mutation UpdateGeofence(
    $input: UpdateGeofenceInput!
    $condition: ModelGeofenceConditionInput
  ) {
    updateGeofence(input: $input, condition: $condition) {
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
export const deleteGeofence = /* GraphQL */ `
  mutation DeleteGeofence(
    $input: DeleteGeofenceInput!
    $condition: ModelGeofenceConditionInput
  ) {
    deleteGeofence(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
