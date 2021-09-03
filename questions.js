process.stdout.write('hello world \n')
const questions=[
  'what is your name?',
  'what is your job?'
]

const ask =(i=0)=>{
  process.stdout.write(`\n ${questions[i]} \n`)
  process.stdout.write(`\n  > \n`)

}

ask()
const answers=[]
process.stdin.on('data',data=>{
  answers.push(data.toString().trim())
  process.stdout.write(` \n ${data.toString().trim()} \n`)
  if (answers.length<questions.length){
    ask(answers.length)
  }else{
      process.exit()
  }

})

process.on('exit',()=>{
  console.log(answers);
})
