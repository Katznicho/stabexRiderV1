import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { generalStyles } from '../screens/utils/generatStyles';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';




const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation<any>();
    const { user } = useSelector((state: RootState) => state.user);

    return (
        <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    animation: 'slide_from_bottom',
                    // headerShown: true
                    header: () => <HeaderBar
                        title={`${user?.fullName}`}

                    />
                }}
            >

            </Stack.Screen>



        </Stack.Navigator>
    )
}

export default HomeStack

