import "./App.css";
import "./style.css";
import NavBar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import cocktails from "./pages/cocktails";
import Cocktail from "./pages/Cocktail";
import Error from "./pages/Error";
import SearchComponent from "./pages/SearchComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cocktails" component={cocktails} />
        <Route path="/cocktails/:id" component={Cocktail} />
        <Route path="/*" component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
