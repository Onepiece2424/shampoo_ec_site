import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Top from './components/common/Top';
import Header from './components/modules/Header';
import ItemList from './components/item/ItemList';
import ItemDetail from './components/item/ItemDetail';

function App() {
  return (
    <Router>
    <div className='App'>
      <Header />
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route exact path="/items">
            <ItemList />
          </Route>
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
