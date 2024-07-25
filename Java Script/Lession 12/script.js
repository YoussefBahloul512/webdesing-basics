// DOM (document object module)
// let heading = document.getElementById("title");
// let paragraph = document.getElementsByClassName("content");
// let allParagraphs = document.getElementsByTagName("p");
// console.log(heading);
// heading.innerHTML = "<u>This is a title</u>";

// console.log(paragraph);
// paragraph[0].innerHTML = "<i>This is the pargraph content</i>"

// console.log(allParagraphs);
// allParagraphs[1].innerHTML = "<b style = 'color:green'>this is the second pargraph</b>"

const newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is content of the newly created pargraph"

let content = document.getElementById('content');
content.appendChild(newParagraph);