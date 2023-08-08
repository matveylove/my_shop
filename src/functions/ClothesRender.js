import Clothes from "../components/Clothes/Clothes"
import Skeleton from '../components/UI/Skeleton/Skeleton';

export const clothesArrayOrSkeleton = (isLoading, clothes) => {
    return isLoading
        ? Array.from({ length: 6 }).map((item, index) => {
            return <Skeleton key={index} />
        })
        : (
            clothes.map((item) => {
                return <Clothes {...item} key={item.id} />
            }))
}