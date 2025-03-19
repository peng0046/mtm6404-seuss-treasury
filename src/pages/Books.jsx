import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div>
      <h1>Seuss Treasury</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`} style={{ margin: "10px" }}>
            <img src={book.image} alt={book.title} width="150" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;