import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initLed } from '../redux/ledSlice';
import { initPump, updatePump } from '../redux/pumpSlice';
import { updateTemp } from '../redux/tempSlice';
import { updateMoisture } from '../redux/moistureSlice';
import { updateHumid } from '../redux/humidSlice';
import { updateLight } from '../redux/lightSlice';
import { initTree, updateTree } from '../redux/treeSlice';
import { fetchData } from '../utils/helper';
import { username } from '../utils/secret';


const InitComp = () => {
  const dispatch = useDispatch(); 
  
  async function getData(topic, dpCallback) {
    const res = await fetchData(`https://io.adafruit.com/api/v2/${topic}/data`)
    if (res == null) throw Error("Network error");
    dispatch(dpCallback(res));
  }

  async function getDataChart(topic, dpCallback) {
    const res = await fetchData(`https://io.adafruit.com/api/v2/${topic}/data/chart`)
    if (res == null) throw Error("Network error");
    const data = res.data;
    dispatch(dpCallback(data));
  }
  
  useEffect(() => {
    try {
        // LED
        getData(`${username}/feeds/button1`, initLed);
    
        // PUMP
        getData(`${username}/feeds/button2`, initPump);
    
        // Temp
        getDataChart(`${username}/feeds/sensor1`, updateTemp);
    
        // Humid
        getDataChart(`${username}/feeds/sensor2`, updateHumid);

        // Moisture
        getDataChart(`${username}/feeds/sensor3`, updateMoisture);

        // Light
        getDataChart(`${username}/feeds/sensor4`, updateLight);

        // AI
        getData(`${username}/feeds/ai`, initTree);
    } catch (err) {
        console.error(err);
    }

  }, []);
  

  return (
    <></>
  );
};

export default InitComp;