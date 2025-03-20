import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error("Error fetching book details:", err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <div className="book-detail">
        <img src={book.image} alt={book.title} width="200" />
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetail;