import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap-tabs';

import {AppHeader}      from '../components/common/AppHeader';
//import {AppMainMenu}    from '../components/common/AppMainMenu';
//import {AppFooter}      from '../components/common/AppFooter';
import Home from './home/Home';
import DataTableMain  from './dataTable/dataTableMain';
import ListDetailMain from './listAndDetail/listDetailMain';
import AppTravelGrid  from './timetravel/appTravelGrid';


const App = () => (
    <div>
        <AppHeader />

        <Tabs onSecle={(index, label) => console.log(label + ' selected')}>
            <Tab eventKey={1} label='Home'>
                <Home />
            </Tab>
            <Tab eventKey={2} label='Data Table'>
                <DataTableMain />
            </Tab>
            <Tab eventKey={3} label='List-Detail'>
                <ListDetailMain />
            </Tab>          
            <Tab eventKey={4} label='Travel Grid'>
                <AppTravelGrid /> 
            </Tab>
        </Tabs>;
   </div> 
);

export default App;
