const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn= document.getElementById('settings-btn');
const settings= document.getElementById('settings');
const settingsForm= document.getElementById('settings-form');
const difficultySelect= document.getElementById('difficulty');


// List of words array
const words = [
    'hej',
    'ivan',
    'fritz',
    'paulo',
    'ulf',
    'carlos',
    'pepsi',
    'cola',
    'gus',
    'chip',
    'filt',
    'vardagsrum',
    'objektiv',
    'poledance',
    'adventljusstake',
    'drag',
    'afton',
    'lunch',
    'frukost',
    'sommarlov',
    'lägenhet'
]

// Init word 
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Generate random word
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();