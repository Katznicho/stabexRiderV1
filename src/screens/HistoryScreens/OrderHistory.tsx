import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrdersFlatList from '../../components/OrdersFlatList'

const OrderHistory = () => {
  const data = [1, 2,3,4,5,6]
  return (
    <View>
      <OrdersFlatList
        ordersData={data}
       />
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({})