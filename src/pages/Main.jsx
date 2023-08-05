import { useEffect } from "react";
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
import { updateClothes } from "../redux/slices/clothesSlice";
import { setIsLoading } from "../redux/slices/loadingSlice";
// import API
import ClothesService from "../API/ClothesService";

// Functions
import { getFilterArray } from "../functions/SearchService";
import { clothesArrayOrSkeleton } from "../functions/ClothesRender";

function Main() {
    const dispatch = useDispatch();

    // State массива с одеждой 
    const clothes = useSelector((state) => state.clothes.clothes);
    // State тип сортировки
    const sortType = useSelector((state) => state.sort.sortType);
    // State категорий
    const activeCategory = useSelector((state) => state.category.activeCategory);
    // State инпута
    const search = useSelector((state) => state.search.search);
    // State загрузки
    const isLoading = useSelector((state) => state.loading.loading);
    // State пагинации
    const paginationCount = useSelector((state) => state.pagination.paginationCount);

    // Отравка запроса и получение массива с одеждой;
    useEffect(() => {
        const category = activeCategory === 0 ? '' : 'category=' + activeCategory;
        const sort = sortType.type !== 'nosort' ? '&sortBy=' + sortType.type + '&order=' + sortType.desc : '';

        let url = `https://64c8c994a1fe0128fbd635d0.mockapi.io/clothes?page=${paginationCount}&limit=9&${category}${sort}`
        ClothesService.getClothes(url)
            .then(res => {
                dispatch(updateClothes(res))
                dispatch(setIsLoading(true));
            })
    }, [activeCategory, sortType, paginationCount])

    return (
        <div className="App">
            <Header />
            <Categories />
            <Sort />
            <Search />
            <div className='clothesWrapper'>
                {search === '' ? clothesArrayOrSkeleton(isLoading, clothes) : getFilterArray(search, clothes).map((item) => {
                    return <Clothes {...item} key={item.id} />
                })}
            </div>
            <Pagination />
        </div>

    );
}

export default Main;