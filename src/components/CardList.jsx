import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { useState, useEffects } from "react";

export default function CardList() {
  let [infoList, setInfoList] = useState([]);

  function fetchInfoList() {
    fetch("https://mock-data-api.firebaseio.com/marvel-characters.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setInfoList(result);
      });
  }

  useEffect(() => {
    fetchInfoList();
  }, []);

  return (
    <div>
      <h2 onClick={fetchInfoList}>Card List</h2>
      <div className="row">
        {infoList.map((item, index) => {
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
