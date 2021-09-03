const fs =require('fs')
// to deal with operating system
const list= fs.readdirSync('../my_node_js')
// console.log(list);

// also we can read it asyncrounusly
fs.readdir('../my_node_js',(err,files)=>{
  if (err){
    throw err
  }
  console.log(files);
})
