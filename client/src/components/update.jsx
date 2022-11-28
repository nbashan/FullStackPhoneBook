import React, { useState } from "react";
import { UPDATE_CONTACT } from "../gql/Mutation";
import { useMutation } from "@apollo/client";
import { ContactPhoto } from "./contactPhoto";
import { refreshPage } from "..";

export function Update(props) {
  const [updateContactFunction] = useMutation(UPDATE_CONTACT);

  const [id, setId] = useState(props.id);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [nickName, setNickName] = useState(props.nickName);
  const [address, setAddress] = useState(props.address);
  const [phoneNumbers, setPhoneNumbers] = useState(props.phoneNumbers);
  const [photo, setPhoto] = useState(props.photo);

  return (
    <table border="2">
      <tbody>
        <tr>
          <th>FIRST_NAME</th>
          <th>LAST_NAME</th>
          <th>NICK_NAME</th>
          <th>ADDRESS</th>
          <th>PHONE_NUMBERS</th>
          <th>PHOTO</th>
        </tr>

        <td>
          <input
            type="text"
            placeholder={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder={nickName}
            onChange={(event) => {
              setNickName(event.target.value);
            }}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder={phoneNumbers}
            onChange={(event) => {
              setPhoneNumbers(event.target.value);
            }}
          />
        </td>
        <td>
          <ContactPhoto photo={photo} setPhoto={setPhoto} id={id} />
        </td>
        <td>
          <button
            onClick={() => {
              console.log(
                id,
                firstName,
                lastName,
                nickName,
                address,
                phoneNumbers,
                photo
              );
              updateContactFunction({
                variables: {
                  id: id,
                  firstName: firstName,
                  lastName: lastName,
                  nickName: nickName,
                  address: address,
                  phoneNumbers: phoneNumbers,
                  photo: photo,
                },
              }).then((value) => {
                refreshPage();
              });
              console.log("successfull!!!");
            }}
          >
            Update Contact
          </button>
        </td>
      </tbody>
    </table>
  );
}
