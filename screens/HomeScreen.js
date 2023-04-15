import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import mqtt from "precompiled-mqtt";
/* create mqtt client */

const HomeScreen = () => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    const client = mqtt.connect({
      host: "io.adafruit.com",
      port: 1883,
      username: 'hoanganhle',
      password: 'aio_blxW26KUc7lSAn86jJT79G1XM5zf',
      protocol: 'mqtt'
    })
    
    client.on('connect', () => {
      console.log("CONNECTED to broker");
    });
    client.on("error", (e) => {
      console.error(e)
    })
    client.subscribe('hoanganhle/feeds/bbc-led');
    client.on("message", (topic, message, _) => {
      console.log(topic, message);
      setValue(message);
    })
  }, [])

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home Screen</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default HomeScreen