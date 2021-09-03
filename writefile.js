const fs =require('fs')

const md="mj k,,,,,,,,,k"
fs.writeFile('./mywritten.txt',md,err=>{
  if (err){
    throw err
  }
  console.log('done');
})

// also we can make directory
if (fs.existsSync('storage_file')){
  console.log('already exists');

}else{
    fs.mkdir('storage_file',err=>{
      if (err){
        throw err
      }
      console.log('done');
    })
}
