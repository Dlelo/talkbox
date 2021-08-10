import * as types from './constants'
import axios from 'axios'

const fetchToken = data => ({
    type: types.TOKEN,
    data
});

const fetchTokenSuccess = data => ({
    type: types.TOKEN_SUCCESS,
    data
});

const fetchTokenFails = error => ({
    type: types.TOKEN_FAILS,
    error
});


function fetchTokenAction(){
    return(dispatch) => {
        dispatch(fetchToken());
        const headers = {
            'Ocp-Apim-Subscription-Key': '0dc358cd8b9a42b58493eb2220e19984',
            'Content-type': 'application/x-www-form-urlencoded',
            'Content-Length': 0,
          }
        axios.post("https://uksouth.api.cognitive.microsoft.com/sts/v1.0/issueToken",{}, {
            headers
          })
          .then(data => {
              dispatch(fetchTokenSuccess(data.data))
            })
          .catch(error => dispatch(fetchTokenFails(error)))
    }}

export {
    fetchTokenAction
}