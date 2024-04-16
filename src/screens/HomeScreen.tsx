import React, { useEffect, useState } from 'react';
import { ScrollView, Dimensions, Text, StyleSheet, TouchableOpacity, View, Button, Alert, Image, Linking } from 'react-native';
import { generalStyles } from './utils/generatStyles';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../theme/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { formatCurrency, onMakeCall } from './utils/helpers/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { usePostQuery } from '../hooks/usePostQuery';
import OrderCard from '../components/OrderCard';


const width = Dimensions.get('window').width;

const HomeScreen = () => {
  const { authToken } = useSelector((state: RootState) => state.user);

  const { data, error, isLoading, refetch } = usePostQuery<any>({
    endpoint: '/api/Rider/RiderOrders',
    queryOptions: {
      enabled: true,
      // refetchInterval: 20000,
      // refetchOnWindowFocus: true,
      // refetchOnMount: true,
    },
  })

  console.log("======rider orders========")
  console.log(data)
  console.log("=====rider orders=========")

  const [summary, setSummary] = useState<any>({
    totalDeliveries: "20 Deliveries",
    overallRating: "4.5",
    overallStars: 4
  });



  const tabBarHeight = useBottomTabBarHeight();
  // State to store assigned orders
  const [assignedOrders, setAssignedOrders] = useState<any>([]);
  const [acceptOrder, setAcceptOrder] = useState<any>(false);

  // Dummy data for assigned orders (replace with actual data)
  const dummyOrders = [
    {
      id: 1,
      customer: 'Katende Nicholas',
      address: 'Nansana, Kampala',
      status: 'Pending',
      deliveryTime: 'Today, 3:00 PM',
      orderType: 'Gas',
      distance: '2.5 miles',
      contact: '0759983853',
      items: [
        { name: '13KG Gas', quantity: 1, price: "3000", total: "3000" },
        { name: '20KG Gas', quantity: 1, price: "3000", total: "3000" },
      ],
      purchase_cost: "6000",
      delivery_cost: "1000"
    },
    // Add more dummy orders...
  ];

  // Simulate fetching assigned orders
  useEffect(() => {
    // Fetch assigned orders from API or local storage
    // Update state with fetched orders
    setAssignedOrders(dummyOrders);
  }, []);

  // Function to mark an order as completed

  const navigation = useNavigation<any>();

  const openMapsForDirections = () => {
    const destination = `0.343556, 32.589543`;
    const url = `https://maps.google.com/maps?q=${destination}`;
    return Linking.openURL(url);
  };

  const onAcceptOrder = () => {
    Alert.alert(
      "Accept Order",
      "Are you sure you want to accept this order?",
      [
        {
          text: "Cancel",
          style: "cancel",

        },
        {
          text: "Yes",
          onPress: () => {
            return setAcceptOrder(true)
          }

        }
      ]
    )
  }


  return (
    <KeyboardAwareScrollView
      style={[generalStyles.ScreenContainer]}
      keyboardShouldPersistTaps="always"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
      >
        {/* summary card */}
        <View style={[styles.summaryContainer]}>
          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>

            <View style={[generalStyles.flexStyles, { alignItems: "center" }]}>
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1345329817/photo/courier-on-bicycle-with-parcel-bike-delivery-service.jpg?s=612x612&w=0&k=20&c=uIeqd49y0oEJqIEJjH7VdeO8p2A6ERo1ETxz0Bk_Jt4="
                  }}
                  style={{ width: 50, height: 50, borderRadius: 50 }}

                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[generalStyles.CardTitle]}>Katende Nicholas</Text>
                <Text style={[generalStyles.CardSubtitle]}>20 Deliveries</Text>
                <View style={[generalStyles.flexStyles, { alignItems: "center" }]}>
                  {
                    Array(4).fill(0).map((_, index) => (
                      <AntDesign
                        key={index}
                        name="star"
                        size={18}
                        color={"gold"}
                      />
                    ))
                  }
                  <Text style={[generalStyles.CardSubtitle]}> 4.5</Text>
                </View>
              </View>
            </View>
            <View>
              <FontAwesome
                name="motorcycle"
                size={18}
                color={COLORS.primaryOrangeHex}
              />
            </View>
          </View>

        </View>

        {/* summary card */}

        <View style={[styles.summaryContainer,]}>
          <Text style={[generalStyles.CardTitle]}>Your Assigned Order</Text>
        </View>
        {/* title area */}

        {/* order area */}
         {
          <View>
               {
                data  && data.length > 0 ? (
                  <View>
                    {
                      data.map((order: any, index: number) => (
                        <OrderCard
                          key={index}
                          // order={order}
                        />
                      ))
                    }
                  </View>
                  
                ):(
                  <View style={[styles.summaryContainer,]}>
                  <Text style={[generalStyles.CardTitle]}>
                    No Orders Found
                  </Text>
                </View>
                )
               }
          </View>
         }
        {/* order area */}

      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  summaryContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: COLORS.primaryLightWhiteGrey
  }
});