import React from 'react';
import { AsyncStorage } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import AppTabs from './AppTabs';
import DrawerContent from "../components/DrawerContent"
import Profile from '../screens/ProfileScreen';
import AccountSetting from '../screens/AccountSettingScreen';
import HistoryScreen from '../screens/HistoryScreen';
import DetailScreen from '../screens/DetailScreen';
import NewScreen from '../screens/NewScreen';

const InnerStackNavigator = StackNavigator(
    {
        TabNavigator: {
            screen: AppTabs,
        },
        HistoryScreen: {screen: HistoryScreen},
        DetailScreen: {screen: DetailScreen},
        NewScreen: {screen: NewScreen}
    }
);

const ProfileStackNavigator = StackNavigator(
    {
        TabNavigator: {
            screen: Profile,
        }
    }
);

const AccountSettingStackNavigator = StackNavigator(
    {
        TabNavigator: {
            screen: AccountSetting,
        }
    }
);
const Drawer = DrawerNavigator({
    Home: { screen: InnerStackNavigator},
    Profile: { screen: ProfileStackNavigator },
    AccountSetting: { screen: AccountSettingStackNavigator}
  }, 
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  });

class MainAppContainer extends React.Component{

    static navigationOptions = {
        header: null,
        };
    
    
    signOutAsync = async () => {
        await AsyncStorage.clear();
        console.log('Signout');
        this.props.navigation.navigate('Auth');
    };


    render(){
        console.log('Drawer 1');
        return (
            <Drawer screenProps={{signOutAsync: this.signOutAsync}}/>
        )
    }
}


export default MainAppContainer;

