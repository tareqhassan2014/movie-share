import { CCol, CContainer, CRow, CSpinner } from '@coreui/react'
import { useEffect, useState } from 'react'
import { getAllMovies } from 'src/services/movie'
import MovieCard from './MovieCard'

const AllMovie = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(false)

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
    }, [refresh])

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
                        movies?.map((movie) => (
                            <MovieCard setRefresh={setRefresh} movie={movie} key={movie._id} />
                        ))}
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

export default AllMovie
