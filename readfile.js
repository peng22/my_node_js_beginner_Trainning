const fs=require('fs')
const text=fs.readFileSync('./ask.js','UTF-8')
// console.log(text);
fs.readFile('./ask.js','UTF-8',(err,text)=>{
  console.log(text);
})
