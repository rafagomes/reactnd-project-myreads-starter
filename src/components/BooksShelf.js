import React, {Component} from 'react'
import BooksList from '../components/BooksList'
import {Link} from 'react-router-dom'
import parseCamelCase from '../utils/parseCamelCase'

class BookShelf extends Component {

    render() {
        const {books, shelves, onUpdateShelf} = this.props;

        return (
            <div>
                {shelves.map((shelf, index) => (
                    <div key={index}>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{parseCamelCase(shelf)}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <BooksList books={books.filter(book => (book.shelf === shelf))} onUpdateList={onUpdateShelf} />
                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelf;
