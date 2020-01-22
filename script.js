function promptPassword( )
{
var name = prompt ("Enter your Username: ");
var pwd = prompt ("Enter your Password: ");
//replace ' by "
while(pwd != "mesuara")
{
alert("Login is incorrect");
pwd = prompt ("Enter your Password: ");
}
alert("Password is correct, you are allowed to enter the site");
};
var books = [
{ author: "Harper Lee", title: "To kill a mocking bird", readingStatus: "in" },
{ author: "Chimamanda Ngozi Adichie",
title: "Americanah", readingStatus: "out" },//line longer than 80 charecters
{ author: " Sue Monk Kidd",
title: "The Secret Life of Bees", readingStatus: "in" },
{ author: "Ann Patchett", title: "State of Wonder", readingStatus: "in" },
{ author: "Markus Zusak", title: "The Book Thief", readingStatus: "in" },
{ author: "Anthony Doerr", title: "All the Light We Cannot See",
readingStatus: "in" },
{ author: "Betty Smith", title: "A Tree Grows in Brooklyn",
readingStatus: "out" } //extra comma
];
// var button = document.getElementById
// var show = document.getElementById("booklibrary")
// for(var i =0; i < list.length; i++){
// show += list[i].title + " by " + list[i].author + "
";

// ==========SAVING THE BOOKS TO SHOW==============
var show= "";
// show.addEventListener("click", printBooks())
for(var i=0; i < books.length; i++){
show += books[i].title + " by " + books[i].author + "
";
}
// ===========FUNCTION TO PRINT THE BOOKS============
function printBooks(list){
var el = document.getElementById("allBooks");
// for(var i =0; i < list.length; i++){
// show += list[i].title + " by " + list[i].author + "
";
if(el.childNodes.length !== 0){
return document.getElementById("allBooks").innerHTML =show;

}else{
return document.getElementById("allBooks").innerHTML = "";
}
};

// =================FUNCTION TO ADD A NEW BOOK===============
// var testObject = [];
const button = document.getElementById("addder");
const author = document.getElementById("author");
const title = document.getElementById("title");
const readingStatus = document.getElementById("readingStatus");

button.addEventListener("click", function() {
books.push({
author: author.value ,
tittle: title.value ,
readingStatus: readingStatus.value
})
console.log(books)
show += title.value + " by " + author.value + "
";
})

// ==================COUNT SHOW BOOKS OUT=======================
var bookOut = document.getElementById("outBooks")
var showOutBooks = document.getElementById("showOut")
bookOut.addEventListener("click", function(){
var lengthOfOut = 0
var out = ""
for(var j =0; j < books.length; j++){
if (books[j].readingStatus == "out"){
out += books[j].title + "by " + books[j].author + "is out of stock" + "
";
lengthOfOut++
}
}if (document.getElementById("showOut").childNodes.length === 0){
return showOutBooks.innerHTML = "There are " + lengthOfOut +
" books out " + "
" + out;
}else{
return showOutBooks.innerHTML = "";
}
});

// ===================COUNT AND SHOW BOOKS IN============================
var bookIn = document.getElementById("inBooks")
var showInBooks = document.getElementById("showIn")
bookIn.addEventListener("click", function(){
var lengthOfIn = 0
var inside = ""
for(var k =0; k < books.length; k++){
if (books[k].readingStatus == "in"){
inside += books[k].title + "by " + books[k].author + " is in stock" + "
";
lengthOfIn++
}
}if (document.getElementById("showIn").childNodes.length === 0){
return showInBooks.innerHTML = "There are " + lengthOfIn +
" books in " + "
" + inside;
}else{
return showInBooks.innerHTML = "";
}
});
