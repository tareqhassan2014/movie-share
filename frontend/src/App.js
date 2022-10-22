import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Dashboard from './views/dashboard/Dashboard'
import AddMovie from './views/Movie/AddMovie'
import MovieDetails from './views/Movie/MovieDetails'
import UpdateMovie from './views/Movie/UpdateMovie'
import UserAllMovie from './views/Movie/user/UserAllMovie'
import AllOrders from './views/order/AllOrders'

const AllMovie = React.lazy(() => import('./views/Movie/AllMovie'))

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages

const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={loading}>
                    <Routes>
                        <Route path="/" name="All Movie" element={<AllMovie />} />
                        <Route path="*" name="Not Found" element={<Page404 />} />
                        <Route path="/dashboard/*" name="Home" element={<DefaultLayout />}>
                            <Route path="" name="Dashboard" element={<Dashboard />} />
                            <Route path="manage/movies" name="Not Found" element={<AllMovie />} />
                            <Route path="all/movies" name="Not Found" element={<UserAllMovie />} />
                            <Route path="add/movie" name="Not Found" element={<AddMovie />} />
                            <Route
                                path="movie/:id"
                                name="Movie Details"
                                element={<MovieDetails />}
                            />
                            <Route
                                path="update/movie/:id"
                                name="Not Found"
                                element={<UpdateMovie />}
                            />
                            <Route path="Orders" name="Not Found" element={<AllOrders />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default App
