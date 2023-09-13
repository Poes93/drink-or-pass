const statementEl = document.getElementById('statement');
const startButton = document.getElementById('start');
const actionsDiv = document.getElementById('actions');
const drinkButton = document.getElementById('drink');
const passButton = document.getElementById('pass');
const resultEl = document.getElementById('result');

const statements = [
    "If you've ever been on a road trip.",
    "If you like chocolate ice cream.",
    "If you've ever been to a concert.",
    // Add as many statements as you like...
];

startButton.addEventListener('click', () => {
    const randomStatement = statements[Math.floor(Math.random() * statements.length)];
    statementEl.textContent = randomStatement;
    startButton.classList.add('hidden');
    actionsDiv.classList.remove('hidden');
    resultEl.textContent = '';
});

drinkButton.addEventListener('click', () => {
    resultEl.textContent = 'You chose to drink!';
    actionsDiv.classList.add('hidden');
    startButton.classList.remove('hidden');
});

passButton.addEventListener('click', () => {
    resultEl.textContent = 'You passed!';
    actionsDiv.classList.add('hidden');
    startButton.classList.remove('hidden');
});