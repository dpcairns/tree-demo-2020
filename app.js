import { rawTreeData } from './data.js';

// import functions and grab DOM elements
const correctName = document.querySelector('h2');
const rightOrWrong = document.querySelector('#right-or-wrong');
const nextButton = document.querySelector('button');
const nextDiv = document.querySelector('next');
const radios = document.querySelectorAll('input');

// initialize state

const remainingTrees = rawTreeData.slice();

