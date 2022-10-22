import axios from './axios'

// get all movies
export const getAllMovies = async () => {
  const response = await axios.get('/movie')
  return response.data
}

// add movie
export const addMovie = async (movie) => {
  const response = await axios.post('/movie', movie)
  return response.data
}
