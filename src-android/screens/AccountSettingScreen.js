import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import styles from '../styles/styles'
import * as AppConst from '../../utils/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class AccountSetting extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            ...AppConst.NAVIGATION_OPTIONS,
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
                </View>
            )
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
                        <Text style={{ paddingTop: 30 }}>Account Setting Screen</Text>

                        <Button
                            onPress={this.props.screenProps.signOutAsync}
                            title="Logout"
                            color="#841584"
                            accessibilityLabel="Logout Button"
                            />
                    </View>
            </SafeAreaView>
        );
    }
}