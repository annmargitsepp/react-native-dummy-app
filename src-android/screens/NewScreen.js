import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, SafeAreaView, StatusBar, Button, Select } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/styles'
import * as AppConst from '../../utils/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons'

class NewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            ...AppConst.NAVIGATION_OPTIONS,
            drawerLockMode: 'locked-closed',
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-arrow-back" size={24} onPress={() => navigation.goBack(null)} />
                </View>
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="red"
                />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingTop: 30 }}>Create something new</Text>

                        <Button
                            onPress={() => this.props.navigation.goBack(null)}
                            title="Go Back"
                            color="#841584"
                            accessibilityLabel="Logout Button"
                            />
                    </View>
            </SafeAreaView>
        );
    }
}

export default NewScreen;