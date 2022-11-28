import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT } from "../gql/Mutation";
import anonomous from "../images/anonomous.png";
import { ContactPhoto } from "./contactPhoto";
import { refreshPage } from "..";

export function Add() {
  const [firstName, setFirstName] = useState("Enter first name...");
  const [lastName, setLastName] = useState("Enter lastName");
  const [nickName, setNickName] = useState("Enter nickName");
  const [address, setAddress] = useState("Enter address");
  const [phoneNumbers, setPhoneNumbers] = useState("Enter phoneNumbers");
  const [photo, setPhoto] = useState(anonomous);

  const [createContact] = useMutation(CREATE_CONTACT);

  let defualtPhoto = anonomous;

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
        <tr>
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
              type="[text]"
              placeholder={phoneNumbers}
              onChange={(event) => {
                setPhoneNumbers(event.target.value);
              }}
            />
          </td>
          <td>
            <ContactPhoto
              photo={defualtPhoto}
              setPhoto={setPhoto}
              id={"addingPhoto"}
            />
          </td>
          <td>
            <button
              onClick={() => {
                createContact({
                  variables: {
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
              Create
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
