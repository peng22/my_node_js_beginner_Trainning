const fs =require('fs')

const newText='New Text'

fs.appendFile('./mywritten.txt',newText, err =>{
  if (err){
    throw err
  }
})
