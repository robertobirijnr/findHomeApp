import * as React from 'react'


// Navigations
// import {} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//material icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import AboutScreen from '../components/AboutScreen'
import HomeDetailsScreen from '../components/HomeDetails'
import HomeListingScreen from '../components/HomeListScreen'
import AddNewListScreen from '../components/AddNewListing'


const stack = createStackNavigator();
const Tabs = createBottomTabNavigator()

function stactNavigator() {
    return (
        <stack.Navigator>
            <stack.Screen
                name="HomeList"
                component={HomeListingScreen}
                options={{ title: "HomeHunt" }}
            />

            <stack.Screen
                name="HomeDetails"
                component={HomeDetailsScreen}

            />

            <stack.Screen
                name="AddNewHome"
                component={AddNewListScreen}

            />
        </stack.Navigator>
    )
}

function tabsNavigator() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Home"
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
                component={stactNavigator}
            />
            <Tabs.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information" color={color} size={size} />
                    ),
                }}
            />
        </Tabs.Navigator>
    )
}

export default tabsNavigator;