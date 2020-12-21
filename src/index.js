import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/styles.scss";
import initStore from "./store";
import HomeContainer from "./pages/home/HomeContainer";
import MovieDetailContainer from "./pages/movie-detail/MovieDetailContainer";
const store = initStore();
import HeaderNav from "./components/header-nav/HeaderNav";


const App = () => {
  return (
    <Provider store={store}>
      <HeaderNav></HeaderNav>
      <BrowserRouter>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movie-detail" component={MovieDetailContainer} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
