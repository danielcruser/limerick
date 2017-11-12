import axios from 'axios'
import history from '../history'

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

const initialState = {
  lastFavorite : {}
}

const toggleFavoriteAction = favorite => ({type: TOGGLE_FAVORITE, favorite})

export default function (state = initialState, action) {
  switch (action.type){
    case TOGGLE_FAVORITE:
    return action.favorite
    default:
    return state
  }
}

export function toggleFavoriteThunk(favorite){
  return dispatch => {
    return axios.put('/api/favorites', favorite)
    .then(res => res.data)
    .then(toggledFavorite => {
      const action = toggleFavoriteAction(toggledFavorite)
      dispatch(action)
    })
    .catch(err => console.error(err))
  }
}
