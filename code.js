const myCharsArray = ['A', 'B', 'C', 'D', 'E'];
const myNumbersArray = [1, 2, 3, 4, 5];
let myObj = {
    myname: 'Sudhir',
    id: 10,
    city: 'Melbourne',
    indian: true,
    hobbies: ['Reading', 'Sleeping', 'Dreaming', 'Cricket', 'TT', 'Chess', 'Coding', 'Cooking'],
    hello: () => { return "Hello World" }
}

const getUser = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const userArray = await users.json();
    const userNames = userArray.map(element => {
        return element.name;
    });
    console.log(userArray);
    PrintUserZipcodes(userArray);
}

const PrintUserZipcodes = (userArray) => {
    const ulElement = document.getElementById('userUL');
    usersArray.forEach(users => {
    const liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(users.name));    
    ulElement.appendChild(liElement);
    })
}

const printUserNames = (usersArray) => {
    const ulElement = document.getElementById('userUL');
    usersArray.forEach(users => {
    const liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(users.name));
    liElement.appendChild(document.createTextNode(' - '));
    liElement.appendChild(document.createTextNode(users.username));
    ulElement.appendChild(liElement);
    })
}

getUser();



