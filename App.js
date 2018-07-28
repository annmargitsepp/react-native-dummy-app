import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';

import IOSApp from './index.ios';
import AndroidApp from './index.android';

export default class App extends React.Component {
  render() {
    const AppType = Platform.OS === 'ios' ? <AndroidApp /> : <AndroidApp />
    return AppType;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
