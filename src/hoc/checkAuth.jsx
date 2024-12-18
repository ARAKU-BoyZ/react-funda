import { Navigate } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import React from 'react'


const IsAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const authData = useSelector((state) => state.auth?.authData)

    if (!authData ) {
      return <Navigate to="/login" />
    }
    return <WrappedComponent {...props} />
  }

  return AuthHOC
}

const NotAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const authData = useSelector((state) => state.auth?.authData)

    if (authData ) {
      return <Navigate to="/customers" />
    }

    return <WrappedComponent {...props} />
  }
  return AuthHOC
}




export { IsAuth, NotAuth }