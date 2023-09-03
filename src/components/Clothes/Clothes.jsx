import classes from './Clothes.module.css';
import { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// redux functions
import { setItems } from '../../redux/slices/cartSlice';
// Components
import MyButton from '../UI/MyButton/MyButton';
import { Link } from 'react-router-dom';


const Clothes = ({ title, price, imageUrl, sizes, rating, id }) => {

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const addItem = () => {
        const obj = {
            title,
            price,
            imageUrl,
            activeSize,
            count: amount + 1,
            rating,
            id,
        }
        console.log(obj);
        dispatch(setItems(obj))
    }

    return (
        <div className={classes.clothes}>
            <img src={imageUrl} />
            <ul className={classes.list}>
                {sizes.map((item, index) => {
                    return (
                        <li
                            onClick={() => {
                                setActiveSize(index)
                                setAmount(0);
                            }}
                            key={Math.random()}
                            className={activeSize === index ? [classes.active, classes.item].join(' ') : classes.item}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <h3>{title}</h3>
            <div className={classes.box}>
                <span className={classes.price}>{price}₽</span>
                <MyButton onClick={() => {
                    setAmount(amount + 1)
                    addItem()
                }}>
                    <span>Добавить</span>
                    <p className={classes.count}>{amount}</p>
                </MyButton>
                <Link to={`/product/${id}`}>
                    <MyButton>Страница товара</MyButton>
                </Link>
            </div>
        </div>
    )
}

export default Clothes