var test = require('tape');
var logic = require('./logic');

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
var todosCopy = [{
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
var newTodo = {description: "Help I can't code"}

// tests for addTodo function //
test('addTodo takes an array of all todos and the description of the new todo, and it returns a new array with a new todo attached with an original id', function(t) {
  var actual = logic.todoFunctions.addTodo(todos)
  var expected = todos
  t.equal(actual, expected);
  t.deepEqual(actual, todosCopy, 'if no new todo should return unchanged todos');
  t.end();
})

test('check todos has added newtodo',function(t){
  var actual = logic.todoFunctions.addTodo(todos,newTodo);
  var expected = todos.concat(newTodo);
  t.deepEqual(actual, expected, 'should add newtodo to array of todos');
  t.end();
})

test('check newTodo has a new id', function(t) {
  var actual = logic.todoFunctions.addTodo(todos, newTodo)
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: false
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
  t.deepEqual(actual, expected, 'new todo should have a unique id');
  t.end();
})

test('empty string as newtodo description returns unchanged todos object', function(t) {
  var newTodo = {description: ''};
  var actual =  logic.todoFunctions.addTodo(todos, newTodo)
  var expected = todos
  t.deepEqual(actual, expected, 'if new todo is an empty string should return unchanged todos');
  t.end();
})

 test('if newtodo matches old todos return unchanged todos' , function(t){
   var newTodo = {description: 'smash avocados'}
   var actual = logic.todoFunctions.addTodo(todos, newTodo)
   var expected = todos
   t.deepEqual(actual, expected, 'if duplicating old todo should return unchanged todos');
   t.end();
 })

// tests for deleteTodo function //
test("if no idToDelete input return same todos", function(t) {
  var actual = logic.todoFunctions.deleteTodo(todos);
  var expected = todos;
  t.deepEqual(actual, expected, 'if no input id should return unchanged todos');
  t.end();
})

test("new todos array deleted object with idToDelete", function(t) {
  var idToDelete = 1;
  var actual = logic.todoFunctions.deleteTodo(todos, idToDelete);
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: false
    }];
  t.deepEqual(actual, expected, 'should return todos minus the object with id to delete');
  t.deepEqual(todos, todosCopy, 'checck not mutating original todos input')
  t.end();
})

test('if idToDelete doesnt exist return unchanged todos', function(t){
  var idToDelete = 2
  var actual = logic.todoFunctions.deleteTodo(todos, idToDelete);
  var expected = todos
  t.deepEqual(actual, expected, 'if idtodelete does not exist return unchanged todos');
  t.end();
})

// tests for markTodo function //
test("change done to true", function(t) {
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
  t.deepEqual(actual, expected, 'change done to true on todo with id to mark');
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
  t.deepEqual(actual, expected, 'change done to false on todo with id to mark');
  t.end();
})
