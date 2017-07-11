var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

// tests for generateId //


// up to here //

// tests for addTodo function //
test('check it returns unchanged todos object', function(t) {
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

  var actual = logic.todoFunctions.addTodo(todos)
  var expected = todos
  t.equal(actual, expected);
  t.end();
})

test('check add newtodo',function(t){
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

test('check it has new id', function(t) {
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

// up to here //

// tests for deleteTodo function //


// up to here

// tests for markTodo function //


// up to here //
