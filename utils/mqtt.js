import mqtt from "precompiled-mqtt";
import { key, username } from "./secret";

const brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`
const options = {
    port: 443
}
const feedketList = ["button1", "button2", "sensor1", "sensor2", "sensor3", "sensor4", "ai"]
console.log(brokerUrl)
console.log(key)
const client = mqtt.connect(brokerUrl,options);
client.on('connect', () => {
    console.log("Connected to Adafruit!")
});
client.on('disconnect', () => {
    console.log("Disconnected to Adafruit!")
});

feedketList.forEach((key) => {
    client.subscribe(`${username}/feeds/${key}`);
})


client.on("message", (topic, message, _) => {
    console.log("Message from", topic, "with content", + message);
})

export default client;