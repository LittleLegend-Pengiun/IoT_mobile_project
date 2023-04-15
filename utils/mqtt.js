import mqtt from "precompiled-mqtt";

const username = "hoanganhle"
const key = "aio_blxW26KUc7lSAn86jJT79G1XM5zf"
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