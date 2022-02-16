import axios from 'axios'
import '../axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
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
      // localStorage.setItem(
      //   'user',
      //   JSON.stringify({ name: data.user.name, token: data.token })
      // )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
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
