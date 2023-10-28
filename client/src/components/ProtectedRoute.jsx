import React, { useEffect } from 'react'
import authStore from '../stores/authStore'
import { Navigate } from "react-router-dom"
export default function ProtectedRoute({ children }) {
  const store = authStore();


  useEffect(() => {
    store.checkAuth();

    return () => {
      store.checkAuth();
    }
  }, [])

  switch (store.loggedIn) {
    case null:
      return (<div>
        <h1>Loading...</h1>
      </div>);


    case false:

      return <Navigate to="/login" />;

    default:
      return (
        <div>{children}</div>
      )
  }

}
