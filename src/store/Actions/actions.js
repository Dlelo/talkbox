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
              dispatch(fetchTokenSuccess(data.data));
            })
          .catch(error => dispatch(fetchTokenFails(error)));
    }
}

function getChatData(){
    return (dispatch)=> {
    const chats = [   
            {"id":"1","image":"./assets/images/donattah.jpeg", "name":"Donattah A", "userType":"sender", "message": "How is the game going?? Some quick example text to build", "userType":"sender","time":"Wed Aug 04 2021 12:10:45 GMT+0300"},
            {"id":"2", "image":"./assets/images/user2.jpeg", "name":"Mat K.", "userType":"receiver", "message": " Some quick example text to build", "userType":"receiver", "time":"Tuesday Aug 09 2021 13:10:45 GMT+0300"},
            {"id": "3", "image":"./assets/images/user3.jpeg", "name":"Anthony K.", "userType":"receiver", "message": "Hey", "userType":"receiver", "time":"Wed Aug 04 2021 14:10:45 GMT+0300"},
            {"id:":"4","image":"./assets/images/user4.jpeg", "name":"Abby A.", "userType":"receiver", "message": "How is are you?", "userType":"receiver", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"}   
    ]
    }
}

export {
    fetchTokenAction, getChatData
}