let myLibrary = []

function book(title,author,pages,read,info) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (read){
            return (`${title} by ${author}, ${pages} pages, read`)
        }
        else{
        return (`${title} by ${author}, ${pages} pages, not read yet`)
    }
    }
}


myLibrary[0] = new book("my way","mahmoud","298",false)
myLibrary[1] = new book("simple life","samy","28",false)
myLibrary[2] = new book("bad habbits","iyad","98",false)
myLibrary[3] = new book("my way to hell or heaven","basset","298",false)

console.log(myLibrary.length)



function createBook(book) {
    const bookEL = document.createElement("div")
   bookEL.setAttribute("class","book")
    let bookName = document.createElement("h4")
    bookName.innerHTML = `title:  ${book.title}`
    bookAuthor = document.createElement("h5")
    bookAuthor.innerHTML =  `author: ${book.author}`
    bookEL.appendChild(bookName)
    bookEL.appendChild(bookAuthor)
    bookPages = document.createElement("h5")
    bookPages.innerHTML = `pages : ${book.pages}`
    bookEL.appendChild(bookPages)
    return bookEL
}

const books = document.querySelector(".books")

for(let i = 0 ; i<myLibrary.length ; i++) {
    books.appendChild(createBook(myLibrary[i])

    )    
}