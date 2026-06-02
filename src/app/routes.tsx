import React from 'react'
import PublicHome from '../pages/PublicHome'
import Login from '../pages/Login'
import RequestAccess from '../pages/RequestAccess'
import RestrictedOS from '../pages/RestrictedOS'

const routes = [
  { path: '/', element: <PublicHome /> },
  { path: '/login', element: <Login /> },
  { path: '/request-access', element: <RequestAccess /> },
  { path: '/os', element: <RestrictedOS /> }
]

export default routes
