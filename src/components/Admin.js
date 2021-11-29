import React, { useEffect, useState } from "react";
import Page from "./common/Page";
import { getBirdImageURL } from "../database/birds"

function Admin () {
  const [data, dataSet] = useState(undefined)

  useEffect(() => {
    async function fetchData(){
      const birdImageURL = await getBirdImageURL('testBird');
      dataSet(birdImageURL);
    }
    fetchData();
  }, [])

  return (
    <Page>
      Admin page
      <img src={data} alt="testBird" width="100" height="100"/> 
    </Page>
  )
}

export default Admin;