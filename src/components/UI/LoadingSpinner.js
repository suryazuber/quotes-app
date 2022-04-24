import classes from "./Card.module.css";

const LoadingSpinner = (props) => {
  return <div className={classes.spinner}>{props.children}</div>;
};
export default LoadingSpinner;