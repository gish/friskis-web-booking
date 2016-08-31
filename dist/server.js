import bodyParser from 'bodyparser';
import express from 'express';
import path from 'path';
import babelify from 'express-babelify-middleware';
import sassMiddleware from 'node-sass-middleware';
const app = express();
const port = process.env.PORT || 8080;
const isProduction = process.env.NODE_ENV === 'production';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public/js/index.dist.js', babelify('public/js/index.js', [], { presets: ['es2015', 'react', 'stage-0'] }));

app.use(sassMiddleware({
  src: path.join(__dirname, '/public'),
  dest: path.join(__dirname, '/public'),
  debug: !isProduction,
  outputStyle: isProduction ? 'compressed' : 'extended'
}));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${ port }`);
});