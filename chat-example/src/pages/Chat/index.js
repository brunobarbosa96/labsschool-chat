import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

import Container from "../../components/Container";
import Form from "../../components/Form";
import SubmitButton from "../../components/SubmitButton";

import { Loading, Owner, Messages } from "./styles";

export default class Chat extends Component {
    state = {
        _id: "",
        name: "",
        content: "",
        messages: [
            {
                _id: "5d767876adf6a2001709504c",
                sessionId: "5d703dbd2a8fbf168e3f92a6",
                content: "Testando aqui?",
                userName: "Bruno Barbosa",
                createdAt: "2019-09-09T16:06:14.924Z",
                updatedAt: "2019-09-09T16:06:14.924Z",
                __v: 0
            },
            {
                _id: "5d767876adf6a2001709f04c",
                sessionId: "5d703dbd2a8fbf168e3f92a6",
                content: "Testando aqui também",
                userName: "Bruno Barbosa",
                createdAt: "2019-09-09T16:06:14.924Z",
                updatedAt: "2019-09-09T16:06:14.924Z",
                __v: 0
            }
        ],
        loading: false
    };

    componentDidMount() {
        const session = JSON.parse(localStorage.getItem("session"));
        this.setState({ ...session });
    }

    handleInputChange = e => {
        this.setState({ content: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        //   const {content} = this.state;

        // const response = await api.get(`/repos/${newRepo}`);

        this.setState({ content: "" });
    };

    render() {
        const { _id, name, loading, messages, content } = this.state;

        if (loading) {
            return <Loading>Carregando</Loading>;
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
                        placeholder="Enviar"
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
