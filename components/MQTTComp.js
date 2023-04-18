import React, { useEffect } from 'react';
import client from '../utils/mqtt';
import { useDispatch } from 'react-redux';
import { updateLed } from '../redux/ledSlice';
import { updatePump } from '../redux/pumpSlice';
import { updateTemp } from '../redux/tempSlice';
import { updateMoisture } from '../redux/moistureSlice';
import { updateHumid } from '../redux/humidSlice';
import { updateLight } from '../redux/lightSlice';
import { updateTree } from '../redux/treeSlice';


const MqttComp = () => {
  const dispatch = useDispatch();

  async function updatingData(topic, strVal) {

    // LED
    if (topic.includes("button1")) {
      dispatch(updateLed(strVal))
    } 

    // PUMP
    else if (topic.includes("button2")) {
      dispatch(updatePump(strVal));
      return;
    }

    let chartData;
    try {
      const res = await fetch(`https://io.adafruit.com/api/v2/${topic}/data/chart`)
      const json = await res.json();
      chartData = [...json.data];
    }
    catch (err) {
      console.error(err);
      return;
    }

    // TEMP
    if (topic.includes("sensor1")) {
      dispatch(updateTemp(chartData));
    }

    // HUMIT Present
    else if (topic.includes("sensor2")) {
      dispatch(updateHumid(chartData));
    }

    // MOISTURE soil
    else if (topic.includes("sensor3")) {
      dispatch(updateMoisture(chartData));
    }

    // LIGHT
    else if (topic.includes("sensor4")) {
      dispatch(updateLight(chartData));
    }

    else if (topic.includes("ai")) {
      dispatch(updateTree(strVal));
    }

  }
  
  useEffect(() => {
    client.on("message", (topic, message, _) => {
      console.log("Mqtt Comp message:", topic, "::", message.toString());
      updatingData(topic, message.toString());
    })
  }, [client]);
  

  return (
    <></>
  );
};

export default MqttComp;