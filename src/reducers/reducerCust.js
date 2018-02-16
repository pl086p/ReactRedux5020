import { ACTION_REQUEST_CUSTOMERS,
         ACTION_RECEIVE_CUSTOMERS
       } from '../actions/actionOnCustomer';

const reducerCust = (state = null, action) => {
  switch (action.type) {

    case ACTION_REQUEST_CUSTOMERS:
      console.log(ACTION_REQUEST_CUSTOMERS);
      return {
        ...state,
        stateEmpsURL: action.stateCustURL
      };

    case ACTION_RECEIVE_CUSTOMERS:
      console.log(ACTION_RECEIVE_CUSTOMERS);
      return {
        ...state,
        stateCustToLoad:  action.stateCustToLoad,
        stateCustFromAPI: action.stateCustFromAPI,
        stateCustTest: action.stateCustTest
      };

    default:
      return state;
  }
};

export default reducerCust;
