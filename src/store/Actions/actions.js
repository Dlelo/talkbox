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
            'Ocp-Apim-Subscription-Key': '5e636f783d364748b752dc2230ab72cc',
            'Content-type': 'application/x-www-form-urlencoded',
          }
        axios.post("https://centralus.api.cognitive.microsoft.com/sts/v1.0/issuetoken",{}, {
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