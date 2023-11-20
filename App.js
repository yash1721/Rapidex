import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { HomeScreen as HomeScreen001 } from './screens/day001/HomeScreen';
import { SignInScreen as SignInScreen001 } from './screens/day001/SignInScreen';
import { SignUpScreen as SignUpScreen001 } from './screens/day001/SignUpScreen';


import Home from "./screens/Home";
import Details from "./screens/Details";


const Day001Stack = createNativeStackNavigator();
const Day001StackScreen = () => (
  <Day001Stack.Navigator>
    <Day001Stack.Screen name='Home' component={HomeScreen001} options={{ headerShown: false }} />
    <Day001Stack.Screen name='SignUp' component={SignUpScreen001} options={{ headerShown: false }} />
    <Day001Stack.Screen name='SignIn' component={SignInScreen001} options={{ headerShown: false }} />
  </Day001Stack.Navigator>
);

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    <HomeStack.Screen name='Details' component={Details} options={{ headerShown: false }} />
  </HomeStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={'Day001'}>
    <RootStack.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day001' component={Day001StackScreen} options={{ headerShown: false }} />

    </RootStack.Navigator>
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  // return (
  //   <NavigationContainer theme={theme}>
  //     <Stack.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}
  //       initialRouteName="Home"
  //     >
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Details" component={Details} />
        
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
