import React from "react";

import Input from "../data/Input";
import Display from "../data/Display";

const Today = () => {
  return (
    <>
      <Input note='today' docs='today' />
      <Display docus='today' />
    </>
  );
};

export default Today;
