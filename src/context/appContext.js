import axios from 'axios'
import '../axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  DELETE_JOB_ERROR,
} from './actions'

const initialState = {
  user: null,
  isLoading: false,
  jobs: [],
  showAlert: false,
  editItem: null,
  singleJobError: false,
  editComplete: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //console.log(state)

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  // Register
  const register = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/auth/register`, {
        ...userInput,
      })
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name })

      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
  }

  // Login
  const login = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/auth/login`, {
        ...userInput,
      })
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
  }

  // Fetch All Jobs
  const fetchJobs = async () => {
    setLoading()
    try {
      const { data } = await axios.get('/jobs')
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data.jobs })
    } catch (error) {
      dispatch({ type: FETCH_JOBS_ERROR })
      // Pending Logout
    }
  }

  // Create Job
  const createJob = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/jobs`, { ...userInput })

      console.log('data bellow-------------->')

      dispatch({ type: CREATE_JOB_SUCCESS, payload: data.job })
    } catch (error) {
      dispatch({ type: CREATE_JOB_ERROR })
    }
  }

  const deleteJob = async (jobId) => {
    setLoading()
    try {
      await axios.delete(`/jobs/${jobId}`)
      fetchJobs()
    } catch (error) {
      dispatch({ type: DELETE_JOB_ERROR })
    }
  }

  return (
    <AppContext.Provider
      value={{
        //State
        ...state,
        // Functions
        setLoading,
        register,
        fetchJobs,
        login,
        createJob,
        deleteJob
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
