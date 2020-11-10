import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile170702Navigator from '../features/UserProfile170702/navigator';
import BlankScreen50170679Navigator from '../features/BlankScreen50170679/navigator';
import Maps170661Navigator from '../features/Maps170661/navigator';
import Additem170660Navigator from '../features/Additem170660/navigator';
import Maps170656Navigator from '../features/Maps170656/navigator';
import UserProfile170652Navigator from '../features/UserProfile170652/navigator';
import BlankScreen0170629Navigator from '../features/BlankScreen0170629/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile170702: { screen: UserProfile170702Navigator },
BlankScreen50170679: { screen: BlankScreen50170679Navigator },
Maps170661: { screen: Maps170661Navigator },
Additem170660: { screen: Additem170660Navigator },
Maps170656: { screen: Maps170656Navigator },
UserProfile170652: { screen: UserProfile170652Navigator },
BlankScreen0170629: { screen: BlankScreen0170629Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
