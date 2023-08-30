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
    copyRight.innerHTML =  `Copyright © ${date} <a href="https://github.com/heyitslauu" class="gh-link">heyitslauu</a>`
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
        <div class="book-card ${book.hasRead ? 'read' : ''}">
            <div class="book-card__description">
                <h3 class="book_title">${book.title}</h3>
            </div>
            <h4 class="book_author">By: ${book.author}</h4>
            <p class="book_pages">${book.pages} pages</p>
            <div class="marked-read">
                <label class="has-read-label">
                    Read
                    <input type="checkbox" class="card-checkbox" data-index="${index}" ${book.hasRead ? 'checked' : ''}>
                </label>
            </div>
            <button class="card-btn btn-delete" data-index="${index}">Remove</button>
        </div>
        `
    })
    mainContent.innerHTML = placeholder;

    const deleteButtons = document.querySelectorAll('.btn-delete');
    const readButtons = document.querySelectorAll('.btn-read');
    const cardCheckBox = document.querySelectorAll('.card-checkbox');

    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDelete);
    });

    readButtons.forEach(button => {
        button.addEventListener('click', handleRead);
    })

    cardCheckBox.forEach(box => {
        box.addEventListener('click', handleRead)
    })
}


function handleRead(event) {
    const index = event.target.getAttribute('data-index');
    const card = event.target.closest('.book-card');
    myLibrary[index].hasRead = !myLibrary[index].hasRead;

    if (myLibrary[index].hasRead) {
        card.classList.add('read'); 
    } else {
        card.classList.remove('read'); 
    }
    
}


function handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    renderBooks(); 
}


class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}

function addToLibrary(Book) {
    myLibrary.push(Book)
}