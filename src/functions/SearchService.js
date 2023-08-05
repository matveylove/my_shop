export const getFilterArray = (search, clothes) => {
    return clothes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
}