
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2IWUFHdwTT1I70mLC9w6p5w79YASxPjO`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
}