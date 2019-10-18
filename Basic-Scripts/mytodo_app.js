const mytodos = []
mytodos.push('Buy bread')
mytodos.push('record videos for youtube')
mytodos.push('go to gym')
for (let index = 0; index < mytodos.length; index++) {
    const element = mytodos[index];
    console.log(`your task no ${index+1} is : ${element}`)
    
}
