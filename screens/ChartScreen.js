import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import CalendarTab from '../components/CalendarTab';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AreaChart from '../components/AreaChart';
import { useSelector } from 'react-redux'
import { getTempInit, getTempValue } from '../redux/tempSlice'
import { getHumidInit, getHumidValue } from '../redux/humidSlice'
import { getMoistureInit, getMoistureValue } from '../redux/moistureSlice'
import { getLightInit, getLightValue } from '../redux/lightSlice'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InfoTabLite from '../components/InfoTabLite';
import { getChartId } from '../redux/chosenChartSlice';
import Modal from 'react-native-modal';


const chartTitle = {
  temp: "Temperature",
  humid: "Humidity present",
  moisture: "Moisture present",
  light: "Light present",
}

const ChartScreen = () => {
  const tempValue = useSelector(getTempValue);
  const tempInit = useSelector(getTempInit);
  const humidValue = useSelector(getHumidValue);
  const humidInit = useSelector(getHumidInit);
  const moistureValue = useSelector(getMoistureValue);
  const moistureInit = useSelector(getMoistureInit);
  const lightValue = useSelector(getLightValue);
  const lightInit = useSelector(getLightInit);
  const chosenTab = useSelector(getChartId);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex-row mx-2 px-2">
        <CalendarTab 
         id="start"
         title="Start Date"
         iconName="calendar-o"
         IconComponent={FontAwesome}
         value="25-03-2023"
         toggleModal={toggleModal}
        />
        <CalendarTab 
         id="end"
         title="End Date"
         iconName="calendar"
         IconComponent={FontAwesome}
         value="25-03-2023"
         toggleModal={toggleModal}
        />
      </View>
      <View className="flex-row mx-2 px-1">

      <View className="flex-row m-1 mr-0.5 pl-0.5 pr-4 py-1 w-1/2">
        <InfoTabLite 
         id="temp"
         value={tempInit? tempValue[tempValue.length-1][1] + '℃': "--/--"}
         iconName="temperature-low"
         IconComponent={FontAwesome5}
        />
        <InfoTabLite 
         id="humid"
         iconName="ios-water-sharp"
         IconComponent={Ionicons}
         value={humidInit? humidValue[humidValue.length-1][1] + "%": "--/--"}
        />
      </View>
      <View className="flex-row m-1 ml-0.5 pr-4 py-1 w-1/2">
        <InfoTabLite 
          id="moisture"
          iconName="water"
          IconComponent={Entypo}
          value={moistureInit? moistureValue[moistureValue.length-1][1]+"%": "--/--"}
        />
        <InfoTabLite 
          id="light"
          iconName="sunny-sharp"
          IconComponent={Ionicons}
          value={lightInit? lightValue[lightValue.length-1][1] + "%": "--/--"}
        />
      </View>
      </View>

      {/* Chart */}
      <View className="pt-2 pb-2">
        <Text 
        className="font-bold text-lg text-center">
          {chartTitle[chosenTab]} chart
        </Text>
        <AreaChart xMin={1} xMax={5} yMin={0} yMax={40} />
      </View>

      {/*popup modal*/}
      <Modal isVisible={isModalVisible}
       onBackButtonPress={() => toggleModal()}
       onBackdropPress={() => setModalVisible(false)}
      >
        <View className="flex-1 align-middle justify-center items-center">
          <View className="items-center justify-center align-middle h-36 w-3/4 bg-white rounded-lg">
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
        </View>
        </View>
      </Modal>
    </View>
  )
}

export default ChartScreen