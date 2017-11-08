(function () {
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');// html form
  var state = [{
    id: -2,
    description: 'Visit guesthouse for dinner'
  },
  {
    id: -1,
    description: 'Daytrip to Haifa'
  }
  ]; // inital list of todo

  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    todoNode.textContent = todo.description; // => <li>description</li>

    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash';
    deleteButtonNode.appendChild(deleteIcon);
    todoNode.appendChild(deleteButtonNode); // appending trash icon to button then button to list

    var markButtonNode = document.createElement('button');
    markButtonNode.addEventListener('click', function (event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    var markIcon = document.createElement('i');
    markIcon.className = 'fa fa-check';
    markButtonNode.appendChild(markIcon);
    todoNode.appendChild(markButtonNode);

    // add classes for css
    if (todo.done) {
      todoNode.style.backgroundColor = 'powderblue'; // change the color
    }
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) { // from line3
    addTodoForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Q

      var newObj = {};
      var input = document.querySelector('input').value; // input of form == description
      document.querySelector('input').value = '';
      newObj['description'] = input;

      var newState = todoFunctions.addTodo(state, newObj); // new state is a new list
      update(newState);
    });
  }

  var renderState = function (state) {
    var todoListNode = document.createElement('ul');
    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });// appending li element to ul element
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild); // replacing old list to new list
  };
  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  if (container) renderState(state);
})();
