import React, { useEffect, useState } from 'react';
import { ScrollView,  Text, StyleSheet, TouchableOpacity, View, Button, Alert, Image, Linking } from 'react-native';
import { COLORS } from '../../theme/theme'
import { generalStyles } from '../utils/generatStyles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formatCurrency, onMakeCall } from '../utils/helpers/helpers';

const OrderDetails = () => {
    const tabBarHeight = useBottomTabBarHeight();

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
        { name: '13KG Gas', quantity: 1 , price:"3000", total:"3000"},
        { name: '20KG Gas', quantity: 1 , price:"3000", total:"3000"},
      ],
      purchase_cost:"6000",
      delivery_cost:"1000"
    },
    // Add more dummy orders...
  ];

  
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
            <Text style={[generalStyles.CardSubtitle, { color: COLORS.primaryBlackHex }]}>
              {"Completed"}
            </Text>
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

        {/* items section */}
        <View style={{
                          paddingVertical:5 
                      }}>
                          <View>
                              <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: 'center' }]}>
                                  <Text style={[generalStyles.CardPriceCurrency]}>Total Items :</Text>
                                  <Text style={[generalStyles.CardSubtitle, { fontWeight: "bold" }]}>{dummyOrders[0]?.items?.length}</Text>
                              </View>
                              <View>
                                  {
                                      dummyOrders[0]?.items?.map((item: any) => {
                                          return (
                                              <View key={item?.id} style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: 'center' }]}>
                                                  <Text style={[generalStyles.CardSubtitle]}>{item?.name}</Text>
                                                  {/* <Text style={[generalStyles.CardSubtitle]}>{item?.price}</Text> */}
                                                  <Text style={[generalStyles.CardSubtitle]}>X {item?.quantity} ({formatCurrency(parseInt(item?.price))})</Text>
                                                  {/* <Text style={[generalStyles.CardSubtitle]}>UGX {item?.total_price}</Text> */}
                                              </View>
                                          )
                                      })
                                  }
                              </View>
                              
                          </View>
                          <View>

                          </View>
                      </View>
        {/* items section */}


        <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "center" }]}>
          <TouchableOpacity style={{ marginVertical: 5 }}
            onPress={() => openMapsForDirections()}
          >
            <Text style={[generalStyles.CardTitle, { color: COLORS.primaryOrangeHex, fontWeight: "bold" }]}>View Map Route</Text>
          </TouchableOpacity>
        </View>



      </View>
      {/* delivery area */}

    </ScrollView>
  </KeyboardAwareScrollView>
  )
}

export default OrderDetails

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