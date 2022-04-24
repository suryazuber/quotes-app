import { Fragment } from "react/cjs/react.development";
import Mainnavigation from "./MainNavigation";

import classes from "./MainNavigation.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Mainnavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
