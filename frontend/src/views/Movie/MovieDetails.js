import { CCard } from '@coreui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from 'src/services/movie'

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            const response = await getMovieById(id)
            setMovie(response.data)
        }
        getMovie()
    }, [id])

    return (
        <CCard className="p-5 mb-5">
            {movie?.title && (
                <div className="movie-details">
                    <div>
                        <img
                            src={`${process.env.REACT_APP_API_URL}/media/image/${movie?.poster}`}
                            alt={movie?.title}
                            className="h-50 w-50"
                        />
                    </div>
                    <div className="movie-info">
                        <h1 className="movie-title">{movie?.title}</h1>
                        <p className="movie-year">{movie?.year}</p>
                    </div>
                    <p>movie id : {movie?._id}</p>
                    <p>Movie Genre: {movie.genre}</p>

                    <div className="rating">
                        {[...Array(5)].map((star, i) => {
                            const ratingInt = i < movie?.rating && i + 1 < movie?.rating
                            const ratingHalf = i < movie?.rating && i + 1 > movie?.rating
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
                </div>
            )}
        </CCard>
    )
}

export default MovieDetails
