import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []);

  return (
    <div>
      <h1>Dr. Seuss Quotes</h1>
      {quotes.map((quote, index) => (
        <figure key={index} className="quote">
          <blockquote>{quote.text}</blockquote>
          <figcaption>
            Dr. Seuss, <cite>{quote.book?.title || "Unknown Book"}</cite>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Quotes;