import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    try {
      const response = await api.get(`/users/${user.login}/starred`);

      this.setState({ starts: response.data });
    } catch (error) {
      console.tron.log('Falha na busca das informações do usuário!');
    }
  }

  render() {
    return <View />;
  }
}
