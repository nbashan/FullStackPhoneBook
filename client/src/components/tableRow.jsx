import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_CONTACT } from "../gql/Mutation";

export function TableRow(props) {
  const [nickName, setNickName] = useState(props.nickName);
  const [photo, setPhoto] = useState(props.photo);

  return (
    <div>
      <h1>{nickName}</h1>
      <img src={photo} />
    </div>
  );
}
