import React from 'react';
import BookForm from '../components/BookForm';
import { useParams, useNavigate } from 'react-router-dom';


function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleFormSubmit = () => {
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Edit Book</h2>
                    <BookForm onSubmit={handleFormSubmit} bookId={id} />
                </div>
            </div>
        </div>
    );
}

export default EditBook;
