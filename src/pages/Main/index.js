import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react-native';

import { Container, Form, Input, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: '',
      users: [],
    };
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
      });
    } catch (error) {
      console.tron.log('Não foi possível localizar o usuário');
    }

    // Hide the keyboard after calling the API
    Keyboard.dismiss();
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
