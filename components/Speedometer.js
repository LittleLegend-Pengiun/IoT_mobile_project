import React from 'react'
import Speedometer from 'react-native-speedometer-chart';
import { View, Text } from 'react-native'

const data = {
    temp: 38,
    humid: 40,
    soid: 32,
    light: 25
}

function Speedometers() {
  return (
    <View className="grid grid-cols-2 pt-3 px-3 pb-2 w-auto">
        <View className="flex flex-row py-2 px-2 space-x-5">
            <View className="border rounded p-2">
                <Text>Temperature</Text>
                <Speedometer value={data.temp} totalValue={60} size={150} />
            </View>

            <View className="border rounded p-2">
                <Text>Humidity present</Text>
                <Speedometer value={data.humid} totalValue={100} size={150} showPercent/>
            </View>
        </View>
        <View className="flex flex-row py-2">
        <Speedometer value={data.soid} totalValue={100} size={150} className="px-5" showPercent/>
        <Speedometer value={data.light} totalValue={100} size={150} className="px-5" showPercent/>
        </View> 
    </View>
  )
}

export default Speedometers