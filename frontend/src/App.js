import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Top from './components/common/Top';
import Header from './components/modules/Header';
import ItemList from './components/item/ItemList';
import ItemDetail from './components/item/ItemDetail';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route exact path="/items">
            <ItemList />
          </Route>
          <Route exact path="/items/1">
            <ItemDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
