import React from "react";
import Page from "./common/Page";
import { uploadBirdImage } from "../firebase/birds"

function Admin () {
  const [image, setImage] = React.useState();
  const [name, setName] = React.useState();

  const handleImageInput = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <Page>
      Admin page
      <input type="file" onChange={handleImageInput}/>
      <button onClick={() => uploadBirdImage(image, name)}>Upload</button>

      <input value={name} onChange={e => setName(e.target.value)} type='text' />
    </Page>
  )
}

export default Admin;