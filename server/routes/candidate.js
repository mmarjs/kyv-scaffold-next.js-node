const mongoose = require('mongoose')
const { Candidate } = require('../entities/candidate')

const tokenauth = require('../../middleware/tokenauth')

const express = require('express')
const router = express.Router()

// Create a new candidate
router.post('/', async (req, res, next) => {
  console.log(req.body)
  let tempCandidateBody = req.body
  tempCandidateBody.slug = req.body.fullname
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/—/g, '-')
    .replace(/'/g, '')
    .replace(/\./g, '')

  Candidate.create(tempCandidateBody, (err, newCandidateResponse) => {
    console.log(newCandidateResponse)
    res.send(newCandidateResponse._id)
  })
})

// Get all candidates
router.get('/', async (req, res, next) => {
  let candidates = await Candidate.find()
  let shuffledArray = shuffleArray(candidates)
  res.send(shuffledArray)
})

// Get all candidates by ward
router.get('/by-ward/:slug', async (req, res, next) => {
  const { slug } = req.params
  let candidates = await Candidate.find({ ward: slug || '' })
  let shuffledArray = shuffleArray(candidates)
  res.send(shuffledArray)
})

// Get all mayoral candidates
router.get('/mayoral', async (req, res, next) => {
  let candidates = await Candidate.find({ ward: 'toronto-mayor' })
  let shuffledArray = shuffleArray(candidates)
  res.send(shuffledArray)
})

module.exports = router

// const shuffleArray = (array) => {
//   const tempArray = array.sort((a, b) => 0.5 - Math.random())
//   return tempArray
// }

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}
