import { CButton, CCard, CForm, CFormInput, CFormLabel } from '@coreui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById, updateMovie } from 'src/services/movie'

const UpdateMovie = () => {
    const { id } = useParams()

    const handelSubmit = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()

            const title = e.target.title.value
            const year = e.target.year.value
            const rating = e.target.rating.value
            const genre = e.target.genre.value
            const poster = e.target.poster.files[0]

            formData.append('title', title)
            formData.append('year', year)
            formData.append('rating', rating)
            formData.append('genre', genre)
            formData.append('poster', poster)

            await updateMovie(id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            window.alert('Movie Updated Successfully')
        } catch (error) {
            window.alert('Something went wrong')
        }
    }

    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            const response = await getMovieById(id)
            setMovie(response.data)
        }
        getMovie()
    }, [id])

    const poster = `${process.env.REACT_APP_API_URL}/media/image/${movie?.poster}`

    return (
        <CCard className="p-5">
            <span className="text-danger">dashboard/update/movie/{id}</span>
            <h4 className="mt-3 mb-3">Update Movie</h4>
            <img src={poster} className="w-25 d-block my-3" alt={movie?.title} />
            <CForm onSubmit={handelSubmit}>
                <div className="mb-3">
                    <CFormLabel htmlFor="movieTitle">Movie Title</CFormLabel>
                    <CFormInput
                        type="text"
                        name="title"
                        id="movieTitle"
                        placeholder="Enter Title"
                        defaultValue={movie?.title}
                    />
                </div>

                <div className="mb-3">
                    <CFormLabel htmlFor="movieReliesYear">Movie Relies Year</CFormLabel>
                    <CFormInput
                        type="number"
                        name="year"
                        defaultValue={movie?.year}
                        id="movieReliesYear"
                        placeholder="2022"
                    />
                </div>

                <div className="mb-3">
                    <CFormLabel htmlFor="movieRating">Movie Rating</CFormLabel>
                    <CFormInput
                        type="text"
                        name="rating"
                        id="movieRating"
                        placeholder="4.9"
                        defaultValue={movie?.rating}
                    />
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="movieGenre">Genre</CFormLabel>
                    <CFormInput
                        type="text"
                        name="genre"
                        id="movieGenre"
                        placeholder="Romantic"
                        defaultValue={movie?.genre}
                    />
                </div>

                <div className="mb-3">
                    <CFormLabel htmlFor="formFile">Movie Poster</CFormLabel>
                    <CFormInput type="file" name="poster" accept="image/*" id="formFile" />
                </div>

                <CButton type="submit" className="mb-3">
                    Upload
                </CButton>
            </CForm>
        </CCard>
    )
}

export default UpdateMovie
