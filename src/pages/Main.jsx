import { useEffect } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../routes/routes";
// Components
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Clothes from "../components/Clothes/Clothes";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagintaion/Pagination";
// redux
import { useSelector, useDispatch } from "react-redux";
// Functions Redux
import { getClothes } from "../redux/slices/clothesSlice";
// Functions
import { getFilterArray } from "../functions/SearchService";
import { clothesArrayOrSkeleton } from "../functions/ClothesRender";

function Main() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.clothes.status);
    // State массива с одеждой 
    const clothes = useSelector((state) => state.clothes.clothes);
    // State тип сортировки
    const sortType = useSelector((state) => state.sort.sortType);
    // State категорий
    const activeCategory = useSelector((state) => state.category.activeCategory);
    // State инпута
    const search = useSelector((state) => state.search.search);
    // State загрузки
    const isLoading = useSelector((state) => state.clothes.isLoading);
    // State пагинации
    const paginationCount = useSelector((state) => state.pagination.paginationCount);

    // Отравка запроса и получение массива с одеждой;
    useEffect(() => {
        const category = activeCategory === 0 ? '' : 'category=' + activeCategory;
        const sort = sortType.type !== 'nosort' ? '&sortBy=' + sortType.type + '&order=' + sortType.desc : '';

        dispatch(getClothes({ category, sort, paginationCount }));

    }, [activeCategory, sortType, paginationCount])

    return (
        <div className="App">
            <Header />
            <Categories />
            <Sort />
            <Search />
            <div className='clothesWrapper'>
                {status === 'rejected'
                    ?
                    <div style={{ textAlign: 'center', fontSize: '40px', padding: '30px 0', color: 'red' }}>
                        Не удалось получить одежду. Ошибка сервера.</div>
                    :
                    search === '' ? clothesArrayOrSkeleton(isLoading, clothes) : getFilterArray(search, clothes).map((item) => {
                        return <Clothes {...item} key={item.id} />
                    })
                }
            </div>
            <Pagination />
        </div>

    );
}

export default Main;