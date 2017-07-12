var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

// tests for generateId //


// up to here //

// tests for addTodo function //
test('no newTodo input returns unchanged todos object', function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var todosCopy = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.addTodo(todos)
  var expected = todos
  t.equal(actual, expected);
  t.deepEqual(actual, todosCopy);
  t.end();
})

test('check todos has added newtodo',function(t){
  var newTodo = {
    id: 2,
    description:'wash dishes',
    done: true
  }
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.addTodo(todos,newTodo);
  var expected = todos.concat(newTodo);
  t.deepEqual(actual, expected);
  t.end();
})

test('check newTodo has a new id', function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var newTodo = {description: "Help I can't code"}
  var actual = logic.todoFunctions.addTodo(todos, newTodo)
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    },
    {
      id: 2,
      description: "Help I can't code",
      done: false
    }
  ]
  t.deepEqual(actual, expected);
  t.end();
})

test('empty string as newtodo description returns unchanged todos object', function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var newTodo = {description: ''};
  var actual =  logic.todoFunctions.addTodo(todos, newTodo)
  var expected = todos
  t.deepEqual(actual,expected);
  t.end();
})

 test('if newtodo matches old todos return unchanged todos' , function(t){
   var todos = [{
       id: 0,
       description: 'smash avocados',
       done: true
     },
     {
       id: 1,
       description: 'make coffee',
       done: false
     }
   ];
   var newTodo = {description: 'smash avocados'}
   var actual = logic.todoFunctions.addTodo(todos, newTodo)
   var expected = todos
   t.deepEqual(actual, expected);
   t.end();
 })

// up to here //

// tests for deleteTodo function //
test("if no idToDelete input return same todos", function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.deleteTodo(todos);
  var expected = todos;
  t.deepEqual(actual, expected);
  t.end();
})

test("new todos array deleted object with idToDelete", function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var todosCopy = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var idToDelete = 1;
  var actual = logic.todoFunctions.deleteTodo(todos, idToDelete);
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: true
    }];
  t.deepEqual(actual, expected);
  t.deepEqual(todos, todosCopy)
  t.end();
})

test('if idToDelete doesnt exist return unchanged todos', function(t){
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var idToDelete = 2
  var actual = logic.todoFunctions.deleteTodo(todos, idToDelete);
  var expected = todos
  t.deepEqual(actual, expected);
  t.end();
})


// up to here

// tests for markTodo function //
test("change done to true", function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: false
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.markTodo(todos, 0);
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  t.deepEqual(actual, expected);
  t.end();
})

test('change from done to undone', function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: false
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.markTodo(todos, 0);
  t.deepEqual(actual, expected);
  t.end();
})

// up to here //

// tests for sort function //
// test('sort todos by id', function(t){
//   var todos = [{
//       id: 1,
//       description: 'smash avocados',
//       done: true
//     },
//     {
//       id: 0,
//       description: 'make coffee',
//       done: false
//     }
//   ];
//   var actual = logic.todoFunctions.sortTodos(todos, sortFunction);
//   var expected =  [{
//       id: 0,
//       description: 'smash avocados',
//       done: true
//     },
//     {
//       id: 1,
//       description: 'make coffee',
//       done: false
//     }
//   ];
//   t.deepEqual(actual, expected);
//   t.end();
// })
//

// up to here //
