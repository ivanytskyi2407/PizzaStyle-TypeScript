import { useSelector } from 'react-redux';
import CartCard from './CartCard/CartCard';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import MakeAnOrder from '../MakeAnOrder/MakeAnOrder';

export default function CartPage() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return (
    <Container sx={{ mt: 10 }}>
      {cart.length === 0 ? (
        <Typography variant="h3" align="center">
          Please, choose pizza <Link to="/">here</Link>
        </Typography>
      ) : (
        <>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <CartCard />
          </Grid>
          <MakeAnOrder />
        </>
      )}
    </Container>
  );
}
