import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [studio, setStudio] = useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    if (
      title.trim() &&
      title.length > 0 &&
      studio.trim() &&
      studio.length > 0
    ) {
      dispatch({ type: 'ADD_ANIME', book: { title, studio } })
      setTitle('')
      setStudio('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="title">- ADD NEW ANIME -</p>
      <input
        type="text"
        name="anime-title"
        placeholder="anime title"
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type="text"
        name="studio-name"
        placeholder="studio name"
        value={studio}
        onChange={ev => setStudio(ev.target.value)}
      />
      <button type="submit">Add New Anime</button>
    </form>
  )
}

export default NewBookForm
