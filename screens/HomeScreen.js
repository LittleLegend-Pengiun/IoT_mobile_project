import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Switches from '../components/Switches'

const HomeScreen = () => {
  
  return (
    <View className="flex-1 items-center justify-center">
        <Text>Home Screen</Text>
        <Text className="text-xl">Notification:</Text>
        <Switches />
    </View>
  )
}

export default HomeScreen