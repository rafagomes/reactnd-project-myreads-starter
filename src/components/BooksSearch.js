import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import BooksList from '../components/BooksList'
import {Link} from 'react-router-dom'

class BooksSearch extends Component {

    state = {
        searchedItems: []
    }

    searchBooks = (query, maxResults) => {
        BooksAPI
            .search(query, maxResults)
            .then((searchedItems) => {
                this.setState({searchedItems: searchedItems});
            })
    }

    render() {
        const {onUpdateShelf} = this.props;

        return (
            <div id="search">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onKeyUp={event => this.searchBooks(event.target.value, 20)} />
                        </div>
                    </div>
                </div>
                <div className="bookshelf-books search-shelf">
                    <BooksList books={this.state.searchedItems} onUpdateList={onUpdateShelf} />
                </div>
            </div>
        )
    }
}

export default BooksSearch;
