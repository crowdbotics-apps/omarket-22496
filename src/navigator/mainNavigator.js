import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps170656Navigator from '../features/Maps170656/navigator';
import UserProfile170652Navigator from '../features/UserProfile170652/navigator';
import BlankScreen0170629Navigator from '../features/BlankScreen0170629/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
