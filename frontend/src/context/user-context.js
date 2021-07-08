import { createContext, useState } from "react";
import useInputValue from '../hooks/use-input-value';
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../graphql/queries'
import { useEffect } from 'react'

export const UserContext = createContext()

function checkStep() {
  const step = sessionStorage.getItem('UIstep')
  const hasStep = Boolean(step) 
  if(hasStep && !isNaN(step)) return Number(step)
  return 0
}

function getInitialState(key) {
  return sessionStorage.getItem(key) || ''
}

function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const addUser = (newUser = {}) => setUsers([...users, newUser])
  const [UIstep, setUIStep] = useState(checkStep())
  const handleStep = (value = 0) => {
    sessionStorage.setItem('UIstep', value)
    setUIStep(Number(value))
  }
  const name = useInputValue(getInitialState('name'));
  const secondName = useInputValue(getInitialState('secondName'));
  const lastName = useInputValue(getInitialState('lastName'));
  const secondLastName = useInputValue(getInitialState('secondLastName'));
  const day = useInputValue(getInitialState('day'))
  const month = useInputValue(getInitialState('month'))
  const year = useInputValue(getInitialState('year'))
  const email = useInputValue(getInitialState('email'))
  const phone = useInputValue(getInitialState('phone'))

  const { data } = useQuery(GET_USERS)
  useEffect(() => {
    if(data?.getAllUsers) {
      setUsers(data.getAllUsers)
    }
  }, [data])
  return (
    <UserContext.Provider value={{
      UIstep,
      handleStep,
      name,
      secondName,
      lastName,
      secondLastName,
      day,
      month,
      year,
      email,
      phone,
      users,
      addUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider