import { gql } from '@apollo/client';

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