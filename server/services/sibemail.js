const SibApiV3Sdk = require('sib-api-v3-sdk')

const defaultClient = SibApiV3Sdk.ApiClient.instance
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUEKEY

const apiInstanceContacts = new SibApiV3Sdk.ContactsApi()
let createContact = new SibApiV3Sdk.CreateContact()

exports.createContact = (email, toggle1, toggle2, toggle3, residentward) => {
  return new Promise((resolve, reject) => {
    createContact.email = email
    createContact.attributes = {
      toggle1: toggle1,
      toggle2: toggle2,
      toggle3: toggle3,
      residentward,
    }
    // createContact.toggle1 = toggle1.toString()
    // createContact.toggle2 = toggle2.toString()
    // createContact.toggle3 = toggle3.toString()
    let listNumber = parseInt(process.env.NEXT_PUBLIC_SIB_LIST)
    createContact.listIds = [listNumber]

    apiInstanceContacts.createContact(createContact).then(
      (data) => {
        console.log(data)
        resolve(data)
      },
      (error) => {
        console.log(error)
        reject(error)
      }
    )
  })
}
