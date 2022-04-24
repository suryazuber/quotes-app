import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import classes from "./Quotes.module.css";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is great!" },
//   { id: "q2", author: "Zub", text: "Making Good Progress is great!" },
// ];

const QuoteDetail = () => {
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // console.log(params.quoteId);
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (status === 'pending') {
    return(
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    );
  }
  if (error) {
    return <p className='centered'>{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No Quotes Found!</p>;
  }

  return (
    <section>
      <h1>The QuoteDetail Page</h1>
      <figure className={classes.quote}>
        <p>{loadedQuote.text}</p>
        <figcaption>{loadedQuote.author}</figcaption>
      </figure>
      <Route path={`/quotes/:quoteId`} exact>
        <div>
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* path={`/quotes/:quoteId/comments`} */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};
export default QuoteDetail;
