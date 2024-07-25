let currentDate =  new Date();

console.log(currentDate)

let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1;
let day = currentDate.getDay();
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
/*This is mine*/  let second = currentDate.getSeconds

let fullDateTime = year + '/' + month + '/' + day + "-" + hour + ':' + minutes /*This is mine */ + '-' + second;
console.log(fullDateTime)
