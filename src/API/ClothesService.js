export default class ClothesService {
    static async getClothes(url) {
        let promise = await fetch(url);
        let res = await promise.json();

        return res;
    }
}

