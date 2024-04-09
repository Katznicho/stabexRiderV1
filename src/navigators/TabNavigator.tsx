import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import HomeStack from './HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderStack from './OrderStack';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileStack from './ProfileStack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/dev';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primaryBlackHex,
          borderTopWidth: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.primaryOrangeHex } : {},
                ]}>
                <CustomIcon
                  name="home"
                  color={COLORS.primaryBlackHex}
                  size={25}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HomeStack}
        options={{
          title: "History",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.primaryOrangeHex } : {},
                ]}>
                <CustomIcon
                  name="menu"
                  color={COLORS.primaryBlackHex}
                  size={25}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (

            <View
              style={[
                styles.activeTabBackground,
                focused ? { backgroundColor: COLORS.primaryOrangeHex } : {},
              ]}>
              <AntDesign
                name="user"
                size={25}
                color={COLORS.primaryBlackHex}
              />
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.primaryWhiteHex,
    padding: 8,
    borderRadius: 25,
  },
});

export default TabNavigator;
