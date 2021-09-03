
console.log(process.pid);
console.log(process.versions.node);
// argv takes the commands that we sendinthe terminal
console.log(process.argv);
// and it is like array so we can use it;
const [,,firstName,lastName]=process.argv
// also we can grab info like

let grab= flag=>{
  let indexplusone= process.argv.indexOf(flag)+1
  return process.argv[indexplusone]
}
const greeting = grab("--greeting")

console.log(`${greeting} ${ firstName} ${lastName } `);
