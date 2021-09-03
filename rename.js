const fs =require('fs')

fs.rename('./mywritten.txt','./my_new_written.txt',err=>{
  if (err){
    throw err
  }
})

we can also use it to move file by changing path
to remove file
fs.unlinkSync('my_new_written.txt')

// empty dir
fs.rmdir('./storage_file',err=>{
  if (err){
    throw err
  }
})
