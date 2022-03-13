const fs = require('fs')

const data = fs.readFileSync('student.json','utf-8')
console.log(typeof data);
console.log(data);
const data2 = JSON.parse(fs.readFileSync('student.json','utf-8'))
data2.push({'name':'rifaldi'})
console.log(data2);
fs.writeFileSync('student.json',JSON.stringify(data2,null,2))