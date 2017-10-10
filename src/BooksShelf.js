import React, {Component} from 'react'
import BooksList from './BooksList'

class BookShelf extends Component {

    state = {
        shelf: ''
    }

    filteredBookList(books, shelf) {
        // if(shelf !== this.state.shelf) {
        //     this.setState({shelf: shelf});
        // }

        return books.filter((book) => (
            book.shelf === shelf
        ))
    }

    render() {
        const {books} = this.props;

        return (
            <div>
                {books.map((book, index, books) => (
                    <div key={index}>
                        {book.shelf !== this.state.shelf && (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{book.shelf}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <BooksList books={this.filteredBookList(books, book.shelf)} />
                                    </ol>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )
    }
}

export default BookShelf;
