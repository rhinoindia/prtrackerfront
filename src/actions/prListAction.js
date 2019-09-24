import axios from 'axios';
import { createAction } from 'redux-actions';
import GET_PR_LIST from '../constants/prActionTypes';
import list from '../json';

export const getPrList = createAction(GET_PR_LIST);

export function fetchPrList(status, component) {
  return (dispatch) => {
    // eslint-disable-next-line no-console
    console.log('calling action');
    return axios.get(`http://10.1.212.156:4000/api/pullrequests?status=${status}&component=${component}`).then((res) => {
      const list = res.data;
      // eslint-disable-next-line no-console
      console.log('list===>', list);
      dispatch(getPrList(list));
    // eslint-disable-next-line no-console
    }).catch((err) => console.log('Error ==>', err));
  };
}


// export const fetchPrList = () => {
//   return (dispatch) => {
//     // eslint-disable-next-line no-console
//     console.log(list);
//     dispatch(getPrList(list));
//   };
// };
