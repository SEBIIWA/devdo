import React from "react";
import Display from "../data/Display";
import Input from "../data/Input";

const Thoughts = () => {
  return (
    <>
      <Input note='thoughts' docs='thoughts' />
      <Display docus='thoughts' />
    </>
  );
};

export default Thoughts;
