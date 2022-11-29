import React, { useState } from "react";

export function TableRow(props) {
  const [nickName, setNickName] = useState(props.nickName);
  const [photo, setPhoto] = useState(props.photo);

  return (
    <div>
      <h1>{nickName}</h1>
      <img src={photo} />
      {/* <img style={{ filter: "blur(5px) " }} src={photo} />
      <img style={{ filter: "grayscale(100%)" }} src={photo} />
      <img style={{ filter: "saturate(200%)" }} src={photo} /> */}
    </div>
  );
}
