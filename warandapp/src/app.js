import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import storeConfig from './store'
import UserStackNav from './navigation/UserStackNav'

export default class warandapp extends Component {
  render() {
    return (
      <Provider store={storeConfig}>
          <UserStackNav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('warandapp', () => warandapp);
