import { useQuery } from "@apollo/client";
import { GET_CONTACTS, GET_CONTACT } from "./gql/Query";
import { Update } from "./components/update";
import React, { useState } from "react";
import { TableRow } from "./components/tableRow";

import { Add } from "./components/add";

function UpdateComponent(id) {
  const { loading, error, data } = useQuery(GET_CONTACT, {
    variables: { id: id.id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;
  console.log("got here", id, data);
  return (
    <Update
      id={data.contact.id}
      firstName={data.contact.firstName}
      lastName={data.contact.lastName}
      nickName={data.contact.nickName}
      address={data.contact.address}
      phoneNumbers={data.contact.phoneNumbers}
      photo={data.contact.photo}
    />
  );
}

export function App() {
  const { loading, error, data } = useQuery(GET_CONTACTS);
  const [selectedId, setSelectedId] = useState(0);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  console.log(data);
  return (
    <div>
      <Add />
      {!selectedId &&
        data.contacts.map(
          (contact) =>
            contact && (
              <button
                onClick={() => {
                  setSelectedId(contact.id);
                }}
              >
                <TableRow
                  id={contact.id}
                  firstName={contact.firstName}
                  lastName={contact.lastName}
                  nickName={contact.nickName}
                  address={contact.address}
                  phoneNumbers={contact.phoneNumbers}
                  photo={contact.photo}
                />
              </button>
            )
        )}
      {selectedId != 0 && (
        <>
          <button
            onClick={() => {
              setSelectedId(0);
            }}
          >
            <h1>CLOSE</h1>
          </button>
          <UpdateComponent id={selectedId} />
        </>
      )}
    </div>
  );
}
