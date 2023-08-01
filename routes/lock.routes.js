const { Router } = require('express')
const { getLocksData, killLock, getCitas } = require('../controllers/lock.controller')

const router = Router()

router.get('/', getLocksData)

router.get('/prueba', getCitas)

router.post('/:spid', killLock)

module.exports = router