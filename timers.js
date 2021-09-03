const time_finished_fun = ()=>{
  process.stdout.clearLine();
  process.stdout.cursorTo(0)
  console.log(' done');
  clearInterval(interval)
}
const waitTime=5000 //in millisecons
const waitInterval=500
let currentTime=0
const Inc=()=>{
  currentTime+=waitInterval
  let percentage= Math.floor(currentTime/waitTime * 100)
  process.stdout.clearLine();
  process.stdout.cursorTo(0)
  process.stdout.write(`progress ... ${percentage}% `)
}

const interval=setInterval(Inc,waitInterval)
setTimeout(time_finished_fun,waitTime)
