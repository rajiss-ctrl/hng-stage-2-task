// src/services/timbuService.js
import axios from 'axios';

const API_BASE_URL = '/api.timbu.cloud';
const ORGANIZATION_ID = '07b4ca15b24e480e9e29d0150089bde0';
const APP_ID = 'LS345VNCKDGPKGY';
const API_KEY = 'c215be6b62ae49e58b299803ba1b180520240712134816085034';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'APP_ID': APP_ID,
    'API_KEY': API_KEY,
  },
});

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('api/products', {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: false,
        page: 1,
        size: 10,
      },
    });
    // Assuming response.data.products is the array of products
    return response.data.products;
  } catch (error) {
    throw error;
  }
};
