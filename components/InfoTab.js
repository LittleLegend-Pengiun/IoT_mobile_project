import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { choseChart, getChartId } from '../redux/chosenChartSlice'
import { useDispatch, useSelector } from 'react-redux'

const InfoTab = ({id, title, iconName, IconComponent, value}) => {
    const chosenTab = useSelector(getChartId);
    const dispatch = useDispatch();
  const boxStyling = chosenTab == id? "bg-green-200 border border-green-400": "bg-gray-200"
  return (
    <TouchableOpacity 
     className={`${boxStyling} flex-row rounded-lg m-1 px-3 py-5 h-28 w-1/2`}
     onPress={() => dispatch(choseChart(id))}
    >
        <View className="h-full w-2/5 items-center pr-2">
            <IconComponent name={iconName} size={45} className="items-center justify-center"/>
        </View>
        <View className="relative mr-2">
            <Text className="font-bold pl-2 text-right right-1">{title}</Text>
            <Text className="text-2xl font-bold absolute bottom-0 right-1">{value}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default InfoTab