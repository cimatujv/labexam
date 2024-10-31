import React from 'react';
import BookList from '../components/BookList';


function HomePage() {
    return (
        <div className="container mt-4 dashboard">
            <BookList />
        </div>
    );
}

export default HomePage;
