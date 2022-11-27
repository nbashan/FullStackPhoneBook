import { gql } from "@apollo/client";

export const GET_CONTACTS = gql`
  query GetContacts {
    contacts {
      id
      firstName
      lastName
      nickName
      address
      phoneNumbers
      photo
    }
  }
`;

export const GET_CONTACT = gql`
  query contact($id: Int!) {
    contact(id: $id) {
      id
      firstName
      lastName
      nickName
      address
      phoneNumbers
      photo
    }
  }
`;
