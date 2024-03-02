const express = require('express');
const cors = require('cors');

const app = express();
app.disable('x-powered-by')

app.use(cors());
app.use(express.json())
// app.use((req, res, next) => {
//   //Middleware
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })


app.get('/', (req, res) => {
  res.json({
    sucess: true,
    message: 'Timelezz Up!'
  })
});

app.post('/task', (req, res) => {
  res.status(201).json({
    sucess: true,
    message: req.body
  })
})

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: 'Unable to find service'
  })
})

app.listen(3000, () => {
  console.log(`${'listening for requests on port 3000'}`);
});
