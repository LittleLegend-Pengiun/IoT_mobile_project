import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getLedInit, getLedValue, updateLed } from '../redux/ledSlice'

function Switches() {
  const hasData = useSelector(getLedInit);
  const value = useSelector(getLedValue);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Switches {value}</Text>
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