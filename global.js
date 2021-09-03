// to get the directory
console.log(__dirname)
// to get the name of the file
console.log(__filename)
// also we are able to get the modules using require
const path = require("path")
console.log(` the file name is ${path.basename(__filename)}`)
