import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
});

//categories

export const fetchCategories = async () =>  api.get('/api/categories')

// articles

export const fetchArticles = async (queryString: string) => api.get(`/api/articles?${queryString}`)