const fs = require('fs')

// fs.appendFile('./text.txt', 'hello',err => 
// {if(err){console.log(err)
// }else{
// console.log('that worke di think')
// }})

fs.readFile('./text.txt','utf8',(err,data) => 
{if(err){console.log(err)
}else{
console.log(data)
}})

fs.writeFile('./text.txt',"hello",err => 
{if(err){console.log(err)
}else{
console.log('that worke di think')
}})
fs.rename('./text.txt','./texttest.txt',err => 
{if(err){console.log(err)
}else{
console.log('that worke di think')
}})
fs.unlink('./text.txt',err => 
{if(err){console.log(err)
}else{
console.log('that worke di think')
}})