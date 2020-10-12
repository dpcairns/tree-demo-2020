import { rawTreeData } from './data.js';

// import functions and grab DOM elements
const correctName = document.querySelector('h2');
const rightOrWrong = document.querySelector('#right-or-wrong');
const nextButton = document.querySelector('button');
const nextDiv = document.querySelector('next');

// initialize state

const remainingTrees = rawTreeData.slice();

function getRandomTree(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}

// go grab a cononical correct tree
const correctTree = getRandomTree(remainingTrees);
// go grab an incorrect tree from the rawTrees
let incorrectTree = getRandomTree(rawTreeData);

// now, in the event that the two trees are the same
while (correctTree.id === incorrectTree.id) {
    // go grab another incorrectTree UNTIL they are not the same
    incorrectTree = getRandomTree(rawTreeData);
}

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');


correctName.textContent = correctTree.name;
radios[0].value = correctTree.id;
images[0].src = correctTree.image;

radios[1].value = incorrectTree.id;
images[1].src = incorrectTree.image;


function handleClick() {
    nextDiv.classList.toggle('hidden');
    
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
        images[i].style.opacity = .5;
    } 
}

// set event listeners to update state and DOM
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        // e is used whenever you need information/access to the thing the user clicked.
        console.log(e.target.value);
    });
}