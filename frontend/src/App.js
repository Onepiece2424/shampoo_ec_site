import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Top from './components/common/Top';
import ItemList from './components/item/ItemList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/items">
          <ItemList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
