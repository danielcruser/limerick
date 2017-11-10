import axios from 'axios';
import history from '../history';

const GET_POEMS = 'GET_POEMS'
const POST_POEM = 'POST_POEM';
const DELETE_POEM = 'DELETE_POEM';
const PUT_POEM = 'PUT_POEM';

const initialState = {
  allPoems: []
};

const getPoemsAction = poems => ({ type: GET_POEMS, poems })
const postPoemAction = poem => ({ type: POST_POEM, poem });
const deletepoemAction = id => ({ type: DELETE_POEM, id });
const updatepoemAction = poem => ({ type: PUT_POEM, poem });

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case GET_POEMS:
      newState.allPoems = action.poems
      return newState
    case POST_POEM:
      newState.allPoems = [...newState.allPoems, action.poem];
      return newState
    case PUT_POEM:
      newState.allPoems = newState.allPoems.map(poem => {
        return +poem.id === +action.poem.id ? action.poem : poem
      });
      return newState;
    case DELETE_POEM:
      newState.allPoems = newState.allPoems.filter(poem => +poem.id !== +action.id);
      return newState
    default:
      return newState;
  }
}

export function fetchPoems() {
  return function thunk(dispatch) {
    return axios
      .get('/api/poems')
      .then(res => res.data)
      .then(poems => {
        const action = getPoemsAction(poems);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
}

export const putPoemThunk = poem => {
  return dispatch => {
    return axios
      .put(`/api/poems/${poem.id}`, poem)
      .then(res => {
        return res.data;
      })
      .then(changedpoem => {
        const action = updatepoemAction(changedpoem);
        dispatch(action);
        history.push(`/poems/${changedpoem.id}`);
      })
      .catch(err => console.error(err))
  }
}

export const postPoemThunk = (title) => {
  return dispatch => {
    const ObjectToSend = {
      title
    }
    return axios
      .post('/api/poems', ObjectToSend)
      .then(res => {
        return res.data;
      })
      .then(createpoem => {
        const action = postPoemAction(createpoem);
        dispatch(action);
        dispatch(fetchPoems())
        history.push('/build')
      })
      .catch(console.error);
  };
};

export const deletepoemThunk = id => {
  return dispatch => {
    return axios.delete(`/api/poems/${id}`)
      .then(() => {
        const action = deletepoemAction(id);
        dispatch(action);
      });
  };
};
