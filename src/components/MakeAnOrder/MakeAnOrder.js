import { makeAnOrder } from '../../redux/pizzaSlice';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function MakeAnOrder() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const totalSum = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column ',
        mt: 5,
        mb: 5,
      }}
    >
      <Typography variant="h5">Total: {totalSum} UAH</Typography>
      <Button variant="contained" onClick={() => dispatch(makeAnOrder())}>
        Make an order
      </Button>
    </Box>
  );
}
