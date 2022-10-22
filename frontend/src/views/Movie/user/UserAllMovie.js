import { CCol, CContainer, CRow, CSpinner } from '@coreui/react'
import { useEffect, useState } from 'react'
import { getAllMovies } from 'src/services/movie'
import UserMovieCard from './UserMovieCard'

const UserAllMovie = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAllMovies()
            .then((res) => {
                setMovies(res.data)

                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setError(err)
            })
    }, [])

    let content = null

    if (loading) {
        content = (
            <div className="loading-container">
                <CSpinner color="success" />
            </div>
        )
    } else if (error) {
        content = <div>Error</div>
    } else {
        content = (
            <CContainer className="mt-4">
                <CRow>
                    {movies.length !== 0 &&
                        movies?.map((movie) => <UserMovieCard movie={movie} key={movie._id} />)}
                </CRow>
            </CContainer>
        )
    }

    return (
        <CRow>
            <CCol xs={12}>{content}</CCol>
        </CRow>
    )
}

export default UserAllMovie
