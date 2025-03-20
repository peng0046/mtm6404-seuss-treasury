import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <NavLink to="books" style={{ marginRight: "20px" }}>Books</NavLink>
            <NavLink to="quotes">Quotes</NavLink>
        </nav>
    );
};