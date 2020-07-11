import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile77188Navigator from '../features/UserProfile77188/navigator';
import Tutorial77187Navigator from '../features/Tutorial77187/navigator';
import NotificationList77159Navigator from '../features/NotificationList77159/navigator';
import Settings77158Navigator from '../features/Settings77158/navigator';
import Settings77150Navigator from '../features/Settings77150/navigator';
import UserProfile77148Navigator from '../features/UserProfile77148/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile77188: { screen: UserProfile77188Navigator },
Tutorial77187: { screen: Tutorial77187Navigator },
NotificationList77159: { screen: NotificationList77159Navigator },
Settings77158: { screen: Settings77158Navigator },
Settings77150: { screen: Settings77150Navigator },
UserProfile77148: { screen: UserProfile77148Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
