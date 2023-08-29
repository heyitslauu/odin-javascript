// Object Constructors

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        console.log(`The Book is ${title}, published by ${author} with ${pages} pages`);
    }
}

const hobbitBook = new Book('The Hobbit', 'JK Rowling', 300, false)

console.log(hobbitBook.info())

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'


console.log(Object.getPrototypeOf(player1) === Player.prototype)// returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype)// returns true

console.log(Object.getPrototypeOf(player1));