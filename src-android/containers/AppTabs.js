import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import RepoList from '../screens/RepoList';
import Contacts from '../screens/ContactScreen';
import Activity from '../screens/ActivityScreen';
import * as AppConst from '../../utils/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const TabNav = TabNavigator({
    Repos: { screen: RepoList },
    Contacts: { screen: Contacts },
    Activity: { screen: Activity}
},);

class AppTab extends React.Component{
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

    
    render(){
        return (
            <TabNav screenProps={{navigation: this.props.navigation}}/>

        )
    }
}

export default AppTab;