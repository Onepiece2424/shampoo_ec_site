import './App.css';
import { Routes, Route } from "react-router-dom";

// components
import Top from './components/common/Top';
import Header from './components/modules/Header';
import ItemList from './components/item/ItemList';
import ItemDetail from './components/item/ItemDetail';
import NotFound from './components/common/NotFound';
import Cart from './components/cart/Cart';
import Order from './components/order/Order';
import Thanks from './components/thanks/Thanks';
import SignIn from './components/sign_in/SignIn';
import SignUp from './components/sign_up/SignUp';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="users/sign_up" element={<SignIn />} />
        <Route path="users/sign_in" element={<SignUp />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
