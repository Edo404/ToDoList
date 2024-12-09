//get the text area
let textArea = document.getElementById('text');
//get the Add button
let addBtn = document.querySelector('.add');
//get the list of tasks
let ul = document.querySelector('ul');

//when click the add btn, get the value of the text inserted
//create a li HTML
//assign to the textContent of the li, the text inserted
//append the li element in the ul list
addBtn.addEventListener("click", function() {
    let actualText = textArea.value;
    let li = document.createElement('li');
    let edit = document.createElement('i');
    let trash = document.createElement('i');
    li.textContent = actualText;
    edit.className = "fa-solid fa-pen";
    trash.className = "fa-solid fa-trash";

    ul.appendChild(li);
    ul.appendChild(edit);
    ul.appendChild(trash);
})

let trashIcon = document.querySelector('.fa-solid fa-trash');

trashIcon.addEventListener("click", function() {
    console.log("click avvenuto");
})
