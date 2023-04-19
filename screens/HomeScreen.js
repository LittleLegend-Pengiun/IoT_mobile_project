import { View, Text, Switch } from 'react-native'
import React from 'react'
import InfoTab from '../components/InfoTab'
import { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useSelector } from 'react-redux'
import { getTempInit, getTempValue } from '../redux/tempSlice'
import { getHumidInit, getHumidValue } from '../redux/humidSlice'
import { getMoistureInit, getMoistureValue } from '../redux/moistureSlice'
import { getLightInit, getLightValue } from '../redux/lightSlice'
import ControlSwitch from '../components/ControlSwitch'
import { getLedInit, getLedValue } from '../redux/ledSlice'
import { getPumpInit, getPumpValue } from '../redux/pumpSlice'
import AIStatus from '../components/AIStatus'
import { getTreeInit, getTreeValue } from '../redux/treeSlice'

const HomeScreen = () => {
  const [tabID, setTabID] = useState("temp");
  const tempValue = useSelector(getTempValue);
  const tempInit = useSelector(getTempInit);
  const humidValue = useSelector(getHumidValue);
  const humidInit = useSelector(getHumidInit);
  const moistureValue = useSelector(getMoistureValue);
  const moistureInit = useSelector(getMoistureInit);
  const lightValue = useSelector(getLightValue);
  const lightInit = useSelector(getLightInit);
  const ledInit = useSelector(getLedInit);
  const ledValue = useSelector(getLedValue);
  const pumpInit = useSelector(getPumpInit);
  const pumpValue = useSelector(getPumpValue);
  const treeInit = useSelector(getTreeInit);
  const treeValue = useSelector(getTreeValue);
  
  return (
    <View className="flex-1 items-center justify-center bg-white mb-1">
      <View className="pt-2 bg-white w-full items-center">
        <View className="flex-row">
          <InfoTab 
            id="temp"
            title="Temperature"
            chosenTab={tabID}
            switchCb={setTabID}
            iconName="temperature-low"
            IconComponent={FontAwesome5}
            value={tempInit? tempValue[tempValue.length-1][1] + '℃': "--/--"}
          />
          <InfoTab 
            id="humid"
            title="Humi present"
            chosenTab={tabID}
            switchCb={setTabID}
            iconName="ios-water-sharp"
            IconComponent={Ionicons}
            value={humidInit? humidValue[humidValue.length-1][1] + "%": "--/--"}
          />
        </View>

        <View className="flex-row pb-4">
          <InfoTab 
            id="moisture"
            title="Soil moisture"
            chosenTab={tabID}
            switchCb={setTabID}
            iconName="water"
            IconComponent={Entypo}
            value={moistureInit? moistureValue[moistureValue.length-1][1]+"%": "--/--"}
          />
          <InfoTab 
            id="light"
            title="Light present"
            chosenTab={tabID}
            switchCb={setTabID}
            iconName="sunny-sharp"
            IconComponent={Ionicons}
            value={lightInit? lightValue[lightValue.length-1][1] + "%": "--/--"}
          />
        </View>
      </View>

      {/*AI Status*/}
      <AIStatus 
       id="ai"
       title="Leaf status"
       value={treeInit? treeValue: "--/--"}
       IconComponent={MaterialCommunityIcons}
       iconOn="pine-tree"
       iconOff="pine-tree-fire"
      />

      {/* Switches */}
      <View className="w-full bg-white">
        <ControlSwitch 
         id="button1"
         title="Led status"
         value={ledValue}
         disable={!ledInit}
         IconComponent={MaterialCommunityIcons}
         iconOn="led-variant-on"
         iconOff="led-variant-off"
        />

        <ControlSwitch 
         id="button2"
         title="Pump status"
         value={pumpValue}
         disable={!pumpInit}
         IconComponent={MaterialCommunityIcons}
         iconOn="water-pump"
         iconOff="water-pump-off"
        />
      </View>
    </View>
  )
}

export default HomeScreen