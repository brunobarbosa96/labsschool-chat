import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

import { Container, Form, SubmitButton } from "../../components";
import { Loading, UserInfo, Messages } from "./styles";
import api from "../../services/api";
import socket from "../../services/socket";

export default class Chat extends Component {
    state = {
        _id: "",
        name: "",
        loading: false,
        content: "",
        messages: []
    };

    constructor(props) {
        super(props);

        const session = JSON.parse(localStorage.getItem("session"));
        if (!session) {
            this.props.history.push("/");
        }
    }

    componentDidMount() {
        const session = JSON.parse(localStorage.getItem("session"));
        this.setState({ ...this.state, ...session });
        this.loadMessages();
        this.connectSocket();
    }

    async loadMessages() {
        this.setState({ loading: true });
        const response = await api.get("/messages");
        if (response)
            this.setState({
                loading: false,
                messages: response.data
            });
    }

    connectSocket() {
        socket.on("newMessage", message => {
            this.setState({
                messages: [...this.state.messages, message]
            });
        });
    }

    handleInputChange = e => {
        this.setState({ content: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { content, _id } = this.state;

        await api.post("/messages", {
            content,
            sessionId: _id
        });

        this.setState({
            content: ""
        });
    };

    render() {
        const { name, _id, loading, messages, content } = this.state;

        if (loading) {
            return <Loading>Carregando...</Loading>;
        }

        return (
            <Container>
                <UserInfo>
                    <Link to="/">Voltar ao cadastro</Link>
                    <h1>{name}</h1>
                    <p>{_id}</p>
                </UserInfo>
                <Messages>
                    {messages.map(message => (
                        <li key={message._id}>
                            <div>
                                <strong>
                                    <span>{message.userName}</span>
                                    <p>{message.content}</p>
                                </strong>
                            </div>
                        </li>
                    ))}
                </Messages>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Escreva aqui sua mensagem"
                        value={content}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton>
                        <FaPaperPlane color="#FFF" size={14} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
