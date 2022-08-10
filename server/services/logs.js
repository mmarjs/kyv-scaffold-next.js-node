const Log = require("../entities/log");

const LogService = {};

LogService.newLog = (event) => {
  return new Promise((resolve, reject) => {
    // Client.findOne(searchParams, { ...fields, __v: 0 })
    //   .then((clientDetails) => {
    //     return resolve(clientDetails);
    //   })
    //   .catch((err) => {
    //     console.log("ERROR", err);
    //     reject({ err: err.message, success: false });
    //   });

    Log.create({event}, (err, newLogResponse) => {
      console.log(newLogResponse)
      resolve(newLogResponse._id)
    })
  });
};

module.exports = LogService;