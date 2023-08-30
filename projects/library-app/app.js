const showDialog = document.getElementById('addBook');
const formDialog = document.getElementById("formDialog");
const closeBtn = document.querySelector('.btn-close');
const form = document.getElementById('form-input');

const footer = document.querySelector('.footer')
const mainContent = document.getElementById('main__content');

document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    const copyRight = document.createElement('p');
    let date =  new Date().getFullYear();
    copyRight.textContent =  `Copyright © ${date} heyitslauu`
    footer.prepend(copyRight)

})


const myLibrary = [];

showDialog.addEventListener('click', () => {
    formDialog.showModal()
})

closeBtn.addEventListener('click', () => {
    formDialog.close();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title');
    const author = document.getElementById('author')
    const pages = document.getElementById('pages')
    const hasRead = document.getElementById('has_read')

    let finished = hasRead.checked ? true: false;
    const newBook = new Book(title.value, author.value, pages.value, finished)
    
    addToLibrary(newBook)

    renderBooks();
    form.reset();
})



function renderBooks() {
    let placeholder = '';

    myLibrary.forEach((book, index) => {
        placeholder += `
        <div class="book-card">
                <div class="book-card__description">
                    <p class="book_title">${book.title}</p>
                    <div class="author-pages">
                        <p class="book_author">${book.author}</p>
                        <span>|</span>
                        <span>${book.pages} Pages</span>
                    </div>
                </div>
                <button class="card-btn btn-read">Mark as Read</button>
                <button class="card-btn btn-delete" data-index="${index}">Remove</button>
            </div>
        `
    })
    mainContent.innerHTML = placeholder;

    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

function handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    console.log(index);
    myLibrary.splice(index, 1); // Remove the book from the library
    renderBooks(); // Re-render the updated library
}


function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        console.log(`The Book is ${title}, published by ${author} with ${pages} pages`);
    }
}

function addToLibrary(Book) {
    myLibrary.push(Book)
    // console.log(myLibrary);
}