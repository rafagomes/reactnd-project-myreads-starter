import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksShelf from './components/BooksShelf'
import BooksSearch from './components/BooksSearch'
import {Route} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        shelves: []
    }

    componentDidMount() {
        return this.getAllBooks();
    }

    splitShelvesAndBooks = (books) => {
        let shelves = [];

        books.filter((book) => {
            return shelves.indexOf(book.shelf) === -1 && shelves.push(book.shelf);
        })

        return {shelves: shelves, books: books};
    }

    getAllBooks = () => {
        BooksAPI
            .getAll()
            .then((books) => {
                this.setState(this.splitShelvesAndBooks(books));
            });
    }

    updateBooks = (book, shelf) => {
        BooksAPI
            .update(book, shelf)
            .then(() => {
                this.getAllBooks()
            })
    }

    render() {

        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BooksShelf books={this.state.books} shelves={this.state.shelves} onUpdateShelf={this.updateBooks} />
                )}/>
                <Route exct path="/search" render={() => (
                    <BooksSearch shelves={this.state.shelves} onUpdateShelf={this.updateBooks} onSearchBooks={this.searchBooks} />
                )}/>
            </div>
        )
    }
}

export default BooksApp;
