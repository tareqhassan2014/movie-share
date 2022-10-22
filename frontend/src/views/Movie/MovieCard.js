import { CCard, CCol } from '@coreui/react'

import { cilStar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const MovieCard = ({ movie }) => {
  const poster = `${process.env.REACT_APP_API_URL}/media/image/${movie?.poster}`
  return (
    <CCol xl={3} lg={4} sm={6} sx={12}>
      <CCard className="mb-4 movie-card">
        <img className="movie-poster" src={poster} alt={movie?.title} />
        <div className="movie-info p-4">
          <h5 className="movie-title">{movie?.title}</h5>
          <p className="movie-year">{movie?.year}</p>
          <CIcon icon={cilStar} customClassName="rating" className="text-primary" />
        </div>
      </CCard>
    </CCol>
  )
}

export default MovieCard
