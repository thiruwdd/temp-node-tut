const { readFile, writeFile } = require('fs');

console.log('First Task');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log('error:--',err)
        return
    }
    console.log('Result:--', result);
    console.log('Comepleted');
})

console.log('Next task')