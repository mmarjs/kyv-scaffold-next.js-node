const mongoose = require('mongoose')
const { Resident } = require('../entities/resident')

const express = require('express')
const router = express.Router()

const { createContact } = require('../services/sibemail')

router.post('/ward-resident', async (req, res, next) => {
  console.log(req.body)

  let newResident = {
    ward: req.body.ward,
    toggle1: req.body.toggle1,
    toggle2: req.body.toggle2,
    toggle3: req.body.toggle3,
  }

  if (req.body.email && req.body.email.length > 0) {
    newResident.email = req.body.email

    const tempWard = wards.find((ward) => ward.slug == req.body.ward)
    // const tempIssue = Issues.find((issue) => issue.slug == slug);

    createContact(
      req.body.email,
      req.body.toggle1,
      req.body.toggle2,
      req.body.toggle3,
      tempWard.officialName
    )
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

const wards = [
  {
    officialName: 'Etobicoke North',
    number: 1,
    mapLatLong: '',
    slug: 'etobicoke-north',
    description: '',
  },
  {
    officialName: 'Etobicoke Centre',
    number: 2,
    mapLatLong: '',
    slug: 'etobicoke-centre',
    description: '',
  },
  {
    officialName: 'Etobicoke-Lakeshore',
    number: 3,
    mapLatLong: '',
    slug: 'etobicoke-lakeshore',
    description: '',
  },
  {
    officialName: 'Parkdale-High Park',
    number: 4,
    mapLatLong: '',
    slug: 'parkdale-high-park',
    description: '',
  },
  {
    officialName: 'York South-Weston',
    number: 5,
    mapLatLong: '',
    slug: 'york-south-weston',
    description: '',
  },
  {
    officialName: 'York Centre',
    number: 6,
    mapLatLong: '',
    slug: 'york-centre',
    description: '',
  },
  {
    officialName: 'Humber River-Black Creek',
    number: 7,
    mapLatLong: '',
    slug: 'humber-river-black-creek',
    description: '',
  },
  {
    officialName: 'Eglinton-Lawrence',
    number: 8,
    mapLatLong: '',
    slug: 'eglinton-lawrence',
    description: '',
  },
  {
    officialName: 'Davenport',
    number: 9,
    mapLatLong: '',
    slug: 'davenport',
    description: '',
  },
  {
    officialName: 'Spadina-Fort York',
    number: 10,
    mapLatLong: '',
    slug: 'spadina-fort-york',
    description: '',
  },
  {
    officialName: 'University-Rosedale',
    number: 11,
    mapLatLong: '',
    slug: 'university-rosedale',
    description: '',
  },
  {
    officialName: "Toronto-St. Paul's",
    number: 12,
    mapLatLong: '',
    slug: 'toronto-st-pauls',
    description: '',
  },
  {
    officialName: 'Toronto Centre',
    number: 13,
    mapLatLong: '',
    slug: 'toronto-centre',
    description: '',
  },
  {
    officialName: 'Toronto-Danforth',
    number: 14,
    mapLatLong: '',
    slug: 'toronto-danforth',
    description: '',
  },
  {
    officialName: 'Don Valley West',
    number: 15,
    mapLatLong: '',
    slug: 'don-valley-west',
    description: '',
  },
  {
    officialName: 'Don Valley East',
    number: 16,
    mapLatLong: '',
    slug: 'don-valley-east',
    description: '',
  },
  {
    officialName: 'Don Valley North',
    number: 17,
    mapLatLong: '',
    slug: 'don-valley-north',
    description: '',
  },
  {
    officialName: 'Willowdale',
    number: 18,
    mapLatLong: '',
    slug: 'willowdale',
    description: '',
  },
  {
    officialName: 'Beaches-East York',
    number: 19,
    mapLatLong: '',
    slug: 'beaches-east-york',
    description: '',
  },
  {
    officialName: 'Scarborough Southwest',
    number: 20,
    mapLatLong: '',
    slug: 'scarborough-southwest',
    description: '',
  },
  {
    officialName: 'Scarborough Centre',
    number: 21,
    mapLatLong: '',
    slug: 'scarborough-centre',
    description: '',
  },
  {
    officialName: 'Scarborough-Agincourt',
    number: 22,
    mapLatLong: '',
    slug: 'scarborough-agincourt',
    description: '',
  },
  {
    officialName: 'Scarborough North',
    number: 23,
    mapLatLong: '',
    slug: 'scarborough-north',
    description: '',
  },
  {
    officialName: 'Scarborough-Guildwood',
    number: 24,
    mapLatLong: '',
    slug: 'scarborough-guildwood',
    description: '',
  },
  {
    officialName: 'Scarborough-Rouge Park',
    number: 25,
    mapLatLong: '',
    slug: 'scarborough-rouge-park',
    description: '',
  },
  {
    officialName: 'Mayoral Candidate',
    number: 0,
    mapLatLong: '',
    slug: 'toronto-mayor',
    description: '',
  },
]
