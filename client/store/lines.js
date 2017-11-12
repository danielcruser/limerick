import axios from 'axios';
import history from '../history';
import {fetchPoems } from './poems'
const GET_LINES = 'GET_LINES'
const POST_LINE = 'POST_LINE';
const DELETE_LINE = 'DELETE_LINE';
const PUT_LINE = 'PUT_LINE';

const initialState = {
  allLines: []
};

const getLinesAction = lines => ({ type: GET_LINES, lines })
const postLineAction = line => ({ type: POST_LINE, line });
const deleteLineAction = id => ({ type: DELETE_LINE, id });
const updateLineAction = line => ({ type: PUT_LINE, line });

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case GET_LINES:
      newState.allLines = action.lines
      return newState
    case POST_LINE:
      newState.allLines = [...newState.allLines, action.line];
      return newState
    case PUT_LINE:
      newState.allLines = newState.allLines.map(line => {
        return +line.id === +action.line.id ? action.line : line
      });
      return newState;
    case DELETE_LINE:
      newState.allLines = newState.allLines.filter(line => +line.id !== +action.id);
      return newState
    default:
      return newState;
  }
}

export function fetchLines() {
  return function thunk(dispatch) {
    return axios
      .get('/api/lines')
      .then(res => res.data)
      .then(lines => {
        const action = getLinesAction(lines);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
}

export const putLineThunk = line => {
  return dispatch => {
    return axios
      .put(`/api/lines/${Line.id}`, line)
      .then(res => {
        return res.data;
      })
      .then(changedLine => {
        const action = updateLineAction(changedLine);
        dispatch(action);

      })
      .catch(err => console.error(err))
  }
}

export const postLineThunk = (text, poemId, spot, userId) => {
  console.log('check here')
  return dispatch => {
    const ObjectToSend = {
      text,
      poemId,
      spot,
      userId
    }
    return axios
      .post('/api/lines', ObjectToSend)
      .then(res => {
        return res.data;
      })
      .then(createLine => {
        const action = postLineAction(createLine);
        dispatch(action);

        history.push('/build')
        dispatch(fetchPoems())
      })
      .catch(console.error);
  };
};

export const deleteLineThunk = id => {
  return dispatch => {
    return axios.delete(`/api/lines/${id}`)
      .then(() => {
        const action = deleteLineAction(id);
        dispatch(action);
      });
  };
};
