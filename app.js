//get the text area
let textArea = document.getElementById('text');
//get the Add button
let addBtn = document.querySelector('.add');
//get the list of tasks
let ul = document.querySelector('ul');

//when click the add btn, get the value of the text inserted
//create a li HTML
//assign to the textContent of the li, the text inserted
//create the edit and the trash icons inside the li
//append the li element in the ul list
addBtn.addEventListener("click", function() {
    let actualText = textArea.value;
    let row = document.createElement('li');
    row.textContent = actualText;

    let edit = document.createElement('i')
    let trash = document.createElement('i')

    edit.className = "fa-solid fa-pen";
    trash.className = "fa-solid fa-trash";
    row.appendChild(edit);
    row.appendChild(trash);
    ul.appendChild(row);

    //remove the element if the trash icon is clicked
    trash.addEventListener("click", function() {
        ul.removeChild(row);
    })
})
