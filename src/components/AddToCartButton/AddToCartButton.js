import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/pizzaSlice';
import { Button } from '@mui/material';

export default function AddToCartButton({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  return <Button onClick={add}>Add to cart</Button>;
}
