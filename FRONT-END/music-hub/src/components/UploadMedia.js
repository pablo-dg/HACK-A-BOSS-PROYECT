import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import "./UploadMedia.css";

export const UploadMedia = (props) => {
  const [file, setFile] = useState();
  const [filePicked, setFilePicked] = useState(false);
  const [token, setToken] = useContext(AuthContext);
  const [title, setTitle] = useState();
  const { profileMedia, url, refreshMultimedia } = props;

  function uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append(profileMedia, file);
    data.append("titulo", title);

    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((success) => {
        refreshMultimedia();
      })
      .catch((error) => console.log(error));
  }

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setFilePicked(true);
  };

  return (
    <div className="add-multimedia">
      <form onSubmit={uploadFile}>
        <div className="add-multimedia-form">
          <p>Nombre del archivo</p>
          <input
            type="text"
            name="location"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="update-musician-form-input"
          />
        </div>
        <div className="select-multimedia-form">
          <input type="file" onChange={onFileChange} />
          <button type="submit">Subir archivo</button>
        </div>
      </form>
    </div>
  );
};
