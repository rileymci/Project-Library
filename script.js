const myLibrary = [];

function Book(name, author, numPages, read){
    this.name = name;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary(name, author, numPages, read){
    myLibrary.push(new Book(name, author, numPages, read));
}

console.log(myLibrary);

addBookToLibrary("Riley's Book","Riley Mcilwain");

console.log(myLibrary[0].name);


const inputBookBtn = document.querySelector(".input");

const dialog = document.querySelector("dialog");
const form = document.getElementById("bookForm");
const addBookBtn = document.querySelector(".submit");


inputBookBtn.addEventListener("click", () => {
    dialog.showModal();
})


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let bookTitle = document.getElementById("bname").value;
    let authorName = document.getElementById("author").value;
    let numPages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
  
    if (bookTitle == "" || authorName == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      // perform operation with form input
      alert("This form has been successfully submitted!");
      console.log(
        `This form has a book title of ${bookTitle}, by ${authorName} and has ${numPages} total pages.`
      );

      addBookToLibrary(bookTitle, authorName, numPages, read);
      form.reset();

    }

    dialog.close();
    
    console.log(myLibrary);

});