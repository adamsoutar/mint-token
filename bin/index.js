const fs = require('fs')
const jwt = require('jsonwebtoken')

// eval is spooky, but you're on your own command line
// you might as well just type rm -rf --no-preserve-root /

// eslint-disable-next-line
const claims = eval(`(${process.argv[2]})`)
const privateKey = fs.readFileSync(process.argv[3])

console.log(jwt.sign(claims, privateKey))
