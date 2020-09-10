import React from "react";
import { useEffect, useState } from "react";
import CarditemDetails from "./CarditemDetails";

export default function InfoDetailsPage(props) {
  let [infoData, setInfoDat] = useState > {};
  console.log(props);

  function fetchInfo() {
    const imageId = props.match.params.id;
    console.log(imageId);
    fetch("https://mock-data-api.firebaseio.com/marvel-characters.json")
      .then((res) => res.json())
      .then((result) => {
        setInfoDat(result);
      });
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <CarditemDetails
        title={infoData.data.results[0].name}
        description={infoData.data.results[0].id}
        imageURL={infoData.data.results[0].modified}
      />
    </div>
  );
}
