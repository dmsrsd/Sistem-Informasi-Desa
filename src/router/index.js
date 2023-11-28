import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Splash,
  Home,
  News,
  Categories,
  NewsDetail,
  NewsCategory,
} from '../pages';
import {BottomNavigator} from '../components/molecules';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyApp"
        component={MyApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsCategory"
        component={NewsCategory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
