import axios from "axios";
const accessToken = localStorage.getItem("token");

export const API = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
});