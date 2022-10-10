import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: 'Terror in Resonance', studio: 'MAPPA', id: 1 },
    { title: 'Classroom of the Elite', studio: 'KADOKAWA', id: 2 },
  ])

  const handleAddBook = (title, studio) => {
    setBooks([{ title, studio, id: uuid() }, ...books])
  }

	const handleRemoveBook = rid => {
		setBooks(books.filter(({ id }) => id !== rid))
	}

	return (
		<BookContext.Provider value={{ books, handleAddBook, handleRemoveBook }}>
			{ children }
		</BookContext.Provider>
	)
}
