// fetch api

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // method that parses and returns data in json format
    .then(json => console.log(json))
    .catch(err => console.log('rejected', err)); //only rejects on network error

const getTodos = async () => {  // async function, cleaner way to get all the fetch commands.

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // first promise

    if(response.status !== 200){  // checks for a valid response from first promise or throws an error
        throw new Error('cannot fetch the data');
    }

    const data = await response.json(); // second promise

    return data; // returns promise
}

getTodos()
    .then(data => console.log('resolved', data)) // logs data if no errors
    .catch(err => console.log('rejected', err.message)); // catches error and logs error message