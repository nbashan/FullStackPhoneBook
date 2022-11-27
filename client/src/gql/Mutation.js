import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation createContact(
    $firstName: String!
    $lastName: String!
    $nickName: String!
    $address: String!
    $phoneNumbers: [String!]
    $photo: String!
  ) {
    createContact(
      createContactInput: {
        firstName: $firstName
        lastName: $lastName
        nickName: $nickName
        address: $address
        phoneNumbers: $phoneNumbers
        photo: $photo
      }
    ) {
      id
    }
  }
`;

export const REMOVE_CONTACT = gql`
  mutation removeContact($id: Int!) {
    removeContact(id: $id) {
      id
    }
  }
`;

export const UPDATE_CONTACT = gql`
  mutation updateContact(
    $id: Int!
    $firstName: String!
    $lastName: String!
    $nickName: String!
    $address: String!
    $phoneNumbers: [String!]
    $photo: String!
  ) {
    updateContact(
      updateContactInput: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        nickName: $nickName
        address: $address
        phoneNumbers: $phoneNumbers
        photo: $photo
      }
    ) {
      id
    }
  }
`;
