
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Home } from "./screens/";

import { images, icons, COLORS, FONTS, SIZES } from './constants';


const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    // <StatusBar style="auto" />

    <NavigationContainer theme={theme}>
        <Stack.Navigator
            initialRouteName={'Home'}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'SHOE SELECTOR',
                    headerStyle: {
                        //backgroundColor: '#f4511e',
                    },
                    headerTintColor: COLORS.lightGray,
                    headerTitleStyle: {
                        ...FONTS.navTitle
                    },
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity
                            style={{ marginLeft: SIZES.padding }}
                            onPress={onPress}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: SIZES.padding }}
                            onPress={() => console.log("Pressed")}
                        >
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
