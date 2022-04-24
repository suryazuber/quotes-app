import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  console.log("params",params);
  const {quoteId} = params;

  const {
    sendRequest,
    status,
    data: loadedComments,
    // error,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  },[quoteId,sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandler = () => {};

  let comments = '';
  if (status === 'pending') {
    comments =(
      <div className="centered">
        <LoadingSpinner/>
      </div>
    );
  }
  if(status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    // comments = <CommentsList comments={loadedComments}/>
    comments = <div className="centered">comments List Componet will Load Comments here Currenly Not Added </div>;
  }
  if(status === 'completed' && (!loadedComments && loadedComments.length === 0)) {
    comments = <div className="centered">No comments</div>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {/* //NewCommentAdd  */}
      <p>{comments}</p>
    </section>
  );
};
export default Comments;
