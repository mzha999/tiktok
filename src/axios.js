import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-k.herokuapp.com/"
});

export default instance;