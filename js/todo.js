var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = addTodo;

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
renderTodos();

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos){
      var todoElement = document.createElement('li');
      var todoText = document.createTextNode(todo);
      
      var linkElement = document.createElement('a');
      
      linkElement.setAttribute('href', '#')

      var pos = todos.indexOf(todo);

      var linkText = document.createTextNode('Excluir');
      linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

      linkElement.appendChild(linkText);

      todoElement.appendChild(todoText);
      listElement.appendChild(todoElement);
      listElement.appendChild(linkElement);

    }
}

function addTodo() {
    var todoText = inputElement.value;

    if (todoText == ''){
        alert('Preencha o campo com tarefa');

    } else {
        todos.push(todoText);
        inputElement.value = '';
    
        renderTodos();
        saveToStorage();
    }
    

}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));

}