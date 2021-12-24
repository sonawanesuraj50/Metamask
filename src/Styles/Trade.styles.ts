import styled,{css} from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export const STabs = styled(Tabs)`
    width:90vw;
    max-width: 30rem;
    background: rgb(50, 41, 37);
    border-radius: 0.5rem;    
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
`;

export const STabList:any = styled(TabList)`
    display: flex;
    justify-Content: space-evenly;
    font-weight: 500;
    color: rgb(255, 205, 132);
    text-transform: capitalize; 
    font-size: 1.3rem;
    cursor: pointer;
    padding: 0;
`;

STabList.tabsRole = 'TabList';

export const STab:any = styled(Tab)`
   list-style-type: none;

  &.is-selected {
    border-bottom: 1px solid rgb(236 239 79);;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
`;
STab.tabsRole = 'Tab';


export const STabPanel:any = styled(TabPanel)`
  &.is-selected {
    display: block;
  }
`;

STabPanel.tabsRole = 'TabPanel';
