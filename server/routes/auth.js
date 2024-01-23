const mongoose = require('mongoose')
// const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const _ = require('lodash')
const nodemailer = require('nodemailer') // const Joi = require("joi");
const tokenauth = require('../../middleware/tokenauth')

const {
  User,
  validateUserCreate,
  validateUserLogin,
  validateUserEmail,
  validateUserPassword,
} = require('../entities/user')
const { Candidate } = require('../entities/candidate')

const express = require('express')
const router = express.Router()

router.get('/server-live', async (req, res, next) => {
  return res.send('Server is live.')
})

// Register a new user w/ an admin password
router.post('/register', async (req, res, next) => {
  const { error } = validateUserCreate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  if (req.body.admin_password !== process.env.ADMINPASSWORD) {
    return res.status(400).send('You are not authorized for this action.')
  }

  let user = await User.findOne({
    email: req.body.email ? req.body.email.toLowerCase() : '',
  })
  if (user) return res.status(400).send('User already registered.')

  user = new User({
    email: req.body.email,
    password: req.body.password,
    roles: req.body.roles ? req.body.roles : ['User'],
  })

  //hash the password
  const salt = await bcrypt.genSalt(11)
  user.password = await bcrypt.hash(user.password, salt)

  await user.save()
  user = await User.findOne({
    email: { $regex: new RegExp('^' + req.body.email.toLowerCase(), 'i') },
  })

  const accessToken = user.generateAuthToken()
  const refreshToken = user.generateAuthRefreshToken()

  //auth token and refresh token
  res
    .header('x-auth-token', accessToken)
    .header('x-auth-refresh-token', refreshToken)
    .header('access-control-expose-headers', 'x-auth-token')
    .header('access-control-expose-headers', 'x-auth-refresh-token')
    .send({
      ..._.pick(user, ['_id', 'email', 'roles', 'hidetranscript']),
      accessToken,
      refreshToken,
    })
})

router.post('/login', async (req, res) => {
  try {
    console.log(req.body)

    const { error } = validateUserLogin(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({
      email: {
        $regex: new RegExp('^' + req.body.email.toLowerCase(), 'i'),
      },
    })

    if (!user) return res.status(400).send('Invalid email or password.')

    const isvalid = await bcrypt.compare(req.body.password, user.password)
    if (!isvalid) return res.status(400).send('Invalid email or password.')

    const token = user.generateAuthToken()
    const refreshtoken = user.generateAuthRefreshToken()

    res
      .header('x-auth-token', token)
      .header('x-auth-refresh-token', refreshtoken)
      .header('access-control-expose-headers', [
        'x-auth-token',
        'x-auth-refresh-token',
      ])
      .send({
        ..._.pick(user, ['_id', 'firstname', 'lastname', 'email', 'roles']),
        accessToken: token,
        refreshToken: refreshtoken,
      })
  } catch (ex) {
    throw ex
  }
})

router.post('/new-candidate-user', tokenauth, async (req, res) => {
  // Check if the user gave us all three: candidate slug, email address & password
  const { slug, email, password } = req.body
  if (slug.length > 0 && email.length > 0 && password.length > 0) {
    let adminUser = req.user || {}
    // Check if the user is type "Admin" i.e. is a Candidate
    if (adminUser.roles && adminUser.roles[0] == 'Admin') {
      // Now we need to find the candidate from the candidate-slug
      let candidateForNewUser = await Candidate.find({ slug: req.body.slug })
      if (candidateForNewUser.length > 0) {
        // Now we need to create a new user
        // let newUserObj = {
        //   email: email.toLowerCase(),
        //   roles: ['User'],
        //   candidate: slug,
        //   fullname: candidateForNewUser[0].fullname,
        //   wardReadable: getOfficialWardName(candidateForNewUser[0].ward),
        // }
        // //hash the password
        // const salt = await bcrypt.genSalt(11)
        // newUserObj.password = await bcrypt.hash(user.password, salt)

        // // await user.save()
        // let newUser = await User.create(newUserObj)

        let user = await User.findOne({
          email: req.body.email ? req.body.email.toLowerCase() : '',
        })
        if (user) return res.status(400).send('User already registered.')

        user = new User({
          email: email,
          password: password,
          roles: ['User'],
          candidate: slug,
          fullname: candidateForNewUser[0].fullname,
          wardReadable: getOfficialWardName(candidateForNewUser[0].ward),
        })

        //hash the password
        const salt = await bcrypt.genSalt(11)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        res.send({ success: true, userUserId: user._id })
      } else {
        res.send('No relevent candidate found for the slug provided.')
      }
    } else {
      res.send('Not a valid user.')
    }
  } else {
    res.send(
      'Please provide a candidate slug. And an email address and password for the new user.'
    )
  }
})

router.get('/generate-users-and-signup-links', tokenauth, async (req, res) => {
  // We'll get a list of all candidates w/ email address
  let candidatesWithEmail = await Candidate.find({
    publicEmail: { $exists: true, $ne: '' },
  })

  // We need to create a user account for each of these
  for (var i = 0; i < candidatesWithEmail.length; i++) {
    let newCandiUser = await User.create({
      email: candidatesWithEmail[i].publicEmail,
      password: '$2b$11$8xrRjGZsEk3K.uAIlmynku5Gi9RTQkZnC0kDf4IQgh6gJ2WqDPFUm',
      roles: ['User'],
      candidate: candidatesWithEmail[i].slug,
    })

    let resetToken = newCandiUser.generatePasswordResetToken()
    console.log(resetToken)
    newCandiUser.passwordResetToken = resetToken
    newCandiUser.generatedInitialSignupToken = true
    newCandiUser.fullname = candidatesWithEmail[i].fullname
    newCandiUser.wardReadable = getOfficialWardName(candidatesWithEmail[i].ward)
    await newCandiUser.save()
  }
  res.send({ len: candidatesWithEmail.length })
})

router.put('/reset-password-request', async (req, res) => {
  const userEmail = req.body.email

  /**
   * Validate user email
   */
  const { error } = validateUserEmail(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({
    email: userEmail ? userEmail.toLowerCase() : '',
  })

  if (!user) return res.status(400).send('Invalid email address.')

  /**
   * Generate token & update the user with the reset token
   */
  const resetToken = user.generatePasswordResetToken()
  user.passwordResetToken = resetToken
  await user.save()

  /**
   * Send email
   */
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.error(error)
        return res.status(500).send('Server Error.')
      }
      resolve(success)
    })
  })

  const resetPasswordLink =
    (process.env.PROJECT_ENV === 'dev'
      ? 'http://localhost:3001'
      : 'https://knowyourvote-candidates.com') +
    `/user/reset-password?tkn=${resetToken}`
  const message = `Click on this link to reset your password: ${resetPasswordLink}`

  const mailData = {
    from: {
      name: `Know Your Vote TO 2022`,
      address: 'candidate@knowyourvote.to',
    },
    to: userEmail,
    subject: 'Know Your Vote TO 2022 - Reset your password',
    text: message,
    html: message,
  }

  //send the mail
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.error(error)
        return res.status(500).send('Server Error.')
      }
      resolve(info)
    })
  })
  console.log('email sent successfully')
  res.status(200).send('Password reset email successfully sent.')
})

router.put('/reset-password', async (req, res) => {
  const { tkn } = req.query
  //validate the password
  const { error } = validateUserPassword(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //find a user with the reset token in the query
  let user = await User.findOne({
    passwordResetToken: tkn,
  })
  if (!user) return res.status(400).send('Reset link invalid.')

  const { password } = req.body

  //hash the password
  const salt = await bcrypt.genSalt(11)
  user.password = await bcrypt.hash(password, salt)
  user.passwordResetToken = undefined
  await user.save()

  res.status(200).send('Password reset!')
})

module.exports = router

const getOfficialWardName = (slug) => {
  const tempWard = wards.find((ward) => ward.slug == slug)
  return tempWard?.officialName
}

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
    officialName: 'Mayor',
    number: 0,
    mapLatLong: '',
    slug: 'toronto-mayor',
    description: '',
  },
]
