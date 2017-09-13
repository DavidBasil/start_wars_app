var moviesJSON = require('../movies.json')

exports.home = function(req, res){
	var movies = moviesJSON.movies
	res.render('home', {
		title: 'Star wars movies',
		movies: movies
	})
}

// single movie
exports.movie_single = function(req, res){
	var episode_number = req.params.episode_number
	res.send('This is the page for episode ' + episode_number)
}

// 404 not found
exports.notFound =  function(req, res){
	res.send('404 Oops')
}

