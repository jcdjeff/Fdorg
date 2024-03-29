import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />
      <Text>Product Details Screen for { id }</Text>
    </View>
  )
}

export default ProductDetailsScreen;