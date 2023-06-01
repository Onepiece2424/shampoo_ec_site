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
import SignUpConfirmation from './components/sign_up/SignUpConfirmation';

// date-picker
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <div className='App'>
      <Header />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="users/sign_up" element={<SignUp />} />
          <Route path="/sign_up_confirmation" element={<SignUpConfirmation />} />
          <Route path="users/sign_in" element={<SignIn />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LocalizationProvider>
    </div>
  );
}

export default App;
