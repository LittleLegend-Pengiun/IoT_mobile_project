import React from 'react';
import { Text, View } from 'react-native';

import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

function AreaChart({ xMin, xMax, yMin, yMax, chartData }) {

  return (
    <View className="bg-inherit w-96 mx-3">
      <Chart
        className="h-72 w-11/12 p-2 mx-3"
        data={chartData}
        padding={{ left: 30, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: xMin, max: xMax }}
        yDomain={{ min: yMin, max: yMax }}
      >
        <VerticalAxis tickCount={5} 
         theme={{
           labels: { visible: true}
         }}/>
        <HorizontalAxis tickCount={5} theme={{
           labels: { visible: false}
         }}/>
        <Area theme={{ gradient: { from: { color: '#2dd4bf' }, to: { color: '#2dd4bf', opacity: 0.4 } }}} />
        <Line theme={{ stroke: { color: '#0f766e', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
      </Chart>
    </View>

  );
}

export default AreaChart;