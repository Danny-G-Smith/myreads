import React, { Component } from 'react'

export default class Book extends Component {
   componentDidMount = () => {
      this.setState({ shelf: this.props.book.shelf })
   }
   changeShelf = (evt) => {
      const shelf = evt.target.value
      this.props.changeShelf(this.props.book, shelf)
      this.setState({ shelf })
   }

   constructor(props) {
      super(props)

      this.state = {
         shelf: '',
      }
   }

   render() {
      const { book } = this.props
      const { shelf } = this.state
      const { imageLinks = [], authors = ['unknown'], title } = book
      const { thumbnail = '' } = imageLinks

      return (
         <li>
            <div className="book">
               <div className="book-top">
                  <div
                     className="book-cover"
                     style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${thumbnail})`,
                     }}
                  />
                  <div className="book-shelf-changer">
                     <select
                        value={shelf ? shelf : 'none'}
                        onChange={this.changeShelf}
                     >
                        <option value="move" disabled>
                           Move to...
                        </option>
                        <option value="currentlyReading">
                           Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                     </select>
                  </div>
               </div>
               <div className="book-title">{title}</div>
               {authors.map((author) => (
                  <div key={author} className="book-authors">
                     {author}
                  </div>
               ))}
            </div>
         </li>
      )
   }
}

