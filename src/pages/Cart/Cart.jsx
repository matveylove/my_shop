import React from 'react'
import { Link } from 'react-router-dom'
// style
import classes from './Cart.module.css';
// redux 
import { useSelector, useDispatch } from 'react-redux';
// redux functions
import { clearCart } from '../../redux/slices/cartSlice';
// Components
import Header from '../../components/Header/Header'
import MyButton from '../../components/UI/MyButton/MyButton';
import CartList from '../../components/CartList/CartList';

const Cart = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Header />
      <div className={classes.cart}>
        <Link to='/' className={classes.link}>Назад</Link>
        <div className={classes.price}>
          <h3>Общая цена: <span>{totalAmount}</span>₽</h3>
          <MyButton onClick={() => { dispatch(clearCart()) }}>Отчистить корзину</MyButton>
        </div>
        <CartList />

      </div>
    </>
  )
}

export default Cart