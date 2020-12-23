import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const STabs = styled(Tabs)`
  margin: 0;
  padding: 0;
  max-width: 100% !important;
`;

export const STabList = styled(TabList)`
  padding: 0;
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
`;
STabList.tabsRole = "TabList";

export const STab = styled(Tab)`
  width: 100%;
  outline: none;
  padding: 15px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  transition: 0.3s ease-in-out;

  &.is-selected {
    color: white;
    background: #232323;
  }
`;
STab.tabsRole = "Tab";

export const STabPanel = styled(TabPanel)`
  display: none;
  padding: 10px;
  min-height: 80vh;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = "TabPanel";
