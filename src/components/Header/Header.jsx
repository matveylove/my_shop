import { Link } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// style
import classes from './Header.module.css';

const Header = () => {
    const totalCount = useSelector((state) => state.cart.totalCount)
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <p>LOGO</p>
                <h2 className={classes.title}>Shelma</h2>
                <div className={classes.right}>
                    <img className={classes.card} src='https://www.svgrepo.com/show/533043/cart-shopping.svg' />
                    <Link to='/cart'>Корзина</Link>
                    <div className={classes.count}>
                        Кол.товаров:
                        <span>{totalCount}</span>
                        <br />
                        Цена: <span>{totalAmount}₽</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header