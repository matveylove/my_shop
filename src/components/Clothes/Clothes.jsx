import classes from './Clothes.module.css';
import { useState } from 'react';
// Components
import MyButton from '../UI/MyButton/MyButton';


const Clothes = ({ title, price, imageUrl, sizes, rating }) => {

    const [count, setCount] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    return (
        <div className={classes.clothes}>
            <img src={imageUrl} />
            <ul className={classes.list}>
                {sizes.map((item, index) => {
                    return <li
                        onClick={() => setActiveSize(index)}
                        key={index}
                        className={activeSize === index ? [classes.active, classes.item].join(' ') : classes.item}>
                        {item}
                    </li>
                })}
            </ul>
            <h3>{title}</h3>
            <div className={classes.box}>
                <span className={classes.price}>{price}₽</span>
                <MyButton onClick={() => setCount(count + 1)}>
                    <span>Добавить</span>
                    <p className={classes.count}>{count}</p>
                </MyButton>
            </div>
        </div>
    )
}

export default Clothes