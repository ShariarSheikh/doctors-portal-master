import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment/>
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
