const fs= require('fs')

const readStream= fs.createReadStream('./mywritten.txt','UTF-8')
// console.log(readStream);
readStream.once('data',data=>{
  console.log(data);
})
