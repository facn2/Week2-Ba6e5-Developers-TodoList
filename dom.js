// document.getElementById('add-todo').addEventListener('click', function() {
//
//   var value = document.getElementById('item').value;
//   if (value) {
//
//   }
//
// });
// //
//
//
// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [{
      id: -3,
      description: 'Visit guesthouse for dinner'
    },
    {
      id: -2,
      description: 'Daytrip to Haifa'
    },
    {
      id: -1,
      description: 'Buy a piece of Knafe'
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) { // todo = {id:1/2/3/.., description:'the actual todo'}
    var todoNode = document.createElement('li'); // creates <li></li>
    todoNode.textContent = todo.description; // => <li>description</li>
    //so we have created items in lists

    // and now, we create 'button' elements and then when clicked(event listener)
    //it will run deleteTodo function to all the elments and refresh it(update(newstate))

    //    this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash';
    deleteButtonNode.appendChild(deleteIcon)
    todoNode.appendChild(deleteButtonNode);



    //now create mark button and then add eventLister
    //run the function marktodo
    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      console.log(newState);
    });
    var markIcon = document.createElement('i');
    markIcon.className = 'fa fa-check';
    markButtonNode.appendChild(markIcon);
    todoNode.appendChild(markButtonNode);

    // add classes for css
    if (todo.done) {
      todoNode.style.backgroundColor = '#F35050';
    }
    return todoNode;

  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      //get the text of form and then add it to the list
      var input = event.target.description.value; // event.target ....
      //var input = document.querySelector('input').value;
      console.log(input);
      // console.log(description);
      var newObj = {};
      newObj['description'] = input;
      console.log(newObj);
      var newState = todoFunctions.addTodo(state, newObj);
      console.log(newState);
      // hint: todoFunctions.addTodo
      //var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
