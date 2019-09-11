import axios from "axios";

const api = axios.create({
    baseURL: "https://labsschool-chat-api.herokuapp.com"
});

export default api;
