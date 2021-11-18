const schedule = require('node-schedule');
const express = require('express');
const { request } = require('express');
const app = express()
const port =  4000;
app.use(express.json())
var givenId;
var givenTimestamp;
app.post('/test', (req, res) => {
  const timestamp = req.body.timestamp;
  const id = req.body.id;
  // const time = await unixConverter(timestamp);
  // console.log(time);
  //const timeString = new Date(timestamp);
  const timeStringISO = new Date(timestamp*1000);
  givenId = id;
  givenTimestamp = timeStringISO;
  console.log(timeStringISO);
  res.send(`Your  ${id} and ${timestamp} has been posted`)
 
 
});
app.get('/test', async (req, res) => {
  console.log(givenTimestamp)
  const timestamp = givenTimestamp;
  const id = givenId;
  schedule.scheduleJob(timestamp, function(){
    console.log(`Your id is : ${id} and time is ${timeStringISO}`);
      res.send(`Your id is : ${id} and time is ${timestamp}`);
 
  });
 
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(process.env.PORT || port)
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })