var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.43.32')

client.on('connect', function () {

client.subscribe('hello/+/#')
client.subscribe('client/dead')
})


client.on('message', function (topic, message) {
  // message is Buffer

  console.log(message.toString())

//  client.end()
})

