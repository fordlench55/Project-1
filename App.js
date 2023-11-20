const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CartScreen from "./screens/CartScreen";
import StraysMovieBuyPage from "./screens/StraysMovieBuyPage";
import OppenheimerMovieBuyPage from "./screens/OppenheimerMovieBuyPage";
import BarbieMovieBuyPage from "./screens/BarbieMovieBuyPage";
import BlueBeetleMovieBuyPage from "./screens/BlueBeetleMovieBuyPage";
import LoadingAnimation7 from "./screens/LoadingAnimation7";
import BoughtScreen from "./screens/BoughtScreen";
import StraysMovie from "./screens/StraysMovie";
import OppenheimerMovie from "./screens/OppenheimerMovie";
import BarbieMovie from "./screens/BarbieMovie";
import BlueBeetleMovie from "./screens/BlueBeetleMovie";
import Homepage from "./screens/Homepage";
import LoadingAnimation6 from "./screens/LoadingAnimation6";
import LoadingAnimation2 from "./screens/LoadingAnimation2";
import LoadingAnimation4 from "./screens/LoadingAnimation4";
import LoadingAnimation3 from "./screens/LoadingAnimation3";
import LoadingAnimation1 from "./screens/LoadingAnimation1";
import Tools from "./screens/Tools";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StraysMovieBuyPage"
              component={StraysMovieBuyPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OppenheimerMovieBuyPage"
              component={OppenheimerMovieBuyPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarbieMovieBuyPage"
              component={BarbieMovieBuyPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlueBeetleMovieBuyPage"
              component={BlueBeetleMovieBuyPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingAnimation7"
              component={LoadingAnimation7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BoughtScreen"
              component={BoughtScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StraysMovie"
              component={StraysMovie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OppenheimerMovie"
              component={OppenheimerMovie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarbieMovie"
              component={BarbieMovie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlueBeetleMovie"
              component={BlueBeetleMovie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingAnimation6"
              component={LoadingAnimation6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingAnimation2"
              component={LoadingAnimation2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingAnimation4"
              component={LoadingAnimation4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingAnimation3"
              component={LoadingAnimation3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingAnimation1"
              component={LoadingAnimation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tools"
              component={Tools}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
