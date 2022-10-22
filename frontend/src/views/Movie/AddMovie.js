import { CButton, CCard, CForm, CFormInput, CFormLabel } from '@coreui/react'
import { addMovie } from 'src/services/movie'

const AddMovie = () => {
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

            console.log({ title, year, rating, genre, poster })

            const response = await addMovie(formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CCard className="p-5">
            <span className="text-danger">dashboard/add/movie</span>
            <h4 className="mt-3 mb-3">Add Movie</h4>
            <CForm onSubmit={handelSubmit}>
                <div className="mb-3">
                    <CFormLabel htmlFor="movieTitle">Movie Title</CFormLabel>
                    <CFormInput
                        type="text"
                        name="title"
                        id="movieTitle"
                        placeholder="Enter Title"
                    />
                </div>

                <div className="mb-3">
                    <CFormLabel htmlFor="movieReliesYear">Movie Relies Year</CFormLabel>
                    <CFormInput type="number" name="year" id="movieReliesYear" placeholder="2022" />
                </div>

                <div className="mb-3">
                    <CFormLabel htmlFor="movieRating">Movie Rating</CFormLabel>
                    <CFormInput type="text" name="rating" id="movieRating" placeholder="4.9" />
                </div>
                <div className="mb-3">
                    <CFormLabel htmlFor="movieGenre">Genre</CFormLabel>
                    <CFormInput type="text" name="genre" id="movieGenre" placeholder="Romantic" />
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

export default AddMovie
