const getGifts = async (input) => {
    const baseUri = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(input)}&limit=34&api_key=MUsLPLnbjtFosa0X15JsZEZ3TOahbuOQ`);
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
