import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getTempInit, getTempValue } from '../redux/tempSlice'
import { getHumidInit, getHumidValue } from '../redux/humidSlice';
import { getMoistureInit, getMoistureValue } from '../redux/moistureSlice';
import { getLightInit, getLightValue } from '../redux/lightSlice';

function Speedometers() {
  const isTemp = useSelector(getTempInit),
        temp = useSelector(getTempValue),
        isHumid = useSelector(getHumidInit),
        humid = useSelector(getHumidValue),
        isMoisture = useSelector(getMoistureInit),
        moisture = useSelector(getMoistureValue),
        isLight = useSelector(getLightInit),
        light = useSelector(getLightValue);

  const dispatch = useDispatch();

  async function fetchData (feedkey, selectorfn) {
    
  }
  return (
    <View className="">
    </View>
  )
  
}

export default Speedometers