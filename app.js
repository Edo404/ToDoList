let ToDoList = [];

const addBtn = document.querySelector('.add');
const listItems = document.querySelector('.list');

addBtn.addEventListener("click", function(e) {
    const actualText = document.getElementById('text').value;
    ToDoList.push(actualText);
    console.log(ToDoList);
})
