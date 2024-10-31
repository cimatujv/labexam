import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { fetchBooks, deleteBook } from '../api';

function BookList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBooks();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Failed to load books. Please try again later.');
            }
        };
        getBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
            await deleteBook(id);
            setError(null);
        } catch (error) {
            console.error('Error deleting book:', error);
            setError('Failed to delete book. Please try again.');
            const data = await fetchBooks();
            setBooks(data);
        }
    };

    return (
        <Container className="dashboard-container">
            <div className="dashboard-header">BOOK MANAGEMENT DASHBOARD</div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Row className="cards-container">
                {books.map((book) => (
                    <Col key={book.id} className="mb-4">
                        <Card className="book-card">
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Subtitle className="mb-2">{book.author}</Card.Subtitle>
                                <Button variant="link" as={Link} to={`/view/${book.id}`} className="link-button">View</Button>
                                <Button variant="link" as={Link} to={`/edit/${book.id}`} className="link-button">Edit</Button>
                                <Button variant="link" onClick={() => handleDelete(book.id)} className="link-button">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Link to="/add" className="add-button">Add Book</Link>
        </Container>
    );
}

export default BookList;
