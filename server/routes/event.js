const mongoose = require('mongoose')
const { Event } = require('../entities/event')

const tokenauth = require('../../middleware/tokenauth')

const express = require('express')
const router = express.Router()

// Create a new event
router.post('/', tokenauth, async (req, res, next) => {
  console.log(req.body)
  let tempEventBody = req.body
  tempEventBody.slug = req.body.name
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/—/g, '-')
    .replace(/'/g, '')
    .replace(/\./g, '')

  Event.create(tempEventBody, (err, newEventResponse) => {
    console.log(newEventResponse)
    res.send(newEventResponse._id)
  })
})

// Get all events
router.get('/', async (req, res, next) => {
  let events = await Event.find()
  res.send(events)
})

module.exports = router
