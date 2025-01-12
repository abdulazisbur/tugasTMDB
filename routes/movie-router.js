
const express = require('express')
const movieController = require('../controllers/movie-controller')

const router = express.Router()

router.get('/api/movie', movieController.searchMovie)
router.get('/api/movie/popular', movieController.getPopularMovies) 

module.exports = router
