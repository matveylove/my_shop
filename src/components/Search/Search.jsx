import React from 'react'
// Style
import classes from './Search.module.css';
// redux 
import { useSelector, useDispatch } from 'react-redux';
// redux functions
import { setSearch } from '../../redux/slices/searchSlice';
// Components
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';

const Search = () => {
    const dispatch = useDispatch();

    // State инпута
    const search = useSelector((state) => state.search.search);

    return (
        <div className={classes.search}>
            <h2>Поиск</h2>
            <div className={classes.box}>
                <MyInput
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    placeholder='Поиск одежды'
                />
                <MyButton onClick={() => setSearch('')}>Отчитстить инпут</MyButton>
            </div>
        </div>
    )
}

export default Search