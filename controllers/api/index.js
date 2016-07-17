var router = require('express').Router()

router.use(require('./spells'))
router.use(require('./locations'))
router.use(require('./monsters'))

module.exports = router
