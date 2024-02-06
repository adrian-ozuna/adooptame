import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Home from './home';
import Primary_slider from './default_slider';
import Saved from './saved';
import Profile from './profile';
import { faHome, faShieldDog, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MyTabs() {
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
         
          let icon = faHome;
          switch (route.name) {
            case 'Home':
              icon = faHome;
              break;
            case 'Swiper':
              icon = faShieldDog;
              break;
            case 'Saved':
              icon = faBookmark;
              break;
            case 'Profile':
              icon = faUser;
              break;
            
          }

          return <FontAwesomeIcon icon={icon} color={color} size={22} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: 'black',
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Swiper" component={Primary_slider} options={{ headerShown: false }} />
      <Tab.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}