import React from "react";
import { useEffect, useState } from "react";
import CarditemDetails from "./CarditemDetails";

export default function ImageDetailsPage(props) {
  let [imageData, setImageDat] = useState > {};
  console.log(props);

  function fetchImage() {
    const imageId = props.match.params.id;
    fetch("https://image-mock-data.firebaseio.com/image/" + imageId + ".json")
      .then((res) => res.json())
      .then((result) => {
        setImageDat(result);
      });
  }
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <CarditemDetails
        title={imageData.title}
        description={imageData.description}
        imageURL={imageData.imageURL}
      />
    </div>
  );
}
