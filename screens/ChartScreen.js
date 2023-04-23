import { View, Text, Alert } from 'react-native'
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
import { toChartData, transformData } from '../utils/helper';
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  const [isSelected, setSelection] = useState(false);

  const chartInputData = {
    temp: tempValue,
    humid: humidValue,
    moisture: moistureValue,
    light: lightValue,
  }

  const tfData = isSelected? transformData(chartInputData[chosenTab], startDate.getTime(), endDate.getTime()): transformData(chartInputData[chosenTab])
  
  const chartData = toChartData(tfData);

  const toggleModal = (id) => {
    if (!isSelected) {
      Alert.alert("Warning", "Time filter is not applied!")
      return;
    }
    setModalVisible(!isModalVisible);
    setDateFnId(id);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex-row mx-2 px-2 mt-3">
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
         value={tempInit? parseInt(tempValue[tempValue.length-1][1]) + '℃': "--/--"}
         iconName="temperature-low"
         IconComponent={FontAwesome5}
        />
        <InfoTabLite 
         id="humid"
         iconName="ios-water-sharp"
         IconComponent={Ionicons}
         value={humidInit? parseInt(humidValue[humidValue.length-1][1]) + "%": "--/--"}
        />
      </View>
      <View className="flex-row m-1 ml-0.5 pr-4 py-1 w-1/2">
        <InfoTabLite 
          id="moisture"
          iconName="water"
          IconComponent={Entypo}
          value={moistureInit? parseInt(moistureValue[moistureValue.length-1][1])+"%": "--/--"}
        />
        <InfoTabLite 
          id="light"
          iconName="sunny-sharp"
          IconComponent={Ionicons}
          value={lightInit? parseInt(lightValue[lightValue.length-1][1]) + "%": "--/--"}
        />
      </View>
      </View>

      {/* Chart */}
      <View className="pt-2 pb-2 mt-2">
        {chartData.length > 0?
        <>
          <Text 
          className="font-bold text-xl text-center">
            {chartTitle[chosenTab]} chart
          </Text>
          <AreaChart 
          xMin={chartData[0]["x"]} 
          xMax={chartData[chartData.length-1]["x"]} 
          yMin={0} 
          yMax={100}
          chartData={chartData} /> 
        </>
         :
        <View className="w-96 h-80">
          <Text className="text-xl font-bold text-center mt-40">No data found</Text>
        </View>
        }
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

      {/*Checkbox */}
      <TouchableOpacity className="flex-row"
       onPress={() => setSelection(!isSelected)}
      >
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          className="self-center"
          color={isSelected ? 'green' : undefined}
        />
        <Text className="m-2">Apply time filter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChartScreen