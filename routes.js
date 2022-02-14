import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import SymptomSearch from "./screens/SymptomSearch";
import Question from "./screens/Question";
import Search from "./screens/Search";
import AssessmentDetail from "./screens/AssessmentDetail";
import Login from "./screens/Login";
import Register from "./screens/Register";
import OTP from "./screens/OTP";
import Feedback from "./screens/Feedback";
import AssessmentHistory from "./screens/AssessmentHistory";
import SymptomDetail from "./screens/SymptomDetail";
import DiseaseDetail from "./screens/DiseaseDetail";

import { COLORS } from "./utils/colors";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function App() {
  // TODO
  // Contexts are independent files
  // ---  AppCtx ---
  // --- AuthCtx ---
  // - AuthCtx will contain user's token
  // - Upon app start AuthCtx will handle loading user authentication details into the context
  // - If token is set then treat user as signed-in e.g. don't show login button at home screen
  // - Make ApiManager class use this context to get/set user's token
  // - If token is changed then the context will handle saving it into a localstorage
  // Perfect!

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "",
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.primaryText,
          headerStyle: { backgroundColor: "rgba(0,0,0,0)" },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AssessmentDetail" component={AssessmentDetail} />
        <Stack.Screen name="AssessmentHistory" component={AssessmentHistory} />
        <Stack.Screen name="SymptomSearch" component={SymptomSearch} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="SymptomDetail" component={SymptomDetail} />
        <Stack.Screen name="DiseaseDetail" component={DiseaseDetail} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
