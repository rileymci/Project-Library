const myLibrary = [];
const main = document.querySelector(".main");

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(134);
    var z = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + x + "," + y + "," + z + ", 0.6)";

}


function Book(name, author, numPages, read){
    this.name = name;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.bgColor = random_bg_color();
}

function createCard(book){
    var div = document.createElement("div");
    div.id = 'card';
    div.style.backgroundColor = book.bgColor;
    div.style.borderStyle = "solid";
    div.style.borderRadius = "10px"
    div.style.textAlign = "center";
    div.style.lineHeight = "5px";
    div.style.padding = "5px 10px 0px 10px";
    div.style.flexWrap = "wrap";
    div.style.flex = "0 0 200px";
    

    if(book.read){
        div.innerHTML = "<h2 style='line-height: 1.2;'>"+book.name+"</h2> <img src='NIA.png' style='width:180px; border-radius:10px'> <p>By "+book.author+"</p> <p>Pages: "+book.numPages+"<p>Read: Yes</p>";
    }
    else{
        div.innerHTML = "<h2 style='line-height: 1.2;'>"+book.name+"</h2> <img src='NIA.png' style='width:180px; border-radius:10px'> <p>By "+book.author+"</p> <p>Pages: "+book.numPages+"<p>Read: No</p>";
    }

    

    main.append(div);
}

function createBookShelf(){
    myLibrary.forEach(book => {
        createCard(book);
    });
}


function clearBooks(){
    var child = main.lastElementChild;
    while(child) {
        main.removeChild(child);
        child = main.lastElementChild;
    }
}


function addBookToLibrary(name, author, numPages, read){
    myLibrary.push(new Book(name, author, numPages, read));

    clearBooks();

    createBookShelf();


}

console.log(myLibrary);

//addBookToLibrary("LOTR - The Fellowship of the Ring","J.R.R. Tolkien", "310", true);

//console.log(myLibrary[0].name);


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
      console.log(
        `This form has a book title of ${bookTitle}, by ${authorName} and has ${numPages} total pages.`
      );

      addBookToLibrary(bookTitle, authorName, numPages, read);
      form.reset();

    }

    dialog.close();
    
    console.log(myLibrary);

});
