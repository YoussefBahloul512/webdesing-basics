let academy = "hsoub";

// Get charctar by index
console.log(academy.charAt(1)); // print 's'

console.log(academy[4]); // prints 'b'

// Get index of text
console.log(academy.indexOf("oub")); // prints '2'

// Get string length
console.log(academy.length);

// Extract a part of string
console.log(academy.substring(1 , 4)); // print 'sou'

console.log(academy.slice(1, 4)); // prints 'sou'

console.log(academy.substr(1,4)) // prints 'sou'

// Replace string
console.log(academy.replace("hsoub" , "hsoub academy")) // prints 'hsoub academy'

// Upper & Lower case
console.log(academy.toUpperCase()); // prints 'HSOUB'
console.log(academy.toLowerCase()); // prints 'hsoub'