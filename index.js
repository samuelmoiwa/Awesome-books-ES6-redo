/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import time from './modules/dateTime.js';

const inputBookTitle = document.getElementById('book_title');
const inputBookAuthor = document.getElementById('book_author');

const addBookBtn = document.getElementsByClassName('btn')[0];

let taskList = [];

addBookBtn.addEventListener('click', () => {
  // eslint-disable-next-line eqeqeq
  if (inputBookTitle.value.trim() != 0 && inputBookAuthor.value.trim() != 0) {
    const localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(`${inputBookTitle.value} : ${inputBookAuthor.value}`);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    inputBookAuthor.value = '';
    inputBookTitle.value = '';
  }

  showItem();
});

function showItem() {
  const localItems = JSON.parse(localStorage.getItem('localItem'));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = '';
  const itemShow = document.querySelector('.bookLists');
  taskList.forEach((bookTitle, index) => {
    html += `
      <div class="todoListItems">
          <div class="bookList">
              <p class="titleText">${bookTitle}</p>
              <button class="deleteTask" onClick="deleteItem(${index})">Delete</button>
          </div>
      </div>
    `;
  });
  itemShow.innerHTML = html;
}

showItem();

// eslint-disable-next-line no-unused-vars
function deleteItem(i) {
  // eslint-disable-next-line no-unused-vars
  const localItems = JSON.parse(localStorage.getItem('localItem'));
  taskList.splice(i, 1);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  showItem();
}

deleteItem();

const navList = document.querySelector('#nav-list');
const navAddNew = document.querySelector('#nav-add-new');
const navContact = document.querySelector('#nav-contact');

const bookListSection = document.querySelector('.books_list_main_div');
const addNewSection = document.querySelector('.input_value');
const contactSection = document.querySelector('.contact_info');

navList.addEventListener('click', () => {
  if (navList) {
    bookListSection.style.display = 'flex';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'none';
  }
});

navAddNew.addEventListener('click', () => {
  if (navList) {
    bookListSection.style.display = 'none';
    addNewSection.style.display = 'flex';
    contactSection.style.display = 'none';
  }
});

navContact.addEventListener('click', () => {
  if (navList) {
    bookListSection.style.display = 'none';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'flex';
  }
});

time();
