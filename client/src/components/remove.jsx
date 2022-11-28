import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_CONTACT } from "../gql/Mutation";
import { refreshPage } from "..";

export function Remove(props) {
  const [id, setId] = useState(props.id);
  const [removeContact] = useMutation(REMOVE_CONTACT);

  return (
    <div>
      <button
        color="red"
        onClick={() => {
          removeContact({
            variables: { id: id },
          }).then((val) => {
            refreshPage();
          });
          console.log(id, "success!");
        }}
      >
        REMOVE
      </button>
    </div>
  );
}
