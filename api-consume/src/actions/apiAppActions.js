import axios from 'axios';

export const getApiAppActions = () => dispatch => {
  dispatch({ type: "GET_API" });
  axios
    .get('https://api.exchangerate-api.com/v4/latest/USD')
    .then(result => {
      console.log(result.data.rates);
      dispatch({ type: "RETURN_API_DATA", payload: result.data.rates });
    })
    .catch(error => {
      dispatch({ type: "GET_FAILURE", payload: error.response });
    });
};
