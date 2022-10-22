import React from 'react'

const AllMovie = React.lazy(() => import('./views/Movie/AllMovie'))
const AddMovie = React.lazy(() => import('./views/Movie/AddMovie'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/movies', name: 'All Movies', element: AllMovie },
  { path: '/add/movie', name: 'Add Movies', element: AddMovie },
  { path: '/', name: 'Dashboard', element: Dashboard },
]

export default routes
