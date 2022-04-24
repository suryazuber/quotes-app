import React, { Suspense } from "react";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
// import NewCommentForm from "./components/comments/NewCommentForm";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import MainHeader from "./components/MainHeader";
import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote"; //Commented as using with LazyLoading
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import QuoteDetail from "./pages/QuoteDetail";
import Welcome from "./pages/Welcome";

//Lazy Loading
const NewQuote = React.lazy(() => import("./pages/NewQuote"));

function App() {
  console.log("Test data");
  return (
    <div>
      {/* <MainHeader /> */}
      {/* <main> */}
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path={"/"} exact>
              <Redirect to="/welcome" />
            </Route>
            <Route path={"/welcome"}>
              <Welcome />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="/new-quote" exact>
              <NewQuote />
              {/* <NewCommentForm /> */}
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
      {/* </main> */}
    </div>
  );
}

export default App;
