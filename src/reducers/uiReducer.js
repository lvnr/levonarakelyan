import * as types from '../constants/actionTypes'
import initialState from './initialState'

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
export default function ui(state = initialState.ui, action) {
  switch (action.type) {
    case types.SET_UI_OPTION:
       return { ...state, [action.key]: action.value }
    default:
      return state
  }
}
