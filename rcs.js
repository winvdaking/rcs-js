/**
 * Pierre-Feuille-Ciseaux
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ['pierre', 'feuille', 'ciseaux'];

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (playerChoice === 'feuille' && computerChoice === 'pierre') ||
        (playerChoice === 'ciseaux' && computerChoice === 'feuille')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
};

const playRound = () => {
    rl.question('Choisissez pierre, feuille ou ciseaux: ', (playerChoice) => {
        playerChoice = playerChoice.toLowerCase();
        if (!choices.includes(playerChoice)) {
            console.log('Choix invalide. Veuillez réessayer.');
            playRound();
            return;
        }

        const computerChoice = getComputerChoice();
        console.log(`L'ordinateur a choisi: ${computerChoice}`);

        const winner = determineWinner(playerChoice, computerChoice);
        if (winner === 'draw') {
            console.log('Égalité!');
        } else if (winner === 'player') {
            console.log('Vous gagnez cette manche!');
            playerScore++;
        } else {
            console.log('L\'ordinateur gagne cette manche!');
            computerScore++;
        }

        console.log(`Score: Joueur ${playerScore} - Ordinateur ${computerScore}`);

        if (playerScore === 2 || computerScore === 2) {
            console.log(playerScore === 2 ? 'Vous avez gagné le jeu!' : 'L\'ordinateur a gagné le jeu!');
            rl.close();
        } else {
            playRound();
        }
    });
};

/**
 * Variables de jeu
 */
let playerScore = 0;
let computerScore = 0;

/**
 * Début du jeu
 */
console.log(`
Bienvenue dans Pierre-Feuille-Ciseaux!
Le premier à atteindre 2 points gagne le jeu.
`);
playRound();
/**
 * Fin du jeu
 */

/**
 * Exportation des fonctions pour les tests
 */
module.exports = {
    getComputerChoice,
    determineWinner
};