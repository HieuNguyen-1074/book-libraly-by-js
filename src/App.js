import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './features/Home/index';

function App() {
  return (
    <div className="App">

      <Router>


        <Switch>
          <Route path="/" component={Home} />




        </Switch>

      </Router>

    </div>
  );
}

export default App;
