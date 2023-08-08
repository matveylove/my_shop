import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux';
// redux functions
import { deleteItems } from '../../redux/slices/cartSlice';
// style 
import classes from './CartList.module.css';
// components
import MyButton from '../UI/MyButton/MyButton';
const CartList = () => {

    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cart.items);
    return (
        <ul className={classes.list}>
            {cartList &&
                cartList.map(({ price, title, imageUrl, count, id, activeSize }) => (
                    <li key={Math.random()} className={classes.item}>
                        <img src={imageUrl} alt='' />
                        <div className={classes.info}>
                            <div className={classes.left}>
                                <h4 className={classes.title}>Название: <span>{title}</span></h4>
                                <span>Цена: {price}</span>
                                <br />
                                <span>Размер: <span style={{ fontWeight: 'bold' }}>{activeSize === 0 ? "M" : activeSize === 1 ? 'L' : 'S'}</span> </span>
                            </div>
                            <div className={classes.right}>
                                <MyButton onClick={() => dispatch(deleteItems({ id, count, price }))}>Удалить товар</MyButton>
                                <p className={classes.count}>Колличество товаров: <MyButton>+</MyButton><strong>{count}</strong><MyButton>-</MyButton></p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default CartList