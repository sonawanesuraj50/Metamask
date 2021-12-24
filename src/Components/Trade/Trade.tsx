import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CenterAlign } from '../../Styles/Cards.styles';
import { STab, STabList, STabPanel, STabs, } from '../../Styles/Trade.styles';
import Pool from './Pool';
import Swap from './swap';



function Trade(){
    return(
        <CenterAlign>
            <STabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <STabList>
                    <STab>pool</STab>
                    <STab>Swap</STab>
                </STabList>
                <STabPanel><Pool /></STabPanel>
                <STabPanel><Swap /> </STabPanel>
            </STabs>
        </CenterAlign>
    )
}


export default Trade;