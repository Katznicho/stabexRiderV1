
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { generalStyles } from '../screens/utils/generatStyles';
import { COLORS } from '../theme/theme';
import OrderHistory from '../screens/HistoryScreens/OrderHistory';
import OrderDetails from '../screens/HistoryScreens/OrderDetails';






const Stack = createNativeStackNavigator();




const OrderStack = () => {
    const navigation = useNavigation<any>();

    return (
        <Stack.Navigator initialRouteName="OrderScreen">
             <Stack.Screen
                name="OrderScreen"
                component={OrderHistory}
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
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{
                    animation: 'slide_from_bottom',
                    title: 'Order Details',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                }}>
            </Stack.Screen>
            
            {/* order details */}



        </Stack.Navigator>
    );
};

export default OrderStack;
