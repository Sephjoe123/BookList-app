const addBtn = document.getElementById("add");

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
function createBookList(book) {
  const displayArea = document.querySelector(".row-list");
  const tableArea = document.createElement("tr");
  const delBtn = document.createElement("li");

  delBtn.className = "fa-solid fa-xmark";
  tableArea.classList.add("row-area")
  tableArea.innerHTML = `
  
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  
  `
  tableArea.appendChild(delBtn)
  displayArea.appendChild(tableArea)
  deleteBook(delBtn)
}

function addBookToList() {
  const inputValue = document.getElementById("input1").value;
  const authorValue = document.getElementById("input2").value;
  const isbnValue = document.getElementById("input3").value;

  const newBook = new Book(inputValue, authorValue, isbnValue);

  createBookList(newBook);
}

function deleteBook(del) {
  del.addEventListener("click", () =>{
   del.parentElement.remove()
  })

  
}

addBtn.addEventListener("click", addBookToList);
