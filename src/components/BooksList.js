import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateList: PropTypes.func.isRequired
    }

    render() {

        const {books, onUpdateList} = this.props;

        return (
            <ol className="books-grid">
                {books.length > 0 && (
                    books.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                        <select onChange={event => onUpdateList(book, event.target.value)} value={book.shelf}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <h3 className="book-title">{book.title}</h3>
                                <div className="book-authors">
                                    {book.authors.map((author, index) => (
                                        <span key={index}>{author}</span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ol>
        )
    }
}

export default BooksList;
