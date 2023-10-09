import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPassword from '../screens/ForgotPassword'
import SettingsScreen from '../screens/SettingsScreen'
import Guidelines from '../screens/Guidelines'
import AboutUs from '../screens/AboutUs'
import useAuth from '../hooks/useAuth'
import { ProfileScreen, Quiz, Latest } from '../screens/BottomTabNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'
import FoodDetailsScreen from '../screens/FoodDetailsScreen'
import { LogBox } from 'react-native'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff'
  }
}

const ProfileStack = createNativeStackNavigator()

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='SettingsScreen'
      component={ProfileScreen}
      options={({ navigation }) => ({
        title: 'Profile',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <AntDesign
              name='setting'
              size={24}
              color='black'
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        )
      })}
    />
    <ProfileStack.Screen name='Settings' component={SettingsScreen} />
    <ProfileStack.Screen name='AboutUs' component={AboutUs} />
    <ProfileStack.Screen name='Guidelines' component={Guidelines} />
  </ProfileStack.Navigator>
)

// Create a Home Stack Navigator
const HomeStack = createNativeStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name='FoodDetails'
      component={FoodDetailsScreen}
      options={{ headerShown: false }}
    />
    {/* Add more screens as needed */}
  </HomeStack.Navigator>
)

export default function AppNavigation () {
  const { user } = useAuth()
  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Tab.Screen
            name='Home'
            component={HomeStackScreen} // Use HomeStackScreen here
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Entypo
                    name='home'
                    size={30}
                    color={focused ? '#16247d' : '#111'}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen
            name='New'
            component={Latest}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Entypo
                    name='new'
                    size={30}
                    color={focused ? '#16247d' : '#111'}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen
            name='Quiz'
            component={Quiz}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Ionicons
                    name='checkbox'
                    size={30}
                    color={focused ? '#16247d' : '#111'}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen
            name='Profile'
            component={ProfileStackScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <MaterialIcons
                    name='face'
                    size={30}
                    color={focused ? '#16247d' : '#111'}
                  />
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name='Login'
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name='SignUp'
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
          <Stack.Screen
            name='ForgotPassword'
            options={{ headerShown: false }}
            component={ForgotPassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
