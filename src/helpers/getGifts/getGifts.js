import { BASE_URI } from "../../base_URI";

const getGifts = async (input) => {
    const baseUri = await fetch(BASE_URI(input));
    const { data } = await baseUri.json();

    const getImage = data.map((gift) => {
        return {
            id: gift.id,
            title: gift.title,
            url: gift.url,
            image: gift.images?.downsized_medium.url,
        }
    });
    return getImage;
}

export default getGifts;
