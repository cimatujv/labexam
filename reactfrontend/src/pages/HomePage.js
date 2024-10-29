import React from 'react';
import BookList from '../components/BookList';


function HomePage() {
    return (
        <div className="container mt-4 dashboard">
            <h1>Book Management Dashboard</h1>
            <BookList />
        </div>
    );
}

export default HomePage;
