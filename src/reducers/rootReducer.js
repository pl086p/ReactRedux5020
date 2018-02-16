import { combineReducers } from 'redux';

// import reducerLog   from './reducerLog';
import reducerEmp   from './reducerEmp';
import reducerCust  from './reducerCust';
import reducerGrid  from './reducerGrid';

const rootReducer = combineReducers({
  reducerEmp: reducerEmp,
  reducerCust: reducerCust,
  reducerGrid: reducerGrid
});

export default rootReducer;
