var express = require('express')
var app = express()
var routes = require('./routes')
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

// Routes
app.get('/', routes.home)
app.get('/star_wars_episode/:episode_number?', routes.movie_single)
app.get('*', routes.notFound)

// listen to port
app.listen(3000, function(){
	console.log('App is running on 3000...');
})
