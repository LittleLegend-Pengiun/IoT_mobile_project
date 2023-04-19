import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getLedInit, getLedValue, updateLed } from '../redux/ledSlice'
import { getPumpValue } from '../redux/pumpSlice'
import { getTempInit, getTempValue } from '../redux/tempSlice'

function Switches() {
  const hasData = useSelector(getLedInit);
  const value = useSelector(getLedValue);
  const hasTemp = useSelector(getTempInit);
  const temp = useSelector(getTempValue);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Switches {hasData? value: "loading"}</Text>
      <Text>Temp {hasTemp? temp[temp.length-1][1]: "loading"}</Text>
      <Button
        title='Change value'
        onPress={() => {
          if (!hasData) dispatch(updateLed("0"))
          else if (value == '0') dispatch(updateLed("1"));
          else dispatch(updateLed("0"))
        }} 
      />
    </View>
  )
}

export default Switches