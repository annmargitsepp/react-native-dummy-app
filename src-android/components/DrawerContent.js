import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/styles'
import PropTypes from 'prop-types';
class DrawerContent extends Component {
navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }
render () {
  console.log('DrawerContent called');
    return (
      <View>
        <ScrollView>
        <Button
         raised
         icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
         title='Home'
        //  buttonStyle={styles.Sidebar.button}
         onPress={this.navigateToScreen('Home')}/>
        <Button
         raised
         icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
         title='Profile'
        //  buttonStyle={styles.Sidebar.button}
         onPress={this.navigateToScreen('Profile')}/>
        <Button
         raised
         icon={{name: 'user-circle', type: 'font-awesome', size:20}}
         title='Account Settings'
        //  buttonStyle={styles.Sidebar.button}
         onPress={this.navigateToScreen('AccountSetting')}/>
        </ScrollView>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};
export default DrawerContent;