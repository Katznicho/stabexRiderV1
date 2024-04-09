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
import { onMakeCall } from './utils/helpers/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';


const width = Dimensions.get('window').width;

const HomeScreen = () => {
  const { authToken } = useSelector((state: RootState) => state.user);

  const [summary, setSummary] = useState<any>({
    totalDeliveries: "20 Deliveries",
    overallRating: "4.5",
    overallStars: 4
  });

  const tabBarHeight = useBottomTabBarHeight();
  // State to store assigned orders
  const [assignedOrders, setAssignedOrders] = useState<any>([]);

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
        { name: '13KG Gas', quantity: 1 },
        { name: '20KG Gas', quantity: 2 }
      ]
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
  const markOrderCompleted = (orderId: any) => {
    // Update order status to 'Completed' in the state
    const updatedOrders = assignedOrders.map((order: { id: any; }) => {
      if (order.id === orderId) {
        return { ...order, status: 'Completed' };
      }
      return order;
    });
    setAssignedOrders(updatedOrders);

    // Show confirmation alert
    Alert.alert('Order Completed', 'The order has been marked as completed.');
  };
  const navigation = useNavigation<any>();

  const openMapsForDirections = () => {
    const destination = `0.343556, 32.589543`;
    const url = `https://maps.google.com/maps?q=${destination}`;
    return Linking.openURL(url);
  };


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

        {/* delivery area */}
        <View style={[styles.summaryContainer]}>
          <View style={[generalStyles.flexStyles, {
            borderLeftColor: COLORS.primaryGreenHex,
            borderLeftWidth: 5,
            borderStyle: "dotted",
            padding: 5,
            alignItems: "center",
            justifyContent: "space-between"
          }]}>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Pickup Location</Text>
              <Text style={[generalStyles.CardTitle]}>Nansana, Kampala</Text>
              <Text style={[generalStyles.CardSubtitle]}>Delivery Location</Text>
              <Text style={[generalStyles.CardTitle]}>Kawempe Ttula Uganda</Text>

            </View>

            <View style={{ backgroundColor: COLORS.primaryGreenHex, padding: 8, borderRadius: 20 }}>
              <Text style={[generalStyles.CardSubtitle, { color: COLORS.primaryBlackHex }]}>Not Started</Text>
            </View>
          </View>

          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Receipient</Text>
              <Text style={[generalStyles.CardTitle]}>Bruce Asiimwe</Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={{ padding: 10 }}
              onPress={() => onMakeCall('0759983853')}
            >
              <Ionicons
                name="call"
                size={18}
                color={COLORS.primaryOrangeHex}
                onPress={() => onMakeCall('0759983853')}
              />
              <Text style={[generalStyles.CardSubtitle]}>Call</Text>
            </TouchableOpacity>
          </View>

          {/* payment details */}
          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Payment Method</Text>
              <Text style={[generalStyles.CardTitle]}>Cash</Text>
            </View>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Fee </Text>
              <Text style={[generalStyles.CardTitle]}>UGX 200,000</Text>
            </View>

          </View>
          {/* payment details */}

          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "center" }]}>
            <TouchableOpacity style={{ marginVertical: 5 }}
              onPress={() => openMapsForDirections()}
            >
              <Text style={[generalStyles.CardTitle, { color: COLORS.primaryOrangeHex, fontWeight: "bold" }]}>View Map Route</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity
              activeOpacity={1}
              style={[generalStyles.loginContainer, { marginTop: 0, padding: 10 }]}
            >
              <Text style={generalStyles.loginText}>{'start delivery'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* delivery area */}

      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardContent: {
    padding: 15,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    marginBottom: 5,
  },
  status: {
    marginBottom: 5,
    color: '#007bff',
  },
  detail: {
    marginBottom: 3,
  },
  summaryContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: COLORS.primaryLightWhiteGrey
  }
});