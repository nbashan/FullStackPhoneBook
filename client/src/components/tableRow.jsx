import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_CONTACT } from "../gql/Mutation";

export function TableRow(props) {
  const [id, setId] = useState(props.id);
  const [nickName, setNickName] = useState(props.nickName);
  const [photo, setPhoto] = useState(props.photo);

  const [removeContact] = useMutation(REMOVE_CONTACT);

  return (
    <div>
      <h1>{nickName}</h1>
      <img src={photo} />
      <button
        onClick={() => {
          removeContact({
            variables: { id: id },
          });
          console.log(id, "success!");
        }}
      >
        REMOVE
      </button>
    </div>
  );
}
