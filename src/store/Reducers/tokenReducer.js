import * as types from '../Actions/constants';

const initialState = {
  token: null
};

export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOKEN:
        return {...state};
    case types.TOKEN_SUCCESS:
        console.log(action, "action====")
        return {...state, token: action};
    case types.TOKEN_FAILS:
        return {...state, error: action.error}
    default:
      return state;
  }
}