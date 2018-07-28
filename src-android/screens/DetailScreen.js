import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import styles from '../styles/styles'
import * as AppConst from '../../utils/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            ...AppConst.NAVIGATION_OPTIONS,
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-arrow-back" size={24} onPress={() =>{
                        console.log('navigation -- ', navigation, navigation.isFocused());
                        if(navigation.isFocused()){
                            navigation.goBack(null)
                        }
                    } } />
                </View>
            )
        }
    }

    goToScreen(screen){
        console.log('Go to screen called -- ', screen);
        if(this.props.navigation.isFocused()){
            switch(screen){
                case 'back':
                this.props.navigation.goBack(null);
                break;
            }   
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingTop: 30 }}>Detail Screen</Text>

                        <Button
                            onPress={() => this.goToScreen('back')}
                            title="Go Back"
                            color="#841584"
                            accessibilityLabel="Logout Button"
                            />
                    </View>
            </SafeAreaView>
        );
    }
}