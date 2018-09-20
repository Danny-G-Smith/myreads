import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

export default class BookPage extends Component {
   putBooksOnShelf = (books) => {
      const currently = books.filter(
         (book) => book.shelf === 'currentlyReading',
      )
      const want = books.filter((book) => book.shelf === 'wantToRead')
      const read = books.filter((book) => book.shelf === 'read')

      return [
         { type: 'Currently Reading', books: currently },
         { type: 'Want To Read', books: want },
         { type: 'Read', books: read },
      ]
   }

   render() {
      const { books, changeShelf } = this.props
      const shelves = this.putBooksOnShelf(books)

      return (
         // Start BookPage
         <div className="list-books">
            <div className="list-books-title">
               <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               <div>
                  {shelves.map((shelf) => (
                     <Shelf
                        key={shelf.type}
                        shelf={shelf}
                        changeShelf={changeShelf}
                     />
                  ))}
               </div>
            </div>
            <div className="open-search">
               <Link className="close-search" to="/search">Close</Link>
            </div>
         </div>
         // End
      )
   }
}
