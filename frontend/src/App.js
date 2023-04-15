import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Top from './components/Top';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Top />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
