import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Landing from "./components/landing/Landing";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
  return (<Router>
    <div className="App">
      <Navbar/>
        <Switch>
            <Route path="/cats" component={Cats}/>
            <Route path="/dogs" component={Dogs}/>
            <Route path="/" component={Landing}/>
        </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;