import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function ControlSwitch({id, title, value, disable, IconComponent, iconOn, iconOff}) {
    const styling = value == "1"? "border-red-500 text-red-500": "border-green-500 text-green-500";
  return (
    <View className="bg-gray-200 mx-4 py-4 my-4 flex-row  items-center rounded-md">
        <IconComponent name={value == "1"? iconOn: iconOff} size={30} 
         className="pl-4"/>
        <Text className="font-bold text-lg pl-2">
            {title}:
        </Text>
        <Text 
         className={`${value == 0? "text-red-500": "text-green-500"} pl-1 flex-1 font-bold text-sm`}>
            {value == '0'? "OFF": "ON"}
        </Text>
        <TouchableOpacity 
         className={`${styling} px-4 py-2 border-2 mr-2 rounded-lg`}
         disabled={disable}
        >
            <Text className={`${styling} font-bold text-center`}>{value == "1"? "TURN OFF": "TURN ON "}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ControlSwitch