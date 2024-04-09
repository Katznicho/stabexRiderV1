
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import HeaderBar from '../components/HeaderBar';
import { generalStyles } from '../screens/utils/generatStyles';
import { COLORS } from '../theme/theme';





const Stack = createNativeStackNavigator();


const Empty = () => {

    return (
        <></>
    )
}

const OrderStack = () => {
    const navigation = useNavigation<any>();

    return (
        <Stack.Navigator initialRouteName="OrderScreen">
             <Stack.Screen

                name="OrderScreen"
                component={Empty}
                options={{
                    animation: 'slide_from_bottom',
                    title: 'My Orders',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                }}>
            </Stack.Screen>
            {/* order details */}
            
            {/* order details */}



        </Stack.Navigator>
    );
};

export default OrderStack;
