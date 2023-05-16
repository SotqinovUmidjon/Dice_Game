const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');


const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';

// variables

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

// SwichtPlayer

const SwitchPlayer = function () {
	currentScore = 0;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		activePlayer = activePlayer === 0 ? 1 : 0;
		document.querySelector(".player--0").classList.toggle('player--active');
		document.querySelector(".player--1").classList.toggle('player--active');
}

// btn Roll

btnRoll.addEventListener('click', () => {
	if(gameOver){ diceImg.style.display = 'block';

	const random = Math.floor(Math.random() * 6) + 1;
	diceImg.src = `./dice-${random}.png`;

	if(random !== 1){
		currentScore += random
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	}else if (random == 1){
		SwitchPlayer()
	}
}
})


//hold score

btnHold.addEventListener('click', () => {
	if(gameOver){
		score[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
		if(score[activePlayer] >= 100){
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			gameOver = false;
			}else{
				SwitchPlayer()
			}
		}
})
