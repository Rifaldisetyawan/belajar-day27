// const jsonStr = '{"name":{"firstName": "John","lastName":"Doe"},"address":"senayan","favouriteColors":["blue","red"]}'
// // jsObj = JSON.parse(jsonStr)

// console.log(typeof jsonStr)
// const jsonObj = JSON.parse(jsonStr)
// console.log('json obj:', jsonObj)

// console.log(jsonObj.name)
// console.log(jsonObj.favouriteColors[0])

// jsonObj.age = 24

// console.log(jsonObj)
// const jsonObjToText = JSON.stringify(jsonObj)

// console.log(jsonObjToText)

const jsonTodoStr='{"title":"my todo","todos":[{"id":1,"title":"first todo","description":"pick up milk","completed":true,"date":1389878466730},{"id":2,"title":"second todo","description":"learn backbone","completed":false,"date_completed":null},{"id":3,"title":"third todo","description":"go for a run","completed":false,"date_completed":null}]}'
const jsonTodoObj=JSON.parse(jsonTodoStr);

    for(let i=0; i<jsonTodoObj.length;i++){
        jsonTodoObj.todos[i].date = new Date(jsonTodoObj.todos[0].date).toISOString();
    }
console.log(jsonTodoObj);
console.log('title of todo list',jsonTodoObj.title);
console.log('title of the todo with id 3',jsonTodoObj.todos[2].title);
console.log('status of the todo with id 2',jsonTodoObj.todos[1].completed);
console.log('date of the todo with id 1',jsonTodoObj.todos[0].date);