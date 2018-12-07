const net = require('net')
const maxConnectCount = 2000;

for (let i = 0; i < maxConnectCount; i++) {
  let client = net.createConnection({
    port: 8081,
    host: '10.10.1.30'
    // host: '127.0.0.1'
  });

  client.on('data', (data) => {
    console.log(`${data.toString()}`)
  })
}