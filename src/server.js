import babelify from 'express-babelify-middleware'
import bodyParser from 'body-parser'
import express from 'express'
import friskisJsApiWrapper from 'friskis-js-api-wrapper'
import path from 'path'
import sassMiddleware from 'node-sass-middleware'
const app = express()
const port = process.env.PORT || 8080
const isProduction = process.env.NODE_ENV === 'production'
const publicDir = path.join(__dirname, '/public')
const FRISKIS_API_KEY = process.env.FRISKIS_API_KEY

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (!isProduction) {
  app.use('/js/index.dist.js', babelify('src/public/js/index.js', [], { presets: ['es2015', 'react', 'stage-0'] }))
  app.use(sassMiddleware({
    src: path.join(publicDir),
    dest: path.join(publicDir),
    debug: !isProduction,
    outputStyle: isProduction ? 'compressed' : 'extended'
  }))
}

app.use(express.static(publicDir))

app.get('/api/v0/friskis/activities', (req, res) => {
  const username = req.query.username
  const password = req.query.password
  const apiKey = FRISKIS_API_KEY

  const fsApiHandler = friskisJsApiWrapper({
    apikey: apiKey,
    username: username,
    password: password
  })

  fsApiHandler.getActivities({
    businessunitids: '1'
  })
  .then((activities) => {
    res.status(200)
    res.send(activities)
  })
  .catch((error) => {
    console.log(error)
    res.status(500)
    res.send(error)
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
