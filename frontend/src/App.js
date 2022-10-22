import { Component, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import './scss/style.scss'
import AddMovie from './views/Movie/AddMovie'
import AllMovie from './views/Movie/AllMovie'
import MovieDetails from './views/Movie/MovieDetails'
import UpdateMovie from './views/Movie/UpdateMovie'
import UserAllMovie from './views/Movie/user/UserAllMovie'
import AllOrders from './views/order/AllOrders'
import Page404 from './views/pages/page404/Page404'

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={loading}>
                    <Routes>
                        <Route
                            path="/"
                            name="All Movie"
                            element={<Navigate to="/dashboard/all/movies" />}
                        />
                        <Route path="*" name="Not Found" element={<Page404 />} />
                        <Route path="/dashboard/*" name="Home" element={<DefaultLayout />}>
                            <Route
                                path=""
                                name="Dashboard"
                                element={<Navigate to="/dashboard/all/movies" />}
                            />
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
