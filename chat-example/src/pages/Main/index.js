import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

import Container from "../../components/Container";
import Form from "../../components/Form";
import SubmitButton from "../../components/SubmitButton";
import api from "../../services/api";

export default class Main extends Component {
    state = {
        name: ""
    };

    handleInputChange = e => {
        this.setState({ name: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        const { name } = this.state;

        const response = await api.post("/sessions", {
            name
        });

        localStorage.setItem("session", JSON.stringify(response.data));

        this.props.history.push("/chat");
    };

    render() {
        const { name, _id } = this.state;
        return (
            <Container>
                <h1>Informe seu nome</h1>
                <h5>{_id}</h5>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Digite seu nome aqui"
                        value={name}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton>
                        <FaPlus color="#FFF" size={14} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
