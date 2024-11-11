import React, { useState } from 'react';
import './Booklist.scss';

export default function Booklist() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        setBooks([]);

        try {
            const response = await fetch(`https://openlibrary.org/search.json?title={query}`); // Replace with your actual API URL
            const data = await response.json();

            if (data.numFound > 0) {
                setBooks(data.docs);
            } else {
                setBooks([]);
            }
        } catch (err) {
            setError('Failed to fetch books. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-100 booklist-container d-flex flex-column align-items-center justify-content-start w-100 my-5'>
            {/* Search Input */}
            <div className='search-container d-flex flex-row align-items-center justify-content-center w-100'>
                <div className='input-group mb-3 w-60'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Book Name'
                        aria-label='Book Name'
                        aria-describedby='basic-addon2'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        id='search-bar'
                    />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-primary btn-lg' type='button' onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Loading Spinner */}
            {loading && <p>Loading...</p>}

            {/* Error Message */}
            {error && <p className='text-danger'>{error}</p>}

            {/* Book List */}
            <div className="book-results w-100 mt-4">
                {books.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-bordered w-75 mx-auto book-table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Published Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.key}>
                                        <td>{book.title}</td>
                                        <td>{book.author_name?.join(', ') || 'N/A'}</td>
                                        <td>{book.first_publish_year || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    !loading && <p>No books found</p>
                )}
            </div>

        </div>
    )};
    
