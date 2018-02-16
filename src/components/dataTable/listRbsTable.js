import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CustActions from '../../actions/actionOnCustomer';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const ListRbsTable = ({actions, custState}) => {

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Data and Default
  ////////////////////////////////////////////////////////////////////////////////////////////////

  if (custState.stateCustToLoad) {
      actions.custActions.getCustsFromAPI();
  };

  let customerData = custState.stateCustFromAPI;

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // events
  ////////////////////////////////////////////////////////////////////////////////////////////////

  const onTableRowSelect = (row, isSelected, e) => {
    // console.log(JSON.stringify(row));
    actions.custActions.getCustomerByID(row.id, row.self);
  };

  const renderShowsTotal = (start, to, total) => {
    return (
          <p style={ { color: 'blue' } }>
            Log { start } - { to } ( Total: { total })
          </p>
    );
  };

  const CustomerListTable = () => {

    const tableConfiguration = {
      // sizePerPageList: [{ text: '10', value: 10}, { text: '20', value: 20}, { text: 'All', value: customerData.length} ],
      // sizePerPage: 5,  // default page size
      paginationShowsTotal: renderShowsTotal,
      paginationPosition: 'top'
    };

    const selectRowProperty = {
      mode: 'radio',
      hideSelectColumn: true,  // enable hide selection column (the radio column).
      clickToSelect: true,
      onSelect: onTableRowSelect,  // invoke the onClick envent: onLogListTableRowSelect()
      selected: [ custState.id ],  // default selected item(s). The number is isKey value
      bgColor: 'yellow',       // selected row color
      paginationSize: 5  // the pagination bar size.
    };

    return (
          <BootstrapTable
                data={customerData}
                options={tableConfiguration}
                condensed hover // striped
                height='300px'
                scrollTop={ 'Bottom' }
                headerStyle={ { background: '#84b7b7' } }
                pagination ={ true }
                selectRow={ selectRowProperty }

                containerStyle={ { // border: '#FFBB73 2.5px solid'
                                   // background: '#ffdbbe'
                               } }
                tableStyle={ { // border: '#0000FF 2.5px solid',
                               background: '	#d7dde1'
                           } }
                bordered={ true }    // table body border
                >

                <TableHeaderColumn headerAlign='center' width='20px' dataSort={true} dataField='id' isKey>Customer ID</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='name'>Customer Name</TableHeaderColumn>
          </BootstrapTable>
    );
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // render components
  ////////////////////////////////////////////////////////////////////////////////////////////////

  return (
      <div>
          <h4>react-bootstrap-table</h4>
          <CustomerListTable />       
      </div>
  );
};

/* ////////////////////////////////////////////////////////////////////////////////////////////////
 * mapping state and action
 * ////////////////////////////////////////////////////////////////////////////////////////////////
 * */

const mapStateToProps = (state) => ({
  custState: state.reducerCust
});

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(Actions, dispatch)
  actions: { custActions: bindActionCreators(CustActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRbsTable);
