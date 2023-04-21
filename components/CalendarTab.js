import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CalendarTab = ({id, title, iconName, IconComponent, value, setValue}) => {
  return (
    <TouchableOpacity 
    className={`bg-gray-200 flex-row rounded-lg m-1 px-3 py-5 h-24 w-1/2`}
   >
       <View className="h-full w-1/5 items-center pr-2">
           <IconComponent name={iconName} size={20} className="items-center justify-center"/>
       </View>
       <View className="relative mr-2 w-4/5">
           <Text className="font-bold pl-2 text-right right-1 top-0">{title}</Text>
           <Text className="text-xl font-bold absolute bottom-0 right-1">{value}</Text>
       </View>
   </TouchableOpacity>
  )
}

export default CalendarTab