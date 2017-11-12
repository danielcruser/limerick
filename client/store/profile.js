import axios from 'axios';
import history from '../history';

const GET_PROFILE = 'GET_PROFILE'


const initialState = {
  userProfile: {},
  loading: true
};

const getProfileAction = userProfile => ({ type: GET_PROFILE, userProfile })


export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case GET_PROFILE:
      newState.userProfile = action.userProfile
      newState.loading = false
      console.log('check here')
      return newState
    default:
      return newState;
  }
}

export function fetchProfileThunk(id) {
  return function thunk(dispatch) {
    return axios
      .get(`/api/users/${id}`)
      .then(res => res.data)
      .then(userProfile => {
        const action = getProfileAction(userProfile);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
}

