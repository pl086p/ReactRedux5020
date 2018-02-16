import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as GridActions from '../../actions/actionOnTravelGrid';

const style = {
  margin: '10px 0'
};

const SetSize = ({actions, gridState}) => {

  const handleWidthChange = (e) => {
    console.log('==== handleWidthChange');
    actions.gridActions.setGridSize({
      width: parseInt(e.target.value),
      height: parseInt(gridState.height)
    });
  };

  const handleHeightChange = (e) => {
    console.log('==== handleHeightChange');
    actions.gridActions.setGridSize({
      width: parseInt(gridState.width),
      height: parseInt(e.target.value)
    });
  };

  return (
    <div style={style}>
      (Execute a function when the value is changed.)<br />
      <label>
        Width: 
        <input onChange={handleWidthChange} value={gridState.width}
          type='number'
          min='0'
          max='20' />
      </label>
      <br />
      <label>
        Height: 
        <input onChange={handleHeightChange} value={gridState.height}
          type='number'
          min='0'
          max='20' />
      </label>
    </div>
  );
};


const mapStateToProps = (state) => ({
  gridState: state.reducerGrid
});

const mapDispatchToProps = (dispatch) => ({
  actions: { gridActions: bindActionCreators(GridActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetSize);
