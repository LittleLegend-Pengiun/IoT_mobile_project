import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function AIStatus({id, title, value, IconComponent, iconOn, iconOff}) {
    let val = value.toUpperCase()
    if (val != "--/--")
        val = val.replace(/[^a-zA-Z ]/g, "");
  return (
    <View className="bg-gray-200 mx-4 py-4 my-4 flex-row  items-center rounded-md">
        <IconComponent name={val=="GOOD"? iconOn: iconOff} size={30} 
         className="pl-4"/>
        <Text className="font-bold text-lg pl-2 flex-1">
            {title}:
        </Text>
        <Text 
         className={`${val == "NOT GOOD"? "text-red-500": "text-green-500"} pl-1 font-bold text-2xl pr-2`}>
            {val}
        </Text>
    </View>
  )
}

export default AIStatus