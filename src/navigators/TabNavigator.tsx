import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTFAMILY } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import HomeStack from './HomeStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileStack from './ProfileStack';
import OrderStack from './OrderStack';



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
          marginVertical:10,
          marginHorizontal:10,
          borderRadius:20
          
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.primaryOrangeHex } : {},
                ]}>
                <AntDesign
                name="home"
                size={25}
                color={COLORS.primaryBlackHex}
              />
                </View>
              
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderStack}
        options={{
          title: "History",
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.primaryOrangeHex } : {},
                ]}>
                <AntDesign
                name="menu-fold"
                size={25}
                color={COLORS.primaryBlackHex}
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
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabelStyle,
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
  tabBarLabelStyle: {
    // fontSize: 20,
    fontWeight: 'bold',
    marginBottom:4,
    fontFamily:FONTFAMILY.Lovato_Bold
  }
});

export default TabNavigator;
