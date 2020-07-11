import axios from 'axios'

const api = axios.create({
    baseURL: "https://point-woman.herokuapp.com"
});

export default api;