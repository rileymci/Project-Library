const myLibrary = [];

function Book(name, author){
    this.name = name;
    this.author = author;
}

function addBookToLibrary(name, author){
    myLibrary.push(new Book(name, author));
}

console.log(myLibrary);

addBookToLibrary("Riley's Book","Riley Mcilwain");

console.log(myLibrary[0].name);


const inputBookBtn = document.querySelector(".input");
const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add");

inputBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

addBookBtn.addEventListener("click", () => {
    dialog.close();
})