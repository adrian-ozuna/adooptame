import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './home';
import Saved from './saved';

const AppNavigator = createStackNavigator({
  Home: Home,
  Save: Saved,
});

export default createAppContainer(AppNavigator);
