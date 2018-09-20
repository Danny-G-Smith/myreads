import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as BooksAPI from './data/BooksAPI'
import NotFound from './components/NotFound'
import './App.css'

import SearchPage from './components/SearchPage'
import BookPage from './components/BookPage'
import {
   moveNotification,
   errorNotification,
   addNotification,
} from './components/Notification'

class BooksApp extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         books: [],
         showSearchPage: false,
      }
   }

   componentDidMount() {
      BooksAPI.getAll()
         .then((res) => this.setState({ books: res }))
         .catch(errorNotification)
   }

   clickBack = () => {
      this.setState({ showSearchPage: false })
   }

   clickSearch = () => {
      this.setState({ showSearchPage: true })
   }

   changeShelf = (changeBook, newShelf) => {
      BooksAPI.update(changeBook, newShelf).catch(errorNotification)

      this.setState((state, props) => {
         const books = state.books

         if (!books.includes(changeBook)) {
            changeBook.shelf = newShelf
            books.push(changeBook)
            addNotification(newShelf)
         } else {
            books.map((book) => {
               if (book.id === changeBook.id) {
                  book.shelf = newShelf
               }
               return book
            })
         }
         moveNotification(newShelf)
         return { books }
      })
   }

   render() {
      const { books } = this.state

      return (
         <div className="app">
            {/*{this.state.showSearchPage ? (*/}
            <Router>
               <Switch>
                  <Route
                     exact
                     path="/search"
                     render={() => (
                        <SearchPage
                           clickBack={this.clickBack}
                           books={books}
                           changeShelf={this.changeShelf}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/"
                     render={() => (
                        <BookPage
                           books={books}
                           clickSearch={this.clickSearch}
                           changeShelf={this.changeShelf}
                        />
                     )}
                  />
                  <Route component={NotFound} />
               </Switch>
            </Router>
            {/*)}*/}
         </div>
      )
   }
}

export default BooksApp
