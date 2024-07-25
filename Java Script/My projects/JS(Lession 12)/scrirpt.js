let heading = document.getElementById("heading");
let divsion = document.getElementsByClassName("javascript");

console.log(heading);
heading.innerHTML= "This is a new title"

console.log(divsion);
divsion[0].innerHTML= "<b 'style= color:blue; background-color: black';>This is a new division</b>"

const NewHeading = document.createElement("h5")
NewHeading.innerHTML =  "This is content of the newly created pargraph"

let content  = document.getElementById("content")
content.appendChild(NewHeading)
