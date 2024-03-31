import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const CardContainer = ({ text, image }) => {
  return (
    <div
      className="card relative h-72 w-96 shrink-0 cursor-pointer overflow-hidden 
    rounded-2xl text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 lg:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
    >
      <CardFront image={image} />
      <CardBack text={text} />
    </div>
  );
};

export default CardContainer;
