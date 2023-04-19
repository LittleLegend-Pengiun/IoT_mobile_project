import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const InfoTab = ({id, title, chosenTab, switchCb, iconName, IconComponent, value}) => {
  const boxStyling = chosenTab == id? "bg-green-200 border border-green-400": "bg-gray-200"
  return (
    <TouchableOpacity 
     className={`${boxStyling} flex-row rounded-lg m-1 px-3 py-5 h-28 w-44`}
     onPress={() => switchCb(id)}
    >
        <View className="h-full w-13 items-center pr-2">
            <IconComponent name={iconName} size={50} className="items-center justify-center"/>
        </View>
        <View className="relative">
            <Text className="font-bold pl-2 text-right right-0">{title}</Text>
            <Text className="text-2xl font-bold absolute bottom-0 right-0">{value}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default InfoTab