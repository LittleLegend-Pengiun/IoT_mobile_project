import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getChartId, choseChart } from '../redux/chosenChartSlice'

function InfoTabLite({id, value, IconComponent, iconName}) {
    const chosenTab = useSelector(getChartId);
    const boxStyling = chosenTab == id? "bg-green-200 border border-green-400": "bg-gray-200"
    const dispatch = useDispatch();
  return (
    <TouchableOpacity className={`w-1/2 h-14 ${boxStyling} rounded px-1 mx-1`}
    onPress={() => dispatch(choseChart(id))}
    >
        <IconComponent name={iconName} size={22} className="py-0.5 pl-1 pt-1 mt-1"/>
        <Text className="font-bold text-sm pb-1 mb-1 text-right">{value}</Text>
    </TouchableOpacity>
  )
}

export default InfoTabLite