import React, { useEffect } from 'react';
import client from '../utils/mqtt';


const MqttExample = () => {
  
  useEffect(() => {
    client.on("message", (topic, message, _) => {
      
    })
  }, [client]);
  

  return (
    <></>
  );
};

export default MqttExample;