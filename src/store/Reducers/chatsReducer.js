import * as types from '../Actions/constants';

const initialState = {
  chats:  [   
    {"id":"1","image":"./assets/images/donattah.jpeg", "name":"Donattah A", "userType":"sender", "message": "How is the game going?? Some quick example text to build", "time":"Wed Aug 04 2021 12:10:45 GMT+0300"},
    {"id":"2", "image":"./assets/images/user2.jpeg", "name":"Mat K.", "userType":"receiver", "message": " Some quick example text to build", "time":"Tuesday Aug 09 2021 13:10:45 GMT+0300"},
    {"id": "3", "image":"./assets/images/user3.jpeg", "name":"Anthony K.", "userType":"receiver", "message": "Hey", "time":"Wed Aug 04 2021 14:10:45 GMT+0300"},
    {"id:":"4","image":"./assets/images/user4.jpeg", "name":"Abby A.", "userType":"receiver", "message": "How is are you?","time":"Wed Aug 04 2021 16:10:45 GMT+0300"}   
]
};

export default function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHATS:
        return {...state, chats:action};
    case types.ADD_CHAT:
        return {...state, chats: action};
    case types.CLEAR_CHATS:
        return {...state, chats:[]}
    default:
      return state;
  }
}