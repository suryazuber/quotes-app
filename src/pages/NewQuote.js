import { Fragment, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Prompt } from "react-router-dom";
import Card from "../components/UI/Card";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import classes from "./Quotes.module.css";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const [isEntering, setIsEntering] = useState(false);
  const textInputRef = useRef();
  const authorInputRef = useRef();

  const formOnFocusHandler = () => {
    console.log("focus", isEntering);
    setIsEntering(true);
  };

  const submitNewQuoteHandler = (event) => {
    event.preventDefault();
    console.log(isEntering, "Submit new quote");
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    console.log("submitNewQuoteHandler", {
      author: enteredAuthor,
      text: enteredText,
    });
    // props.addNewQuote({author:enteredAuthor, text:enteredText});
    sendRequest({
      author: enteredAuthor,
      text: enteredText,
    });
    // history.push("/quotes"); commented as this will be used with useEffect
  };

  const finishEnteringQuoteHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => {
          console.log(location);
          return `Are you sure to move away? You will lost your input!`;
        }}
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitNewQuoteHandler}
          onFocus={formOnFocusHandler}
        >
          {/* /* Add LoadingSpinner.module.css?  */}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              ref={textInputRef}
              placeholder="Author"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={authorInputRef}></textarea>
          </div>
          <div className={classes.action}>
            <button className="btn" onClick={finishEnteringQuoteHandler}>
              New Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};
export default NewQuote;
