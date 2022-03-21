import express from 'express'
const router = express.Router()
import MoviesController from '../Controller/movieCtrl.js'

router.get('/',MoviesController.apiGetMovies)

export default router