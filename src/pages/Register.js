import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/appContext'
import { Redirect } from 'react-router-dom'
import FormRow from '../components/FormRow'
import logo from '../assets/logo.svg'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
  })

  const { register, fetchJobs, login } = useGlobalContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values

    if (isMember) {
      login({  email, password })
    }

    register({ name, email, password })
  }

  return (
    <Wrapper className='page full-page'>
      <div className='container'>
        <form className='form' onSubmit={onSubmit}>
          <img src={logo} alt='jobio' className='logo' />

          <h4>{values.isMember ? 'Login' : 'Register'}</h4>

          {!values.isMember && (
            <FormRow
              type='name'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
          )}

          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />

          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />

          <button type='submit' className='btn btn-block'>
            Submit
          </button>

          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}

            <button type='button' onClick={toggleMember} className='member-btn'>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
          <button type='button' className='btn btn-block' onClick={fetchJobs}>
            TEST ONLY---- Get All Jobs
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
  }
`

export default Register
