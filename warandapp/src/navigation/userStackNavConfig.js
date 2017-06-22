import { StackNavigator } from 'react-navigation'

// Screens
import Login from '../scenes/login/Login';
import Home from '../scenes/home/Home'

const routeConfiguration = {
    LoginScreen: { screen: Login },
    HomeScreen: { screen: Home }
};

// going to disable the header for now
const userNavigatorConfiguration = {
    initialRouteName: 'LoginScreen'
};

export const UserNavigator = StackNavigator(routeConfiguration,userNavigatorConfiguration);
