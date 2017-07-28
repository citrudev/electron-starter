
var Nightmare = require('nightmare')
var nightmare = new Nightmare({show: true})
nightmare
.goto('https://google.com')
.end()
.then(function () {
  console.log('hello world')
})
