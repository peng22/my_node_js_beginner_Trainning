const path=require('path')
// to get the path of folder
my_new_path=path.join(__dirname,'first','second')


const util =require('util')
// we also could use destructure to get just one function like
const { log } =require('util')
log('j')
util.log(path.basename(__filename))

const v8=require('v8')
util.log(v8.getHeapStatistics())
