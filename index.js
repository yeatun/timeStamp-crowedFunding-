const schedule = require('node-schedule');
const express = require('express');
const { request } = require('express');
const app = express()
const port = process.env.Port || 4000;
app.use(express.json())

app.post('/test', (req, res) => {
  const id = req.body.id
  const timestamp = req.body.timestamp
  res.send(`Your  ${id} and ${timestamp} has been posted`)
  

 
  

});
app.get('/test', async (req, res) => {
  const timestamp = req.body.timestamp;
  const id = req.body.id;
  // const time = await unixConverter(timestamp);
  // console.log(time);
  const timeString = new Date(timestamp);
  const timeStringISO = new Date(timestamp*1000);
  console.log(timeStringISO);

  schedule.scheduleJob(timeStringISO, function(){
    res.send(`Your id is : ${id} and time is ${timeStringISO}`);
    console.log(`Your id is : ${id} and time is ${timeStringISO}`);
    

  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



async function  unixConverter(timestamp) {

  var a = new Date(timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  
  // return time;
}
