import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// style
import classes from './FullPage.module.css';
// Components
import Header from '../../components/Header/Header'
import MyButton from '../../components/UI/MyButton/MyButton';


const FullPage = () => {
    const listArray = useSelector((state) => state.clothes.clothes);

    const { id } = useParams();

    const product = listArray.find((item) => item.id === Number(id));

    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.product}>
                    <Link to={'/'} className={classes.close}>Вернуться назад</Link>
                    <h2>{product.title}</h2>
                    <img className={classes.img} src={product.imageUrl} />
                    <span className={classes.info}>Цена: <span className={classes.price}>{product.price}₽</span></span>
                    <ul className={classes.list}>
                        {product.sizes.map((item) => <MyButton key={id}>{item}</MyButton>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FullPage