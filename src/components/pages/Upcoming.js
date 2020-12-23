import React from "react";

import Display from "../data/Display";
import Input from "../data/Input";

const Upcoming = () => {
  return (
    <>
      <Input note='upcoming' docs='upcoming' />
      <Display docus='upcoming' />
    </>
  );
};

export default Upcoming;
