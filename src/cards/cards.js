import React from "react";
import CardComponent from "./card_component";
import { data } from "./data";

const Cards = () => {
  return (
    <div className="flex  flex-wrap flex-row mx-4 my-6 md:my-0 md:mx-10 space-x-0 ">
      {data.map((items) => {
        return <CardComponent key={items.id} items={items} {...items} />;
      })}
    </div>
  );
};

export default Cards;
