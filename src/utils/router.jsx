import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Books from "../routes/Books.jsx";
import BookDetail from "../routes/BookDetail.jsx";
import Quotes from "../routes/Quotes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "books", element: <Books /> },
            { path: "books/:id", element: <BookDetail /> },
            { path: "quotes", element: <Quotes /> }
        ]
    }
]);

export default router;