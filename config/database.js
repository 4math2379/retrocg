 var mongoose = require('mongoose')
 /*require mongoose pour le lié au project*/

function connect(connectionString) {
  mongoose.connect(connectionString)

  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error'))
  db.once('open', function callbck() {
    console.log('Mongoose connected at: ', connectionString)
  })
}

module.exports = connect
