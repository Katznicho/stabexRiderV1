import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/dev';
import AuthStack from '../navigators/AuthStack';
import TabNavigator from '../navigators/TabNavigator';



const Stack = createNativeStackNavigator();

const Base = () => {
    const { isLoggedIn, } = useSelector((state: RootState) => state.user);




    // useEffect(() => {
    // }, [isLoggedIn])

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <TabNavigator /> : <AuthStack />

            }
        </NavigationContainer>
    )
}

export default Base

