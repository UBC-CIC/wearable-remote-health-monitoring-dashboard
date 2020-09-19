/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateDeviceData = /* GraphQL */ `
  subscription OnCreateDeviceData {
    onCreateDeviceData {
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
export const onUpdateDeviceData = /* GraphQL */ `
  subscription OnUpdateDeviceData {
    onUpdateDeviceData {
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
export const onDeleteDeviceData = /* GraphQL */ `
  subscription OnDeleteDeviceData {
    onDeleteDeviceData {
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
export const onCreateGeofence = /* GraphQL */ `
  subscription OnCreateGeofence {
    onCreateGeofence {
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
export const onUpdateGeofence = /* GraphQL */ `
  subscription OnUpdateGeofence {
    onUpdateGeofence {
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
export const onDeleteGeofence = /* GraphQL */ `
  subscription OnDeleteGeofence {
    onDeleteGeofence {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
