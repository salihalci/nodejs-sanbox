
//execute command: node argsexample test
//first 2 args are predefined, you can capture from 3. argumant 
//the output is 
// test
console.log(process.argv)
console.log(process.argv[2])
console.log("If else is starting.")
const command = process.argv[2]

if(command==='Execute'){
    console.log("Executed")
}else{
    console.log("Not executed.")
}