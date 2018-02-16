import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EmpActions from '../../actions/actionOnEmployee';
import * as CustActions from '../../actions/actionOnCustomer';

// jqxTree: React.createClass is deprecated
// import JqxGrid from '../../lib/jqwidgets-react//react_jqxgrid.js';

const ListJqxTable = ({actions, empState, custState}) => {

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // events
  ////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Data and Default
  ////////////////////////////////////////////////////////////////////////////////////////////////

    if (empState.stateEmpsToLoad) {
      actions.empActions.getEmpsFromAPI();
    };

    let employeeData = empState.stateEmpsFromAPI;

      
    if (custState.stateCustToLoad) {
        actions.custActions.getCustsFromAPI();
    };

    let customerData = custState.stateCustFromAPI;


    /*
    let source =
    {
        datatype: "json",
        localdata: data,
        datafields: [
            { name: 'id', type: 'int'},
            { name: 'name', type: 'string' }
        ]
    };
 
    let dataAdapter = new $.jqx.dataAdapter(source);
 
    let columns =
    [
      { text: 'Emp ID',   datafield: 'id', width: 50 },
      { text: 'Emp Name', datafield: 'name', width: 100 }
    ];
    */
   
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // render components
  ////////////////////////////////////////////////////////////////////////////////////////////////

  return (
      <div>
        <ul>
            {employeeData.map(function(e){
              return <li> {e.name}</li>
            })}
        </ul>

        <br /><br />

        <ul>
            {customerData.map(function(c){
              return <li> {c.name}</li>
            })}
        </ul>

        <br /> (jqxTree: React.createClass is deprecated)
        {/*}
        <JqxGrid width={200} source={dataAdapter} pageable={true}
             sortable={true} altrows={true} enabletooltips={true}
             autoheight={true} editable={true} columns={columns}
        />
        */}
      </div>
  );
};

/* ////////////////////////////////////////////////////////////////////////////////////////////////
 * mapping state and action
 * ////////////////////////////////////////////////////////////////////////////////////////////////
 * */

const mapStateToProps = (state) => ({
  empState: state.reducerEmp, custState: state.reducerCust
});

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(Actions, dispatch)
  actions: { empActions: bindActionCreators(EmpActions, dispatch), custActions: bindActionCreators(CustActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListJqxTable);
