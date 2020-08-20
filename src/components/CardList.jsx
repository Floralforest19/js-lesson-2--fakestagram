import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { useState, useEffects } from "react";

export default function CardList() {
  let [imageList, setImageList] = useState([]);

  function fetchImageList() {
    fetch("https://image-mock-data.firebaseio.com/images.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setImageList(result);
      });
  }

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div>
      <h2 onClick={fetchImageList}>Card List</h2>
      <div className="row">
        {imageList.map((item, index) => {
          return (
            <CardItem
              title={item.title}
              description={item.description}
              imageURL={item.imageURL}
            />
          );
        })}
      </div>
    </div>
  );
}
