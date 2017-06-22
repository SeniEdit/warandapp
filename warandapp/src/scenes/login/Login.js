import React, {Component} from 'react';
import Button from '../../components/common/Button';

class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  _login() {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <Button title="login" onPress={() => this._login()}/>
    );
  }
}

export default Login;
