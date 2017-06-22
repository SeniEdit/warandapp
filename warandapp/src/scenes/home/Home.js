import React, {Component} from 'react';
import Button from '../../components/common/Button'

class Home extends Component {
    static navigationOptions = {
          title: 'Home',
          headerLeft: null
      }

  render() {
    return (
      <Button title="Naar login" onPress={() => this.props.navigation.goBack()}/>
    );
  }
}

export default Home;
