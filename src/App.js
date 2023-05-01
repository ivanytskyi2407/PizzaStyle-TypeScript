import './App.css';
import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import Pizzas from './components/PizzaPage/PizzaPage';
import CartPage from './components/CartPage/CartPage';
import Page404 from './components/Page404/Page404';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ButtonAppBar />}>
        <Route index exact="true" element={<Pizzas />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
