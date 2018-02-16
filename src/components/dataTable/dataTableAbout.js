import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SizeActions from '../../actions/actionOnTravelGrid';

const style = {
  margin: '10px 0'
};

const DataTableAbout = () => {

  return (
    <div style={style}>
        <h5>About Data Table Tab</h5>
        - Spliter: with JqxSplitter<br />
        - Tabs: with react-bootstrap-tabs<br />
        - Rbs-Grid: with react-bootstrap Grid<br />
        - Rbs-Table: with react-bootstrap-table<br />
        - JqxTable: with react_jqxgrid.js<br />
    </div>
  );
};

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  //actions: bindActionCreators(Actions, dispatch)
  actions: { sizeActions: bindActionCreators(SizeActions, dispatch) }
});

/**
 * Connect the component to
 * the Redux Store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTableAbout);
