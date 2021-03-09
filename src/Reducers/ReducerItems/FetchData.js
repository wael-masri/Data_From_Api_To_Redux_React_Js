import {fetchDataRequest,fetchDataSuccess,fetchDataFailure } from './ReducerActions';

import axios from 'axios';


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const data_fetching = response.data
            
       dispatch(fetchDataSuccess(data_fetching))
        })
        .catch( error => {
            const msg =error.message
            dispatch(fetchDataFailure(msg))
        })
    }
 
 }