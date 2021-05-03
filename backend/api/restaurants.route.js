import express from 'express'
import RestaurantsCtrl from './restaurants.controller.js'
import ReviewsCtrl from './reviews.controller.js'

const router = express.Router()

router.get('/',RestaurantsCtrl.apiGetRestaurants)

router.post('/review', ReviewsCtrl.apiPostReview)
router.put('/review', ReviewsCtrl.apiUpdateReview)
router.delete('/review', ReviewsCtrl.apiDeleteReview)

export default router