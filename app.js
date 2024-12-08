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
    li.textContent = actualText;
    ul.appendChild(li);
})
