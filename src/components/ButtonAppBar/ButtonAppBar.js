import s from './ButtonAppBar.module.css';
import { useSelector } from 'react-redux';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { LocalPizza, ShoppingCart } from '@mui/icons-material';
import Footer from '../Footer/Footer';

export default function ButtonAppBar() {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const cartSum = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            exact="true"
            to="/"
          >
            <Typography
              variant="h6"
              body1="span"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              <LocalPizza />
              Pizza
            </Typography>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/cart"
          >
            <Typography>
              <Badge color="secondary" badgeContent={cartSum}>
                <ShoppingCart />
              </Badge>
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  );
}
