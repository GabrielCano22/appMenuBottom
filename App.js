import {StyleSheet, View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen} from "./Screens/HomeScreen.jsx";
import {SettingsScreen} from "./Screens/SettingsScreen.jsx";
import {ContactScreen} from "./Screens/ContactScreen.jsx";
import {ShopingScreen} from "./Screens/ShopingScreen.jsx";
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'purple',
        tabBarActiveBackgroundColor:'greenyellow',
      }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tittle:'INICIO',tabBarIcon:({color,size})=>(<Ionicons name='home' color={'orange'}size={30}/>)}}
        >
        </Tab.Screen>
        <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tittle:'CONFIGURACIÓN',tabBarIcon:({color,size})=>(<Ionicons name='cog' color={'blue'}size={30}/>)}}
        >
        </Tab.Screen>
        <Tab.Screen
        name="Shoping"
        component={ShopingScreen}
        options={{tittle:'TIENDA',tabBarIcon:({color,size})=>(<Ionicons name='cart' color={'green'}size={30}/>)}}
        >
        </Tab.Screen>
        <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{tittle:'CONTACTO',tabBarIcon:({color,size})=>(<Ionicons name='contact' color={'red'}size={30}/>)}}
        >
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
};