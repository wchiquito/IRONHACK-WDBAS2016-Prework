
window.onload = function() {

    // Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
    if(!('nextElementSibling' in document.documentElement)) {
        Object.defineProperty(Element.prototype, 'nextElementSibling', {
            get: function() {
                var e = this.nextSibling;
                while (e && 1 !== e.nodeType)
                    e = e.nextSibling;
                return e;
            }
        });
    }

    // the following code adds event listeners to the buttons
    // you'll learn more about this later
    // for this exercise, you are going to write the functions for
    // what happens when the user clicks on the buttons.
    var saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', addToDoItem, false);

    var doneButton = document.getElementById('done-button');
    doneButton.addEventListener('click', markAsDone, false);

    function addToDoItem() {
        // add your code here
        // this should create a new list item in the to-do list
        // and set the text as the input from the todo-input field
        var objText = document.getElementById('todo-input');
        var text = objText.value.trim();
        if (text.length) {
            (item = document.createElement('li')).textContent = text;
            document.querySelector('ul.todo-list-items')
                    .appendChild(item);
        }
        objText.value = '';
    }

    function markAsDone() {
        /*doneButton.classList.add('liked');
        doneButton.innerHTML = "Liked!";
        document.querySelector('h1').style.color = "red";*/
        var doneList;
        var doneButton = document.getElementById('done-button');
        var firstTodoItem = doneButton.nextElementSibling;
        if (firstTodoItem) {
            doneButton.parentNode.removeChild(firstTodoItem);
            firstTodoItem.classList.add('done');
            doneList = document.querySelector('ul.done-list-items');
            doneList.insertBefore(firstTodoItem,
                                  doneList.querySelector('li.done'));
        }
    }
}
