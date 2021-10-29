import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../pages/HomePage";

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router