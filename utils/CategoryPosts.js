import axios from 'axios';
import server from '../config.json'

//const baseUrl = 'https://docs.nautilusshipping.com/wp-json/wp/v2';

export const fetchPostsByCategory = async (categorySlug, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${server.SERVER_URL}posts?_embed&categories=68&per_page=${perPage}&page=${page}`, {
      params: {
        categories: '68',
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};