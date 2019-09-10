import io from "socket.io-client";

const socket = io("https://labsschool-chat-api.herokuapp.com");

export default socket;
