import { useMutation, useQuery } from "@apollo/client";
import { GET_CONTACTS } from "./gql/Query";
import { CREATE_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from "./gql/Mutation";

export function App() {
  // const { loading, error, data } = useQuery(GET_CONTACTS);

  // const { loading, error, data } = useQuery(GET_CONTACT, {
  //   variables: { id: 1 },
  // });

  // const [createContact] = useMutation(CREATE_CONTACT);

  // const [updateContact] = useMutation(UPDATE_CONTACT);

  // const [removeContact] = useMutation(REMOVE_CONTACT);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );

  //   <button
  //   onClick={() => {
  //     createContact({
  //       variables: {
  //         firstName: "netanel5",
  //         lastName: "bashan5",
  //         nickName: "nati5",
  //         address: "hanatziv5",
  //         phoneNumbers: ["555", "555"],
  //         photo: "55",
  //       },
  //     });
  //     console.log("success!");
  //   }}
  // >
  //   Create Contact
  // </button>
  // <button
  //   onClick={() => {
  //     removeContact({
  //       variables: { id: 1 },
  //     });
  //     console.log("success!");
  //   }}
  // >
  //   Remove Contact
  // </button>
  // <button
  //   onClick={() => {
  //     updateContact({
  //       variables: {
  //         id: 3,
  //         firstName: "netanel5",
  //         lastName: "bashan5",
  //         nickName: "nati5",
  //         address: "hanatziv5",
  //         phoneNumbers: ["555", "555"],
  //         photo: "55",
  //       },
  //     });
  //     console.log("success!");
  //   }}
  // >
  //   Update Contact
  // </button>

  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Error...</h1>;

  // return (
  //   <div>
  //     <table border="2">
  //       <tbody>
  //         <tr>
  //           <th>ID</th>
  //           <th>FIRST_NAME</th>
  //           <th>LAST_NAME</th>
  //           <th>NICK_NAME</th>
  //           <th>ADDRESS</th>
  //           <th>PHONE_NUMBERS</th>
  //           <th>PHOTO</th>
  //         </tr>
  //         {data.contacts.map((contact) => (
  //           <tr>
  //             <td>{contact.id}</td>
  //             <td>{contact.firstName}</td>
  //             <td>{contact.lastName}</td>
  //             <td>{contact.nickName}</td>
  //             <td>{contact.address}</td>
  //             <td>{contact.phoneNumbers}</td>
  //             <td>{contact.photo}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
}
