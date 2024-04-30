const router = require('express').Router();
const {getHotelByNames}=require('../controller/search')

router.get('/hotels/:location', getHotelByNames);
// router.post('/',addHotel)
// router.get('/hotels/:startDate/:endDate', getHotelWithAvailableRooms);
module.exports = router