import { combineReducers } from 'redux'
import page from './page'
import user from './user'

export default combineReducers({
  page,
  user
})


/*const initialState = {
    name: 'Лена',
    surname: 'Метелёва',
    age: 21
  }
  
  export default function userstate(state = initialState) {
    return state;
  }*/