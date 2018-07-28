import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/styles'
import * as AppConst from '../../utils/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class HistoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            ...AppConst.NAVIGATION_OPTIONS,
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-arrow-back" size={24} onPress={() => navigation.goBack(null)}/>
                </View>
            )
        }
    }
    
    constructor(props){
        super(props);
        this.userId = props.navigation.getParam('userId');
        this.goToScreen.bind(this);
    }

    goToScreen(screen){
        if(this.props.navigation.isFocused()){
            switch(screen){
                case 'DetailScreen':
                this.props.navigation.navigate('DetailScreen')
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
                        <Text style={{ paddingTop: 30 }}>{this.userId} : Details</Text>

                        <Button
                            onPress={() => this.goToScreen('DetailScreen')}
                            title="Go to detail"
                            color="#841584"
                            accessibilityLabel="Logout Button"
                            />
                </View>
            </SafeAreaView>
        );
    }
}