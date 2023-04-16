import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Speedometers from '../components/Speedometer';
import Switches from '../components/Switches';
import client from '../utils/mqtt';


const HomeScreen = () => {
  const [value, setValue] = useState("");

  client.on("message", (topic, message, _) => {
    setValue(`Data from topic: ${topic} changed to ${message}`)
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