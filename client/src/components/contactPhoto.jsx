import React, { useEffect, useState } from "react";

export function ContactPhoto(props) {
  const [photo, setPhoto] = useState(props.photo);
  useEffect(() => {
    let fileInput = document.getElementById("fileInput" + props.id);
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        console.log(reader.result);
        props.setPhoto(reader.result);
        setPhoto(reader.result);
      });
      reader.readAsDataURL(file);
    });
  }, [props.file]);

  return (
    <>
      <img src={photo} />
      <input
        type="text"
        placeholder={photo}
        onChange={(event) => {
          props.setPhoto(event.target.value);
          setPhoto(event.target.value);
        }}
      />
      <input type="file" id={"fileInput" + props.id} />
    </>
  );
}
