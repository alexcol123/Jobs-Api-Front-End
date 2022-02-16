import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    // case 'GET_TRANSACTIONS':
    //   return {
    //     ...state,
    //     loading: false,
    //     transactions: action.payload,
    //   }
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
        editComplete: false,
      }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      }

    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        user: null,
        showAlert: true,
      }

    default:
      return state
  }
}

export default reducer
