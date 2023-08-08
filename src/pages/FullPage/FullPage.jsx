import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// redux
import { useDispatch } from 'react-redux';
// redux functions
import { setItems } from '../../redux/slices/cartSlice';
// style
import classes from './FullPage.module.css';
// Components
import Header from '../../components/Header/Header'
import MyButton from '../../components/UI/MyButton/MyButton';


const FullPage = () => {
    const dispatch = useDispatch();
    const listArray = useSelector((state) => state.clothes.clothes);

    const { id } = useParams();

    const product = listArray.find((item) => item.id === Number(id));

    const [amount, setAmount] = useState(0);

    return (
        <>
            <Header />

            <div className={classes.container}>
                <Link to={'/'} className={classes.close}>Вернуться назад</Link>
                <div className={classes.desc}>
                    <div className={classes.product}>
                        <h2>{product.title}</h2>
                        <img className={classes.img} src={product.imageUrl} />
                        <p className={classes.rating}>Рейтинг товара: <span className={classes.number}>{product.rating}</span></p>
                        <span className={classes.info}>Цена: <span className={classes.price}>{product.price}₽</span></span>
                        <ul className={classes.list}>
                            {product.sizes.map((item) => <MyButton key={id}>{item}</MyButton>)}
                        </ul>
                    </div>
                    <div className={classes.ops}>
                        <h2>Описание</h2>
                        <p>{product.description}</p>
                        <MyButton onClick={() => {
                            dispatch(setItems({ ...product, count: amount + 1 }))
                            setAmount(amount + 1)
                        }}>Добавить в корзину <span className={classes.count}>{amount}</span></MyButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullPage