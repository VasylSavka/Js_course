// const subscribers = [
//     { id: 1, name: 'Anton', age: 20 },
//     { id: 2, name: 'Anton', age: 20 },
//     { id: 3, name: 'Anton', age: 20 },
// ]

// function congratsIfMoreThan100(subscribersArr) {
//     if (subscribersArr.length > 100) {
//         alert('congrats');
//     }
// }

// console.log(congratsIfMoreThan100(subscribers));

// const numberArr = [1, 2, 3, 4, 5];

// function squareArr(arr) {
//     let squareResult = []
//     for (const num of arr) {
//         squareResult.push(num * num);
//     }
//     return squareResult;
// }

// console.log(squareArr(numberArr));

// const people = [
//     {
//         name: 'Ross',
//         sex: 'male',
//     },
//     {
//         name: 'Monica',
//         sex: 'female',
//     },
//     {
//         name: 'Chandler',
//         sex: 'male',
//     },
//     {
//         name: 'Phoebe',
//         sex: 'female',
//     },
//     {
//         name: 'Ross',
//         sex: 'male',
//     },
//     {
//         name: 'Rachel',
//         sex: 'female',
//     },
// ]

// function addBeauty(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const elem = arr[i];
//         elem.sex === 'male' ?
//             elem.name += ' handsome'
//             : elem.name += ' beautiful';
//     }
//     return arr;
// }
// console.log(addBeauty(people));

// const numbers = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1];

// function getrepetitionOfNumber(numbersArr, number) {
//     let equalNumberAmount = 0;
//     for (let i = 0; i < numbersArr.length; i++) {
//         if (numbersArr[i] === number) {
//             equalNumberAmount++;
//         }
//     }
//     return equalNumberAmount === 0 ? 'Даного числа в масив немає' : equalNumberAmount;
// }

// console.log(getrepetitionOfNumber(numbers, -1));

///task html 1
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => createList(json))

// function createList(posts) {
//     const postsList = document.querySelector('.posts-list')

//     for (const post of posts) {
//         const li = document.createElement('li');
//         const span = document.createElement('span');
//         const h4 = document.createElement('h4');
//         const p = document.createElement('p');
//         const a = document.createElement('a');

//         li.className = 'posts-list-item';
//         span.className = 'post-index';
//         h4.className = 'post-title';
//         p.className = 'post-text';
//         a.className = 'post-link';

//         span.innerText = post.userId;
//         h4.innerText = post.title;
//         p.innerText = post.body;
//         a.innerText = 'Read more';

//         li.append(span, h4, p, a);
//         postsList.appendChild(li);
//     }

// }

// function getPostsById(id) {
//     const endpoint = 'https://jsonplaceholder.typicode.com'
//     const result = {
//         id,
//         name: '',
//         posts: []
//     }

//     return new Promise((resolve, rejecte) => {
//         fetch(`${endpoint}/users`)
//             .then(response => response.json())
//             .then(users => {
//                 const foundUser = users.find(user => user.id === id);
//                 result.name = foundUser.name;
//                 fetch(`${endpoint}/posts`)
//                     .then(response => response.json())
//                     .then(posts => {
//                         result.posts = posts.filter(post => post.userId === id);
//                         resolve(result);
//                     })
//             })
//     })
// }

// getPostsById(1)
// .then(data => console.log(data))

///task html 2
// async function fetchUsersList() {
//     const result = await fetch('https://jsonplaceholder.typicode.com/users');
//     return result.json();
// }


// async function renderLists() {
//     const users = await fetchUsersList();
//     const usersList = document.querySelector('.users-list');
//     for (const user of users) {
//         const usersListItems = document.createElement('li');
//         usersListItems.innerHTML = user.name;
//         usersListItems.className = 'users-list-item'
//         usersList.appendChild(usersListItems);
//     }
// }

// function searchUsers(e) {
//     const usersListItems = document.querySelectorAll('.users-list-item');
//     if (e.target.value.length === 0) {
//         usersListItems.forEach(user => user.classList.remove('hidden'));
//         return;
//     }

//     for (const usersListItem of usersListItems) {
//         if (!usersListItem.innerHTML.startsWith(e.target.value)) {
//             usersListItem.classList.add('hidden')
//         } else {
//             usersListItem.classList.remove('hidden')
//         }
//     }
// }

// renderLists();

// const input = document.querySelector('.input');
// input.addEventListener('input', searchUsers);

class PlayingCards {
    constructor(number, isWinning) {
        this.number = number;
        this.isWinning = isWinning;
    }
    onIsYouWin(attempt, square, squareContainer) {
        if (this.isWinning) {
            alert('you are winner');
            square.classList.add('square-correct');
        } else {
            if (attempt === 3) {
                alert('it was your last try');
                squareContainer.innerHTML = null;
                return;
            }
            alert('sorry, try more');
            square.classList.add('square-wrong');
        }

    }
}

const card7 = new PlayingCards(7, true);
const card1 = new PlayingCards(1, false);
const card3 = new PlayingCards(3, false);
const card4 = new PlayingCards(4, false);
const card8 = new PlayingCards(8, false);
const card2 = new PlayingCards(2, false);
const card5 = new PlayingCards(5, false);
const card6 = new PlayingCards(6, false);
const card9 = new PlayingCards(9, false);

const playingCardsArray = [card7, card1, card3, card4, card8, card2, card5, card6, card9];

console.log(playingCardsArray);


function createSquares(squares) {
    let attempt = 0;
    const squaresContainer = document.querySelector('.squares-container');
    squares.forEach(item => {
        const square = document.createElement('div');
        const squareIndex = document.createElement('h4');

        squareIndex.innerHTML = item.number;
        square.classList.add('square');
        square.appendChild(squareIndex);

        square.addEventListener('click', (e) => {
            item.onIsYouWin(++attempt, square, squaresContainer);
        })

        squaresContainer.appendChild(square);
    });
}

createSquares(playingCardsArray);