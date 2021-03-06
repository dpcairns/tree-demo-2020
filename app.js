import { rawTreeData } from './data.js';

// import functions and grab DOM elements
const correctName = document.querySelector('h2');
const rightOrWrong = document.querySelector('#right-or-wrong');
const nextButton = document.querySelector('button');
const nextDiv = document.querySelector('#next');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');

// initialize state

let correctTree;
let guessesTaken = 0;
const remainingTrees = rawTreeData.slice();
const missedTrees = [];

function getRandomTree(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}

function removeById(someId) {
    for (let i = 0; i < remainingTrees.length; i++) {
        if (someId === remainingTrees[i].id) {
            remainingTrees.splice(i, 1);
        }    
    }
}

function setupQuestion() {
    // first, check if we're all out of trees
    if (remainingTrees.length === 0) {
        alert(`it took you: ${guessesTaken} tries to get all ${rawTreeData.length} trees right. \n And here are the ones you missed: ${[...new Set(missedTrees)]}`);
    }
    
    // hide the next button
    nextDiv.classList.add('hidden');

    // and reset the input styles
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        radios[i].checked = false;
        images[i].style.opacity = 1;
    }

    // go grab a cononical correct tree
    correctTree = getRandomTree(remainingTrees);
    // go grab an incorrect tree from the rawTrees
    let incorrectTree = getRandomTree(rawTreeData);

    // now, in the event that the two trees are the same
    while (correctTree.id === incorrectTree.id) {
        // go grab another incorrectTree UNTIL they are not the same
        incorrectTree = getRandomTree(rawTreeData);
    }

    const correctIndex = Math.floor(Math.random() * 2);
    // ternery
    const incorrectIndex = correctIndex ? 0 : 1;
    
    // go and set the DOM elements for the correct and incorrect tree
    correctName.textContent = correctTree.name;
    radios[correctIndex].value = correctTree.id;
    images[correctIndex].src = correctTree.image;

    radios[incorrectIndex].value = incorrectTree.id;
    images[incorrectIndex].src = incorrectTree.image;
}

// set event listeners to update state and DOM
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => 
    {
        guessesTaken++;
        nextDiv.classList.remove('hidden');
        
        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        } 

        const theySelectedTheRightTree = e.target.value === correctTree.id;

        console.log(theySelectedTheRightTree);

        if (theySelectedTheRightTree) {
        // remove tree from remainingTrees
            removeById(e.target.value);

        // display "correct!"
            rightOrWrong.textContent = 'correct!!';
        } else {
            missedTrees.push(e.target.value);

        // display "wrong!"
            rightOrWrong.textContent = 'wrong!!';
        }
    
    });
}

setupQuestion();

nextButton.addEventListener('click', setupQuestion);