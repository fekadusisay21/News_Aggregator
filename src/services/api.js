import {API_KEY} from '../utils/constants'

export async function searchNews(keyword) {
    const res = await fetch(
        // keyword?"http://localhost:8000/news/list/":"http://localhost:8000/news/list/"
        `https://newsapi.org/v2/everything?q=${keyword}&sortBy=date&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data.articles;
}


export async function getNews() {
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data.articles;
}