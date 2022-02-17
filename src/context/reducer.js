import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
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

    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editItem: null,
        singleJobError: false,
        editComplete: false,
        jobs: action.payload,
      }

    case FETCH_JOBS_ERROR:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default reducer
