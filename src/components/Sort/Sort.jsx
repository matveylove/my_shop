// Style
import classes from './Sort.module.css';
// redux
import { useSelector, useDispatch } from 'react-redux';
// redux functions
import { setActiveSort, setSortType } from '../../redux/slices/sortSlice';

const Sort = () => {
    const dispatch = useDispatch();

    // State активного сорта
    const activeSort = useSelector((state) => state.sort.acitveSort);
    // State массива сортировки
    const sortArray = useSelector((state) => state.sort.sortArray);

    const setTypeSorting = (item, index) => {
        dispatch(setActiveSort(index));
        dispatch(setSortType(item));
    }

    return (
        <div className={classes.sort}>
            <h3>Сортировка</h3>
            <ul className={classes.list}>
                {sortArray.map((item, index) => {
                    return <li
                        className={activeSort === index ? [classes.item, classes.active].join(' ') : classes.item}
                        onClick={() => setTypeSorting(item, index)}
                        key={index}>
                        {item.title}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Sort