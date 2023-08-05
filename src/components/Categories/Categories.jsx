// style
import classes from './Categories.module.css';
// redux 
import { useSelector, useDispatch } from 'react-redux';
// redux functions
import { setActiveCategory } from '../../redux/slices/categorySlice';

const Categories = () => {
    const dispatch = useDispatch();

    // State активной категории
    const activeCategory = useSelector((state) => state.category.activeCategory);
    // State массива с категориями
    const categoriesArray = useSelector((state) => state.category.categoriesArray);

    return (
        <div className={classes.categories}>
            <ul className={classes.list}>
                {categoriesArray.map((category, index) => {
                    return <li
                        onClick={() => dispatch(setActiveCategory(index))}
                        key={index}
                        className={activeCategory === index ? [classes.item, classes.active].join(' ') : classes.item}>
                        {category}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Categories