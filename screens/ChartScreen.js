import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const ChartScreen = () => {
  const [value, setValue] = useState("0");

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Settings Screen</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default ChartScreen