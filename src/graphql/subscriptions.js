/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
