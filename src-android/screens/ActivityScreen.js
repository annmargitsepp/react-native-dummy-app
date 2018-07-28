import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/styles'
import * as AppConst from '../../utils/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Activity extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         ...AppConst.NAVIGATION_OPTIONS,
    //         headerLeft: (
    //             <View style={{ padding: 10 }}>
    //                 <Ionicons name="md-menu" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
    //             </View>
    //         )
    //     }
    // }

    constructor(props){
        super(props);

        console.log("Activity props - ", props);
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingTop: 30 }}>Activity</Text>
                </View>
            </SafeAreaView>
        );
    }
}