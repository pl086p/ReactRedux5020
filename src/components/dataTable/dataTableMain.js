import React from 'react';

// import { Panel, Form, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button } from 'react-bootstrap';
// import { Well, Tabs, Tab } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap-tabs';

import JqxTree     from '../../lib/jqwidgets-react/react_jqxtree.js';
import JqxSplitter from '../../lib/jqwidgets-react/react_jqxsplitter.js';
import JqxExpander from '../../lib/jqwidgets-react/react_jqxexpander.js';
import JqxListBox  from '../../lib/jqwidgets-react/react_jqxlistbox.js';
import JqxPanel    from '../../lib/jqwidgets-react/react_jqxpanel.js';

// this may replace JqxSplitter
// import SplitPane from '../../lib/SplitPane';

import DataTableAbout from './dataTableAbout';
import ListRbsGrid  from './listRbsGrid';
import ListRbsTable from './listRbsTable';
import ListJqxTable from './listJqxTable';

import Grid    from '../timetravel/Grid'; // import LogSearch from './logSearch';

const DataTableMain = () => {

    const spliter_total_width = 1200;
    const left_panel_width = 800;

    return (
     <JqxSplitter
          width={spliter_total_width} height={500} orientation={'vertical'}
          panels={[{ size: left_panel_width, min: 100, collapsible: true }, {min: 200, collapsible: false}]} >
          
          {/* Left Panel ============================================================ */}
          {/* tab bsStyle = tabs (default)/pills (blue button) */}
          <div>

                <Tabs>

                    <Tab label='About'>
                        <DataTableAbout />
                    </Tab>

                    <Tab label='Rbs-Grid'>
                        {/* <ListFilter /> */}
                        <ListRbsGrid />
                    </Tab>

                    <Tab label='Rbs-Table'>
                        <ListRbsTable /> 
                    </Tab>

                    <Tab label='JqxTable'>
                        {/* <ListFilter /> */}
                        <ListJqxTable />
                    </Tab>

                </Tabs>

          </div>

          {/* Right Panel =========================================================== */}
          <div>

             {/* <LogEdit /> */}
                <Tabs>
                <Tab label='Tab 1'>
                    Tab 1 content
                </Tab>
                <Tab label='Tab 2'>
                    Tab 2 content
                </Tab>
                <Tab label='Tab 3' disabled>
                    Tab 3 content
                </Tab>
                </Tabs>;
          </div>
      </JqxSplitter>
   );
};

export default DataTableMain;

