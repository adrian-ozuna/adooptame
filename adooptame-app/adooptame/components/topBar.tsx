import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '@/app/(tabs)/home';

const Tab = createMaterialTopTabNavigator();

export default function MyTopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
  );
}
