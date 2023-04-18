import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLed } from '../redux/ledSlice';
import { updatePump } from '../redux/pumpSlice';
import { updateTemp } from '../redux/tempSlice';
import { updateMoisture } from '../redux/moistureSlice';
import { updateHumid } from '../redux/humidSlice';
import { updateLight } from '../redux/lightSlice';
import { updateTree } from '../redux/treeSlice';
import { fetchData } from '../utils/helper';
import { username } from '../utils/secret';
import axios from 'axios';


const InitComp = () => {
  const dispatch = useDispatch(); 
  
  async function getData(topic, dpCallback) {
    return;
    
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
        getData(`${username}/feeds/button1`, updateLed);
    
        // PUMP
        getData(`${username}/feeds/button2`, updatePump);
    
        // Temp
        getDataChart(`${username}/feeds/sensor1`, updateTemp);
    
        // Humid
        getDataChart(`${username}/feeds/sensor2`, updateHumid);

        // Moisture
        getDataChart(`${username}/feeds/sensor3`, updateMoisture);

        // Light
        getDataChart(`${username}/feeds/sensor4`, updateLight);

        // AI
        getData(`${username}/feeds/ai`, updateTree);
    } catch (err) {
        console.error(err);
    }

  }, []);
  

  return (
    <></>
  );
};

export default InitComp;