const mongoose = require('mongoose')
const { Resident } = require('../entities/resident')

const express = require('express')
const router = express.Router()

router.post('/ward-resident', async (req, res, next) => {
  console.log(req.body)

  let newResident = {
    ward: req.body.ward,
  }

  if (req.body.email && req.body.email.length > 0) {
    newResident.email = req.body.email
  }

  Resident.create(newResident, (err, newResidentResponse) => {
    console.log(newResidentResponse)
    res.send(newResidentResponse._id)
  })
})

router.get('/ward-resident/:userId', async (req, res, next) => {
  console.log(req.params)
  let tempResident = await Resident.find({ _id: req.params.userId })
  console.log(tempResident[0])
  res.send(tempResident[0])
})

module.exports = router
