import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
<<<<<<< HEAD
import RowComponent from "./Components/RowComponent";
import MyNavbar from "./Components/MyNavbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactRouter from "./router/ReactRouter";
=======
import MyNavbar from './Components/MyNavbar';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Switch,
  // Link
} from "react-router-dom";
import ShowDetails from "./Components/ShowDetails";
import Home from "./Components/Home";
>>>>>>> c8d47e789eea631e9ca87fbf58573adaf2ea0228

function App() {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
<<<<<<< HEAD
      {/* <Route path="/" exact component={RowComponent} /> */}
      <ReactRouter />
      <RowComponent movie="Harry Potter" />
      <RowComponent movie="Lord Of The Rings" />
      <RowComponent movie="Mission Impossible" />
=======
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/ShowDetails" exact component={ShowDetails} />
      </Switch>
>>>>>>> c8d47e789eea631e9ca87fbf58573adaf2ea0228
    </div>
    </Router>
  );
}

export default App;
