import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

import Container from "../../components/Container";
import Form from "../../components/Form";
import SubmitButton from "../../components/SubmitButton";

import { Loading, Owner, Messages } from "./styles";
import api from "../../services/api";
import socket from "../../services/socket";

export default class Chat extends Component {
    state = {
        _id: "",
        name: "",
        content: "",
        messages: [],
        loading: false
    };

    constructor(props) {
        super(props);
        const session = JSON.parse(localStorage.getItem("session"));
        if (!session) {
            this.props.history("/");
        }
    }

    componentDidMount() {
        const session = JSON.parse(localStorage.getItem("session"));
        this.setState({ ...session });
        this.loadMessages();
        this.connectSocket();
    }

    async loadMessages() {
        this.setState({ loading: true });
        const response = await api.get("/messages");
        if (response)
            this.setState({ messages: response.data, loading: false });
    }

    async connectSocket() {
        socket.on("newMessage", message => {
            this.setState({ messages: [...this.state.messages, message] });
        });
    }

    handleInputChange = e => {
        this.setState({ content: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { content } = this.state;

        await api.post(`/messages`, {
            content,
            sessionId: this.state._id
        });

        this.setState({
            content: ""
        });
    };

    render() {
        const { _id, name, loading, messages, content } = this.state;

        if (loading) {
            return <Loading>Carregando...</Loading>;
        }

        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar ao cadastro</Link>
                    <h1>{name}</h1>
                    <p>{_id}</p>
                </Owner>
                <Messages>
                    {messages.map(message => (
                        <li key={String(message._id)}>
                            {/* <img
                            src={message.avatar_url}
                            alt={message.login}
                            /> */}
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
