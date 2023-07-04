const express = require('express')
const router = express.Router()

const { ListAllUsersUseCase } = require('../../usecase.factory')

router.get('/users', function (req, res) {
    res.send(ListAllUsersUseCase().execute(req))
})

module.exports = router