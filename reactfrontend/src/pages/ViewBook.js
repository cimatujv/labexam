import React from 'react';
import BookDetails from '../components/BookDetails';


function ViewBook() {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Book Details</h2>
                    <BookDetails />
                </div>
            </div>
        </div>
    );
}

export default ViewBook;
