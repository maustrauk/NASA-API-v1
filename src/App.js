import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Apod from "./components/Apod";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Apod} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
