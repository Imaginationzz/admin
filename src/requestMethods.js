import axios from "axios";
import { store } from './redux/store';

const state = store.getState();

// const TOKEN = state.user.currentUser?.accessToken;
const BASE_URL = "https://yazfarm-be.herokuapp.com/api/";
// console.log(TOKEN)
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken;
const TOKEN = localStorage.getItem('TOKEN')
export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', credentials: true }
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', credentials: true, token: `Bearer ${TOKEN}` },
});
export const addProductRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'multipart/form-data', credentials: true }
});