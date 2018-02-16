import ApiCustomer from '../api/apiCustomer';

export const ACTION_REQUEST_CUSTOMERS = 'ACTION_REQUEST_CUSTOMERS';
export const ACTION_RECEIVE_CUSTOMERS = 'ACTION_RECEIVE_CUSTOMERS';

// ///////////////////////////////////////////////////////////////
// get all customers
export const requestCustomers = (url) => ({
  type: ACTION_REQUEST_CUSTOMERS,
  stateCustURL: url
});

export const receiveCustomers = (json) => ({
  type: ACTION_RECEIVE_CUSTOMERS,
  stateCustFromAPI: json,
  stateCustToLoad: false,
  stateCustTest: 5678
});

export const getCustsFromAPI = () => (dispatch) => {
  // get URL
  const URL = ApiCustomer.getCustomersURL();

  // set URL and dispatch action request
  dispatch(requestCustomers(URL));

  // get data, and dispatch receiveCustomers with the return result
  return ApiCustomer.getCustomers(URL, dispatch, receiveCustomers);
};

// ///////////////////////////////////////////////////////////////
// get log detail by logID

export const getCustomerByID = () => (dispatch) => {
  console.log('action: getCustomerByID()');
};