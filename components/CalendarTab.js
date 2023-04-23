import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const CalendarTab = ({id, title, iconName, IconComponent, value, toggleModal}) => {
  return (
    <TouchableOpacity 
    className={`bg-gray-200 rounded-lg m-1 px-3 py-5 h-24 w-1/2`}
    onPress={() => toggleModal()}
   >
       <View className="h-1/2 w-full items-center pr-2 flex-row">
           <IconComponent name={iconName} size={20} className="items-center justify-center flex-1"/>
           <Text className="font-bold pl-2 text-right right-0 top-0">{title}</Text>
       </View>
       <View className="relative mr-2 w-full h-1/2">
           <Text className="text-lg font-bold absolute bottom-0 right-1">{value.getDate() + "-" + monthName[value.getMonth()] + "-" + value.getFullYear()}</Text>
       </View>
   </TouchableOpacity>
  )
}

export default CalendarTab