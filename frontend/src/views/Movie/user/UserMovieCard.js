import { CCard, CCol } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { placeOrder } from 'src/services/movie'

const UserMovieCard = ({ movie }) => {
    const poster = `${process.env.REACT_APP_API_URL}/media/image/${movie?.poster}`
    const rating = movie?.rating

    const navigate = useNavigate()

    // delete movie from the list
    const handelOrderMovie = async (id) => {
        try {
            await placeOrder(id)
            window.alert('Movie order successfully')
        } catch (error) {
            window.alert('Error order movie')
        }
    }

    return (
        <CCol xl={3} lg={4} sm={6} sx={12}>
            <CCard className="mb-4 movie-card">
                <img className="movie-poster" src={poster} alt={movie?.title} />
                <div className="movie-info p-4">
                    <h5 className="movie-title">{movie?.title}</h5>
                    <p className="movie-year">{movie?.year}</p>
                    <div className="rating">
                        {[...Array(5)].map((star, i) => {
                            const ratingInt = i < rating && i + 1 < rating
                            const ratingHalf = i < rating && i + 1 > rating
                            const className = ratingInt
                                ? 'fas fa-star'
                                : ratingHalf
                                ? 'fa-regular fa-star-half-stroke'
                                : 'fa-regular fa-star'
                            return (
                                <span key={i}>
                                    <i className={className} style={{ color: '#f8e825' }}></i>
                                </span>
                            )
                        })}
                    </div>

                    <div className="actions mt-3 d-flex justify-content-between">
                        <button
                            className="btn btn-success text-white"
                            onClick={() => handelOrderMovie(movie._id)}
                        >
                            Place an order
                        </button>
                        <button
                            className="btn btn-secondary text-white"
                            onClick={() => navigate(`/dashboard/movie/${movie._id}`)}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </CCard>
        </CCol>
    )
}

export default UserMovieCard
