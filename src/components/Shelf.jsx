import React from 'react'
import Book from './Book'

const Shelf = (props) => {
   const { shelf, changeShelf } = props

   return (
      <div className="bookshelf">
         <h2 className="bookshelf-title">{shelf.type}</h2>
         <div className="bookshelf-books">
            <ol className="books-grid">
               {shelf.books.map((book) => (
                  <Book key={book.id} book={book} changeShelf={changeShelf} />
               ))}
            </ol>
         </div>
      </div>
   )
}

export default Shelf
