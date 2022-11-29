import { useQuery } from "@apollo/client";
import { GET_CONTACTS, GET_CONTACT } from "./gql/Query";
import React, { useState } from "react";
import { TableRow, Add, Update, Remove } from "./components/index";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { getDefaultContacts } from "./defaultDataBase/generateDatabase";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT, REMOVE_CONTACT } from "./gql/Mutation";
import { refreshPage } from "./index";

function UpdateComponent(id) {
  const { loading, error, data } = useQuery(GET_CONTACT, {
    variables: { id: id.id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;

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
async function juju() {
  await new Promise((r) => setTimeout(r, 1));
}

export function App() {
  const { loading, error, data } = useQuery(GET_CONTACTS);
  const [selectedId, setSelectedId] = useState(0);
  const [index, setIndex] = useState(0);
  const [add, setAdd] = useState(false);

  const [createContact] = useMutation(CREATE_CONTACT);
  const [removeContact] = useMutation(REMOVE_CONTACT);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>
      <div className="title">
        <h1>PHONE BOOK</h1>
      </div>
      <div className="createDataBase">
        <button
          onClick={() => {
            for (let i = 0; i < data.contacts.length; i++) {
              let contact = data.contacts[i];
              console.log(contact.id);
              removeContact({
                variables: { id: contact.id },
              });
            }

            let dataBase = getDefaultContacts();

            for (let contact in dataBase) {
              console.log(dataBase[0].phoneNumbers.join(","));
              createContact({
                variables: {
                  firstName: dataBase[contact].firstName,
                  lastName: dataBase[contact].lastName,
                  nickName: dataBase[contact].nickName,
                  address: dataBase[contact].address,
                  phoneNumbers: dataBase[contact].phoneNumbers.join(","),
                  photo: dataBase[contact].photo,
                },
              }).catch(function (error) {
                console.error("oops, something went wrong!", error);
              });
            }
            refreshPage();
          }}
        >
          Reload default database
        </button>
      </div>
      {!selectedId && !add && (
        <div id="parent">
          {data.contacts.slice(5 * index, 5 * (index + 1)).map((contact) => (
            <div className="child">
              <Remove id={contact.id} />

              <button
                onClick={() => {
                  setSelectedId(contact.id);
                }}
              >
                <TableRow
                  firstName={contact.firstName}
                  lastName={contact.lastName}
                  nickName={contact.nickName}
                  photo={contact.photo}
                />
              </button>
            </div>
          ))}
        </div>
      )}
      {add && (
        <>
          <button
            onClick={() => {
              setAdd(false);
            }}
          >
            <AiFillCloseCircle />
          </button>
          <Add />
        </>
      )}
      {selectedId && selectedId != -1 && (
        <>
          <button
            onClick={() => {
              setSelectedId(0);
            }}
          >
            <AiFillCloseCircle />
          </button>
          <UpdateComponent id={selectedId} />
        </>
      )}
      {index && !selectedId && (
        <button
          onClick={() => {
            if (index) {
              setIndex(index - 1);
              setSelectedId(-1);
              juju().then(() => {
                setSelectedId(0);
              });
            }
          }}
        >
          <GrFormPreviousLink />
        </button>
      )}

      {5 * (index + 1) < data.contacts.length && !selectedId && (
        <button
          onClick={() => {
            setIndex(index + 1);
            setSelectedId(-1);
            juju().then(() => {
              setSelectedId(0);
            });
          }}
        >
          <GrFormNextLink />
        </button>
      )}
      <button
        onClick={() => {
          setAdd(true);
        }}
      >
        add
      </button>
    </div>
  );
}
