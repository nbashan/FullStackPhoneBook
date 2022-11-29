import React, { useEffect, useState } from "react";

export function ContactPhoto(props) {
  const [photo, setPhoto] = useState(props.photo);
  const [grayscale, setGrayScale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [staturation, setSaturation] = useState(100);

  useEffect(() => {
    let fileInput = document.getElementById("fileInput" + props.id);
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        props.setPhoto(reader.result);
        setPhoto(reader.result);
      });
      reader.readAsDataURL(file);
    });
  }, [props.file]);

  return (
    <>
      <img id="my-node" src={photo} />
      <input
        type="text"
        placeholder={photo}
        onChange={(event) => {
          props.setPhoto(event.target.value);
          setPhoto(event.target.value);
        }}
      />
      <input type="file" id={"fileInput" + props.id} />
      <>
        <button
          onClick={() => {
            document.getElementById("my-node").style.filter =
              "grayscale(" +
              grayscale +
              "%) " +
              "saturate(" +
              staturation +
              "%)" +
              " blur(" +
              blur +
              "px)";
          }}
        >
          s
        </button>
        <input
          type="number"
          placeholder={"blur: " + blur + "px"}
          onChange={(event) => {
            setBlur(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder={"grayscale: " + grayscale + "%"}
          onChange={(event) => {
            setGrayScale(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder={staturation}
          onChange={(event) => {
            setSaturation(event.target.value);
          }}
        />
      </>
    </>
  );
}
