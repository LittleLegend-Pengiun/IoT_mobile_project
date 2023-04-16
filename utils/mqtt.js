import mqtt from "precompiled-mqtt";
import { key } from "./secret";

const username = "hoanganhle"

const brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`
const options = {
    port: 443
}
console.log(brokerUrl)
console.log(key)
const client = mqtt.connect(brokerUrl,options);
client.on('connect', () => {
    console.log("Connected to Adafruit!")
});
client.on('disconnect', () => {
    console.log("Disconnected to Adafruit!")
})

client.on('message', (topic, message, packet) => {
    console.log("Received '" + message + "' on '" + topic + "'");
});

client.subscribe('hoanganhle/feeds/bbc-led');

export default client;