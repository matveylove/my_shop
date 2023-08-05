import classes from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <p>LOGO</p>
                <h2 className={classes.title}>Shelma</h2>
                <div className={classes.right}>
                    <img className={classes.card} src='https://www.svgrepo.com/show/533043/cart-shopping.svg' />
                    <Link to='/cart'>Корзина</Link>
                    <div className={classes.count}>
                        <span>2</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header