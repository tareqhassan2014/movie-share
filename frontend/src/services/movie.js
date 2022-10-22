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

// update movie
export const updateMovie = async (id, movie) => {
    const response = await axios.put(`/movie/${id}`, movie)
    return response.data
}

// delete movie
export const deleteMovie = async (id) => {
    const response = await axios.delete(`/movie/${id}`)
    return response.data
}

// get movie by id
export const getMovieById = async (id) => {
    const response = await axios.get(`/movie/${id}`)
    return response.data
}

// place order for movie
export const placeOrder = async (id) => {
    const response = await axios.post(`/order`, { movie: id })
    return response.data
}

// get all orders
export const getAllOrders = async () => {
    const response = await axios.get('/order')
    return response.data
}

// confirm order
export const confirmOrder = async (id) => {
    const response = await axios.put(`/order/${id}`)
    return response.data
}
