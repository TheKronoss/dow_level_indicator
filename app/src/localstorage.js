const storage = window.localStorage;

storage.setItem('test', 'it worked :)');

console.log(storage.getItem('test'));