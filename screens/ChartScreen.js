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
import DateInputForm from '../components/DateInputForm';

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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateFnId, setDateFnId] = useState("start-date");


  const toggleModal = (id) => {
    setModalVisible(!isModalVisible);
    setDateFnId(id);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex-row mx-2 px-2">
        <CalendarTab 
         id="start-date"
         title="Start Date"
         iconName="calendar-o"
         IconComponent={FontAwesome}
         value={startDate}
         toggleModal={() => toggleModal("start-date")}
        />
        <CalendarTab 
         id="end-date"
         title="End Date"
         iconName="calendar"
         IconComponent={FontAwesome}
         value={endDate}
         toggleModal={() => toggleModal("end-date")}
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
        <AreaChart 
         xMin={(new Date('2023-04-11T14:15:27Z')).getTime()} 
         xMax={(new Date('2023-04-17T07:49:24Z')).getTime()} 
         yMin={0} 
         yMax={40}
         chartData={[
          { x: (new Date('2023-04-11T14:15:27Z')).getTime(), y: "31.0" },
          { x: (new Date('2023-04-11T14:15:37Z')).getTime(), y: "31.0" },
          { x: (new Date('2023-04-17T07:49:03Z')).getTime(), y: "31.2" },
          { x: (new Date('2023-04-17T07:49:13Z')).getTime(), y: "31.2" },
          { x: (new Date('2023-04-17T07:49:24Z')).getTime(), y: "31.0" },
        ]} />
      </View>

      {/*popup modal*/}
      {isModalVisible && 
        <DateInputForm 
         toggle={setModalVisible}
         startDate={startDate}
         endDate={endDate}
         setDate={dateFnId == "start-date"? setStartDate :setEndDate}
         mode={dateFnId}
        />
      }
    </View>
  )
}

export default ChartScreen