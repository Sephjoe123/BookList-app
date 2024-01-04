let books = JSON.parse(localStorage.getItem("books")) || [];

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

function createBookList() {
  const displayArea = document.querySelector(".row-list");
  displayArea.innerHTML = "";

  books.forEach((bookList) => {
    const tableArea = document.createElement("tr");
    const delBtn = document.createElement("li");

    delBtn.className = "fa-solid fa-xmark";
    tableArea.classList.add("row-area");
    tableArea.innerHTML = `
      <td>${bookList.title}</td>
      <td>${bookList.author}</td>
      <td>${bookList.isbn}</td>
    `;

    tableArea.appendChild(delBtn);
    displayArea.appendChild(tableArea);
    deleteBook(delBtn);
  });
}

window.onload = createBookList();

function addBookToList(e) {
  e.preventDefault();
  const inputValue = document.getElementById("input1").value;
  const authorValue = document.getElementById("input2").value;
  const isbnValue = document.getElementById("input3").value;
  checkInputField(inputValue, authorValue, isbnValue);
}

function deleteBook(del) {
  del.addEventListener("click", () => {
    const index = books.indexOf(del.parentElement);

    if(books.length >= 1){
      modal.style.display = "block";
      modal.classList.add("removed-list");
      modal.innerText = "Book removed from the list";
      
      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
  
      createBookList();
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    }

  });

  clearInputField(inputElements);
}

function checkInputField(inputValue, authorValue, isbnValue) {
  if (inputValue === "" || authorValue === "" || isbnValue === "") {
    alert("One or more of the input fields is missing!");
  } else {
    const newBook = new Book(inputValue, authorValue, isbnValue);
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);

    modal.style.display = "block";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
    createBookList();
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

inputElements.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addBookToList(e);
    }
  });
});
