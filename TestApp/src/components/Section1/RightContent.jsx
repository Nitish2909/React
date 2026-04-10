import React from "react";
import Card from "./Card";

const RightContent = (props) => {
  return (
    <div className="h-full w-2/3  mt-10 mb-5 flex gap-4 flex-nowrap overflow-x-auto">
      {props.users.map((elem, idx)=>{
        return <Card key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  );
};

export default RightContent;
