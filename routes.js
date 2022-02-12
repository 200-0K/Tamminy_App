import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import SymptomSearch from "./screens/SymptomSearch";
import Search from "./screens/Search";

import { COLORS } from "./utils/colors";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ 
        title: "",
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: COLORS.primaryText,
      }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="SymptomSearch" component={SymptomSearch} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;