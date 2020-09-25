/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImageS3Key
      room {
        id
        roomNumber
        name
        location {
          Latitude
          Longitude
        }
        locationRadius
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
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
      additionalNotes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImageS3Key
      room {
        id
        roomNumber
        name
        location {
          Latitude
          Longitude
        }
        locationRadius
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
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
      additionalNotes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImageS3Key
      room {
        id
        roomNumber
        name
        location {
          Latitude
          Longitude
        }
        locationRadius
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
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
      additionalNotes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      roomNumber
      name
      location {
        Latitude
        Longitude
      }
      locationRadius
      users {
        items {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
          facility
          phoneNumber
          email
          additionalNotes
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      roomNumber
      name
      location {
        Latitude
        Longitude
      }
      locationRadius
      users {
        items {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
          facility
          phoneNumber
          email
          additionalNotes
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      roomNumber
      name
      location {
        Latitude
        Longitude
      }
      locationRadius
      users {
        items {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
          facility
          phoneNumber
          email
          additionalNotes
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
      id
      associatedUser {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        room {
          id
          roomNumber
          name
          locationRadius
          createdAt
          updatedAt
        }
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
        careGivers {
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
      deviceStatus
      data {
        items {
          id
          deviceID
          observationType
          observationUnit
          observationValue
          observationDescription
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
      id
      associatedUser {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        room {
          id
          roomNumber
          name
          locationRadius
          createdAt
          updatedAt
        }
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
        careGivers {
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
      deviceStatus
      data {
        items {
          id
          deviceID
          observationType
          observationUnit
          observationValue
          observationDescription
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
      id
      associatedUser {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        room {
          id
          roomNumber
          name
          locationRadius
          createdAt
          updatedAt
        }
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
        careGivers {
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
      deviceStatus
      data {
        items {
          id
          deviceID
          observationType
          observationUnit
          observationValue
          observationDescription
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
export const onCreateDeviceData = /* GraphQL */ `
  subscription OnCreateDeviceData {
    onCreateDeviceData {
      id
      deviceID
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
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
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDeviceData = /* GraphQL */ `
  subscription OnUpdateDeviceData {
    onUpdateDeviceData {
      id
      deviceID
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
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
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDeviceData = /* GraphQL */ `
  subscription OnDeleteDeviceData {
    onDeleteDeviceData {
      id
      deviceID
      device {
        id
        associatedUser {
          id
          firstName
          lastName
          age
          profileImageURL
          profileImageS3Key
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
      observationType
      observationUnit
      observationValue
      observationDescription
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGeofence = /* GraphQL */ `
  subscription OnCreateGeofence {
    onCreateGeofence {
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
export const onUpdateGeofence = /* GraphQL */ `
  subscription OnUpdateGeofence {
    onUpdateGeofence {
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
export const onDeleteGeofence = /* GraphQL */ `
  subscription OnDeleteGeofence {
    onDeleteGeofence {
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
export const onCreateUserGeo = /* GraphQL */ `
  subscription OnCreateUserGeo {
    onCreateUserGeo {
      id
      userID
      geofenceID
      user {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        room {
          id
          roomNumber
          name
          locationRadius
          createdAt
          updatedAt
        }
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
        careGivers {
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
export const onUpdateUserGeo = /* GraphQL */ `
  subscription OnUpdateUserGeo {
    onUpdateUserGeo {
      id
      userID
      geofenceID
      user {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        room {
          id
          roomNumber
          name
          locationRadius
          createdAt
          updatedAt
        }
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
        careGivers {
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
export const onDeleteUserGeo = /* GraphQL */ `
  subscription OnDeleteUserGeo {
    onDeleteUserGeo {
      id
      userID
      geofenceID
      user {
        id
        firstName
        lastName
        age
        profileImageURL
        profileImageS3Key
        room {
          id
          roomNumber
          name
          locationRadius
          createdAt
          updatedAt
        }
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
        careGivers {
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
