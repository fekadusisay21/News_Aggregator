export async function getNews() {
    const res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9085a0026f66460abf624d59fb205d7e'
    );
    const data = await res.json();
    return data.articles; // Return only the articles array
}