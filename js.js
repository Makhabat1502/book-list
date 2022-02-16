class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const bookList = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
    `;

    bookList.appendChild(row);
}

UI.prototype.clearFields = function () {
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
}

document.getElementById("book-form").addEventListener("submit", (e) => {

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const isbn = document.querySelector(".isbn").value; 

    if (title === "" || author === "" || isbn === "") {
        alert ("Please fill in the fields"); 
    } else {
        const book = new Book(title, author, isbn);
        const interface = new UI;
        interface.addBookToList(book);
        interface.clearFields();
    }

    e.preventDefault();
});