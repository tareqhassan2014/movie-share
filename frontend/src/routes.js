import React from 'react'

const AllMovie = React.lazy(() => import('./views/Movie/AllMovie'))
const AddMovie = React.lazy(() => import('./views/Movie/AddMovie'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = []

export default routes
