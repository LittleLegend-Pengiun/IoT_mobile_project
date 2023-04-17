import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Speedometers from '../components/Speedometer';
import Switches from '../components/Switches';
import { getMQTTMessage } from '../utils/mqtt';


const HomeScreen = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getMQTTMessage();
  })
  
  return (
    <View className="flex-1 items-center justify-center">
        <Text>Home Screen</Text>
        <Speedometers />
        <Switches />
        <Text className="text-xl">Notification: {value}</Text>
    </View>
  )
}

export default HomeScreen