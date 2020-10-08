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
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImageS3Key
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      age
      profileImageURL
      profileImageS3Key
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
      id
      userID
      deviceOS
      osVersion
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
        boundary {
          lat
          lng
        }
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
      id
      userID
      deviceOS
      osVersion
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
        boundary {
          lat
          lng
        }
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
      id
      userID
      deviceOS
      osVersion
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
        boundary {
          lat
          lng
        }
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
export const onCreateDeviceData = /* GraphQL */ `
  subscription OnCreateDeviceData {
    onCreateDeviceData {
      id
      deviceID
      device {
        id
        userID
        deviceOS
        osVersion
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
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
        deviceOS
        osVersion
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
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
        deviceOS
        osVersion
        deviceStatus
        alerts {
          nextToken
        }
        geofence {
          id
          locationName
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
    }
  }
`;
