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

const getLinesAction = Lines => ({ type: GET_LINES, Lines })
const postLineAction = Line => ({ type: POST_LINE, Line });
const deleteLineAction = id => ({ type: DELETE_LINE, id });
const updateLineAction = Line => ({ type: PUT_LINE, Line });

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case GET_LINES:
      newState.allLines = action.Lines
      return newState
    case POST_LINE:
      newState.allLines = [...newState.allLines, action.Line];
      return newState
    case PUT_LINE:
      newState.allLines = newState.allLines.map(Line => {
        return +Line.id === +action.Line.id ? action.Line : Line
      });
      return newState;
    case DELETE_LINE:
      newState.allLines = newState.allLines.filter(Line => +Line.id !== +action.id);
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
      .then(Lines => {
        const action = getLinesAction(Lines);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
}

export const putLineThunk = Line => {
  return dispatch => {
    return axios
      .put(`/api/lines/${Line.id}`, Line)
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

export const postLineThunk = (text, poemId, spot) => {
  console.log('check here')
  return dispatch => {
    const ObjectToSend = {
      text,
      poemId,
      spot
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
