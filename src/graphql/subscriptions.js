/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlert = /* GraphQL */ `
  subscription OnCreateAlert {
    onCreateAlert {
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
export const onUpdateAlert = /* GraphQL */ `
  subscription OnUpdateAlert {
    onUpdateAlert {
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
export const onDeleteAlert = /* GraphQL */ `
  subscription OnDeleteAlert {
    onDeleteAlert {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
        deviceStatus
        lastLocation {
          lat
          lng
        }
        lastHeartRate
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
        deviceStatus
        lastLocation {
          lat
          lng
        }
        lastHeartRate
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
        deviceStatus
        lastLocation {
          lat
          lng
        }
        lastHeartRate
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
      id
      userID
      deviceOS
      deviceStatus
      lastLocation {
        lat
        lng
      }
      lastHeartRate
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
      id
      userID
      deviceOS
      deviceStatus
      lastLocation {
        lat
        lng
      }
      lastHeartRate
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
      id
      userID
      deviceOS
      deviceStatus
      lastLocation {
        lat
        lng
      }
      lastHeartRate
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateDeviceData = /* GraphQL */ `
  subscription OnCreateDeviceData {
    onCreateDeviceData {
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
        deviceStatus
        lastLocation {
          lat
          lng
        }
        lastHeartRate
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
export const onUpdateDeviceData = /* GraphQL */ `
  subscription OnUpdateDeviceData {
    onUpdateDeviceData {
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
        deviceStatus
        lastLocation {
          lat
          lng
        }
        lastHeartRate
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
export const onDeleteDeviceData = /* GraphQL */ `
  subscription OnDeleteDeviceData {
    onDeleteDeviceData {
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
        deviceStatus
        lastLocation {
          lat
          lng
        }
        lastHeartRate
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
