import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { Keyboard, ActivityIndicator, ToastAndroid } from 'react-native';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  Options,
  ProfileButton,
  ProfileButtonText,
  DeleteUser,
} from './styles';

import api from '../../services/api';

const LOG_MSGS = {
  USER_FOUND: 'Usuário salvo!',
  USER_NOT_FOUND: 'Usuário não encontrado!',
  FAILED_REQUEST: 'Falha na requisição!',
};

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      newUser: '',
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    this.setState({ loading: true });

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
        loading: false,
      });

      ToastAndroid.showWithGravity(
        LOG_MSGS.USER_FOUND,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        ToastAndroid.showWithGravity(
          LOG_MSGS.USER_NOT_FOUND,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      } else {
        ToastAndroid.showWithGravity(
          LOG_MSGS.FAILED_REQUEST,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }

      this.setState({
        newUser: '',
        loading: false,
      });
    }

    // Hide the keyboard after calling the API
    Keyboard.dismiss();
  };

  handleDeleteUser = login => {
    const { users } = this.state;

    const resultDelete = users.filter(user => user.login !== login);

    this.setState({ users: resultDelete });
  };

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  render() {
    const { users, newUser, loading } = this.state;

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
            FF
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <Options>
                <ProfileButton onPress={() => this.handleNavigate(item)}>
                  <ProfileButtonText>Ver perfil</ProfileButtonText>
                </ProfileButton>
                <DeleteUser onPress={() => this.handleDeleteUser(item.login)}>
                  <Icon name="delete" size={20} color="#fff" />
                </DeleteUser>
              </Options>
            </User>
          )}
        />
      </Container>
    );
  }
}
