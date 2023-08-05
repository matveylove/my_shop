// redux
import { useSelector, useDispatch } from 'react-redux';
// redux functions
import { setPaginationCount } from '../../redux/slices/paginationSlice';
import { setIsLoading } from '../../redux/slices/loadingSlice';
// Style 
import classes from './Pagination.module.css';
// Components
import MyButton from '../UI/MyButton/MyButton'


const Pagination = () => {
    const dispatch = useDispatch();
    const paginationArray = useSelector((state) => state.pagination.paginationArray);

    return (
        <div className={classes.pagination}>
            {paginationArray.map((item) => {
                return <MyButton
                    onClick={() => {
                        dispatch(setPaginationCount(item))
                        dispatch(setIsLoading(false))
                    }}
                    key={item}>
                    {item}
                </MyButton>
            })}
        </div>
    )
}

export default Pagination