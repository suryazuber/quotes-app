import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NotFound from "./NotFound";
import QuoteList from "./QuoteList";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is great!" },
//   { id: "q2", author: "Zub", text: "Making Good Progress is great!" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log("status", status);
  //Load LoadingSpinner while processing
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  //Handle unwanted error
  if (error) {
    return <div className="centered">{error}</div>;
  }
  //Handle not found error
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NotFound />;
  }
  return (
    <section>
      <h1>The AllQuotes Page</h1>
      <QuoteList quotes={loadedQuotes} />
      <ul>
        <li>
          <NavLink to="/quotes/p1">A React Course - Quote</NavLink>
        </li>
        <li>
          <NavLink to="/quotes/p2">Book - Quote</NavLink>
        </li>
        <li>
          <NavLink to="/quotes/p3">Carpet - Quote</NavLink>
        </li>
      </ul>
    </section>
  );
};
export default AllQuotes;
