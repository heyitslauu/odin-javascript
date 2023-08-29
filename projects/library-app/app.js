const showDialog = document.getElementById('addBook');
const formDialog = document.getElementById("formDialog");
const closeBtn = document.querySelector('.btn-close');


showDialog.addEventListener('click', () => {
    formDialog.showModal()
})

closeBtn.addEventListener('click', () => {
    formDialog.close();
})
const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        console.log(`The Book is ${title}, published by ${author} with ${pages} pages`);
    }
}

const newBook = new Book('Hobbit', 'JK Rowling', 300, false);

function addToLibrary(Book) {
    myLibrary.push(Book)
}