import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="centered">
            <p>Page not found</p>
            <br />
            <Link to={'new-quote'} className="btn">Add New Quote</Link>
        </div>
    );
};
export default NotFound;