import React from "react";

import Today from "./Today";
import Plans from "./Plans";
import Upcoming from "./Upcoming";
import Thoughts from "./Thoughts";
import { STabs, STab, STabList, STabPanel } from "../styles/Tabing.element";

const Tabing = () => {
  const tabs = ["Today", "Plans", "Upcoming", "Thoughts"];
  const components = [<Today />, <Plans />, <Upcoming />, <Thoughts />];

  return (
    <>
      <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'>
        <STabList>
          {tabs.map((tab, index) => {
            return <STab key={index}>{tab}</STab>;
          })}
        </STabList>
        {components.map((component, index) => {
          return <STabPanel key={index}>{component}</STabPanel>;
        })}
      </STabs>
    </>
  );
};

export default Tabing;
