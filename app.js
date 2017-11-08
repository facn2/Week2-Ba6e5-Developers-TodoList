var todoFunctions = {

  generateId: (function () {
    var idCounter = 0;
    function incrementCounter () {
      return (idCounter += 1);
    }
    return incrementCounter;
  })(),

  addTodo: function (todos, newTodo) {
    newTodo.id = todoFunctions.generateId();
    newTodo.done = false;
    return todos.concat(newTodo);
  },
  deleteTodo: function (todos, idToDelete) {
    var filtered = todos.filter(function (everyTodo) {
      return everyTodo.id !== idToDelete;
    });
    return filtered;
  },
  markTodo: function (todos, idToMark) {
    var ChangeDone = todos.map(function (everyTodo) {
      if (everyTodo.id === idToMark) {
        return Object.assign({}, everyTodo, {done: !everyTodo.done})
      }
      else console.log(everyTodo);
      return everyTodo;
    });
    return ChangeDone;
  }
};

module.exports = {
  todoFunctions
};
