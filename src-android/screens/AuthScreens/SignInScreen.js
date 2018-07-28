import React from 'react';
import { 
        AsyncStorage, 
        Text, 
        TextInput, 
        View, 
        TouchableHighlight,
    } from 'react-native';
import styles from '../../styles/styles'
import * as AppConst from '../../../utils/AppConstants';

export default class LoginForm extends React.Component {
    static navigationOptions = AppConst.NAVIGATION_OPTIONS;
    constructor(props){
        super(props);
        this.state = {id: '', password: '', error: null}

        this._goToSignUp = this._goToSignUp.bind(this);
        this._goToForgotPass = this._goToForgotPass.bind(this);
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    _signInAsync = async () => {
        if(true){
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        } else {
            this.setState({
                error: "Invalid username or password!"
            })
        }
        console.log('Sign in - ',AsyncStorage.getItem('userToken'));
    };

    _goToSignUp(){
        this.props.navigation.navigate('SignUp');
    };


    _goToForgotPass(){
        this.props.navigation.navigate('ForgotPass');
    };

    render(){
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.formControl}
                        placeholder="Email/Phone Number"
                        onChangeText={(id) => this.setState({ id })}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.formControl}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                
                <View style={styles.inputGroup}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this._signInAsync}
                >
                    <Text> Sign In </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button}
                    onPress={this._goToSignUp}
                >
                    <Text> Sign Up </Text>
                </TouchableHighlight>

                <Text onPress={this._goToForgotPass}>Forgot Password</Text>
                </View>

                <View style={styles.inputGroup}>
                    <Text>{this.state.error}</Text>
                </View>
            </View>
        )
    }
}
