// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useInifiedTopology: true})
//   .then(() => console.log('Conectado ao MongoDB'))
//   .catch((err) => console.log(err))
// N funciona MediaSession, ver codigo da documentacao do mongo.

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/todo-list')
  console.log('Conectado ao MongoDB')
}