import React from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';


function AddBook() {
    const navigate = useNavigate();

    const handleFormSubmit = () => {
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Add New Book</h2>
                    <BookForm onSubmit={handleFormSubmit} />
                </div>
            </div>
        </div>
    );
}

export default AddBook;
