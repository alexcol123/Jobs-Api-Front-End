import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  DELETE_JOB_ERROR,
  FETCH_SINGLE_JOB_SUCCESS,
  FETCH_SINGLE_JOB_ERROR,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SET_USER,
  LOGOUT_USER
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

    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: [...state.jobs, action.payload],
      }

    case CREATE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      }

    case DELETE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      }

    case FETCH_SINGLE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editItem: action.payload,
      }

    case FETCH_SINGLE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        editItem: '',
        singleJobError: true,
      }

    case EDIT_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editComplete: true,
        editItem: action.payload,
      }

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        showAlert: false,
        jobs: [],
        isEditing: false,
        editItem: null,
      }

    default:
      return state
  }
}

export default reducer
