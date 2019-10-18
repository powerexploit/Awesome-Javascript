const myTodos = []
myTodos.push('Buy bread')
myTodos.push('record videos for youtube')
myTodos.push('go to gym')
myTodos.forEach(function(todo,index){
console.log(`your task no ${index + 1} is : ${todo}`);
})