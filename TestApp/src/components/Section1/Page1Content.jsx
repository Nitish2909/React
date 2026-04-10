import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Card from "./Card";

const Page1Content = (props) => {


  return (
    <div className="py-8 flex items-center h-[90vh] ">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
