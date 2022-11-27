import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from './gql/Query.js';


export function App() {
    const { loading, error, data } = useQuery(GET_CONTACTS);


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <div>
        <table border="2">
          <tbody>
            <tr>
              <th>ID</th>
              <th>FIRST_NAME</th>
              <th>LAST_NAME</th>
              <th>NICK_NAME</th>
              <th>ADDRESS</th>
              <th>PHONE_NUMBERS</th>
              <th>PHOTO</th>
            </tr>
            {
                data.contacts.map((contact) => (
                    <tr>
                        <td>{contact.id}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.nickName}</td>
                        <td>{contact.address}</td>
                        <td>{contact.phoneNumbers}</td>
                        <td>{contact.photo}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    );
  }

