import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/books" style={{ marginRight: "20px" }}>Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}

export default Navbar;