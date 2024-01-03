const addBtn = document.getElementById("add");
const input = document.getElementById("input1");
const author = document.getElementById("input2");
const isbn = document.getElementById("input3");
const inputElements = document.querySelectorAll('input[type="text"]');
const modal = document.querySelector(".modal-btn");

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
  tableArea.classList.add("row-area");
  tableArea.innerHTML = `
  
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  
  `;
  tableArea.appendChild(delBtn);
  displayArea.appendChild(tableArea);
  deleteBook(delBtn);
}

function addBookToList() {
  let newBook;

  const inputValue = document.getElementById("input1").value;
  const authorValue = document.getElementById("input2").value;
  const isbnValue = document.getElementById("input3").value;
  checkInputField(inputValue, authorValue, isbnValue, newBook);
}

function deleteBook(del) {
  del.addEventListener("click", () => {
    del.parentElement.remove();

    modal.style.display = "block"
    modal.classList.add("removed-list")
    modal.innerText = "Task removed from list"

    setTimeout(() =>{
      modal.style.display = "none"
    }, 2000)
  });

  clearInputField(inputElements);
}

function checkInputField(inputValue, authorValue, isbnValue, newBook) {
  if (inputValue === "" || authorValue === "" || isbnValue === "") {
    alert("one or more of the input field is missing !");
  } else {
    newBook = new Book(inputValue, authorValue, isbnValue);
    modal.style.display = "block";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
    createBookList(newBook);
  }
}

function clearInputField(inputElements) {
  inputElements.forEach((input) => {
    if (input.value !== "") {
      input.value = "";
    }
  });
}

addBtn.addEventListener("click", addBookToList);
