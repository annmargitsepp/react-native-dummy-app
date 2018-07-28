import React from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        Button, 
        SafeAreaView, 
        StatusBar 
    } from 'react-native';

import { Provider, connect } from 'react-redux';

import { StackNavigator, SwitchNavigator, StackActions, NavigationActions } from 'react-navigation';

import SignInScreen from './src-android/screens/AuthScreens/SignInScreen';
import SignUpScreen from './src-android/screens/AuthScreens/SignUpScreen';
import ForgotPasswordScreen from './src-android/screens/AuthScreens/ForgotPasswordScreen';
import MainAppContainer from './src-android/containers/MainAppContainer';
import AuthLoadingScreen from './src-android/containers/AuthLoadingScreen';
import styles from './src-android/styles/styles';
import store from './redux/store/store';
import Expo from "expo";

  

const AppStack = StackNavigator(
    {
        MainApp: {
            screen: MainAppContainer,
        }
    }
);
const AuthStack = StackNavigator(
    { 
        SignIn: SignInScreen, 
        SignUp: SignUpScreen, 
        ForgotPass: ForgotPasswordScreen 
    });

const Switch = SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
          FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
        });

        this.setState({ loading: false });
      }

    rootNavigation(path,data) {
        console.log("Root navigation called - ", path);
        this.props.navigation.navigate(path, data);   
    }
    render(){
        return this.state.loading? <View></View> : (
            <Provider store={store}>
                <View style={styles.container}>
                    <Switch />
                </View>
            </Provider>
        )
    }
}