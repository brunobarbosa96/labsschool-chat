import React, { Component } from 'react';
import { FaPlus } from "react-icons/fa";

import Container from "../../components/Container";
import Form from "../../components/Form";
import SubmitButton from "../../components/SubmitButton";

export default class Main extends Component {
  state = {
    name: ""
  }

  handleInputChange = e => {
    this.setState({ name: e.target.value });
};

handleSubmit = async e => {
  e.preventDefault();
  this.setState({ loading: true });
  const {name} = this.state;

  // const response = await api.get(`/repos/${newRepo}`);
  const response = {data: {
    "_id": "5d703dbd2a8fbf168e3f92a6",
    "name": name,
    "createdAt": "2019-09-04T22:42:05.526Z",
    "updatedAt": "2019-09-04T22:42:05.526Z",
  }}
  const data = {
      _id: response.data._id,
      name: response.data.name
  };

  // todo salvar no localstorage
  localStorage.setItem("session", JSON.stringify(data));

  // todo trocar por push no chat
  this.props.history.push('/chat')
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
