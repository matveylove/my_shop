import React from 'react'
import classes from './Cart.module.css';
// Components
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import MyButton from '../../components/UI/MyButton/MyButton';

const Cart = () => {
  return (
    <>
      <Header />
      <div className={classes.cart}>
        <Link to='/' className={classes.link}>Назад</Link>
        <div className={classes.price}>
          <h3>Общая цена: <span>10000</span></h3>
          <MyButton>Отчистить корзину</MyButton>
        </div>
        <ul className={classes.list}>
          <li className={classes.item}>
            <img src='https://a.lmcdn.ru/product/M/P/MP002XM000E9_20485212_1_v1.jpg' alt='' />
            <div className={classes.info}>
              <div className={classes.left}>
                <h4 className={classes.title}>Название: <span>Nike</span></h4>
                <span>Цена: 10000</span>
                <br />
                <span>Размер: M</span>
              </div>
              <div className={classes.right}>
                <MyButton>Удалить товар</MyButton>
                <p className={classes.count}>Колличество товаров: <strong>5</strong></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Cart