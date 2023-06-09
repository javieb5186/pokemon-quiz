// ------------------------Declarations-----------------------------//
var imgs = document.getElementById("images");
const startButton = document.getElementById("quiz-button");
const questionsContainer = document.getElementById("questions-container");
const buttonsContainer = document.getElementById("buttons-container");
const scoresButton = document.getElementById("scores-button");
const homeButton = document.getElementById("home-button");
const saveButton = document.getElementById("save-button");
const feedback = document.getElementById("feedback");
var results = document.getElementById("results");
const h3 = document.querySelector("h3");
const timer = document.getElementById("timer");
var choice1 = document.getElementById("choice-1");
var choice2 = document.getElementById("choice-2");
var choice3 = document.getElementById("choice-3");
var choice4 = document.getElementById("choice-4");
var time = 90;
let timeLeft;
var countDown;
var answer;
var answerCorrect = 0, answerIncorrect = 0, totalAnswered = 0;
var root;
const master = [
  [1, 1, "Bulbasaur"],
  [2, 1, "Ivysaur"],
  [3, 1, "Venusaur"],
  [4, 1, "Charmander"],
  [5, 1, "Charmeleon"],
  [6, 1, "Charizard"],
  [7, 1, "Squirtle"],
  [8, 1, "Wartortle"],
  [9, 1, "Blastoise"],
  [10, 1, "Caterpie"],
  [11, 1, "Metapod"],
  [12, 1, "Butterfree"],
  [13, 1, "Weedle"],
  [14, 1, "Kakuna"],
  [15, 1, "Beedrill"],
  [16, 1, "Pidgey"],
  [17, 1, "Pidgeotto"],
  [1, 2, "Pidgeot"],
  [2, 2, "Rattata"],
  [3, 2, "Raticate"],
  [4, 2, "Spearow"],
  [5, 2, "Fearow"],
  [6, 2, "Ekans"],
  [7, 2, "Arbok"],
  [8, 2, "Pikachu"],
  [9, 2, "Raichu"],
  [10, 2, "Sandshrew"],
  [11, 2, "Sandslash"],
  [12, 2, "Nidoran F"],
  [13, 2, "Nidorana"],
  [14, 2, "Nidoqueen"],
  [15, 2, "Nidoran M"],
  [16, 2, "Nidorino"],
  [17, 2, "Nidoking"],
  [1, 3, "Clefairy"],
  [2, 3, "Clefable"],
  [3, 3, "Vulpix"],
  [4, 3, "Ninetails"],
  [5, 3, "Jigglypuff"],
  [6, 3, "Wigglytuff"],
  [7, 3, "Zubat"],
  [8, 3, "Golbat"],
  [9, 3, "Oddish"],
  [10, 3, "Gloom"],
  [11, 3, "Vileplume"],
  [12, 3, "Paras"],
  [13, 3, "Parasect"],
  [14, 3, "Venonat"],
  [15, 3, "Venomoth"],
  [16, 3, "Diglet"],
  [17, 3, "Dugtrio"],
  [1, 4, "Meowth"],
  [2, 4, "Persian"],
  [3, 4, "Psyduck"],
  [4, 4, "Golduck"],
  [5, 4, "Mankey"],
  [6, 4, "Primeape"],
  [7, 4, "Growlithe"],
  [8, 4, "Arcanine"],
  [9, 4, "Poliwag"],
  [10, 4, "Poliwhirl"],
  [11, 4, "Poliwrath"],
  [12, 4, "Abra"],
  [13, 4, "Kadabra"],
  [14, 4, "Alakazam"],
  [15, 4, "Machop"],
  [16, 4, "Machoke"],
  [17, 4, "Machamp"],
  [1, 5, "Bellsprout"],
  [2, 5, "Weepinbell"],
  [3, 5, "Victreebell"],
  [4, 5, "Tentacool"],
  [5, 5, "Tentacruel"],
  [6, 5, "Geodude"],
  [7, 5, "Graveler"],
  [8, 5, "Golem"],
  [9, 5, "Ponyta"],
  [10, 5, "Rapidash"],
  [11, 5, "Slowpoke"],
  [12, 5, "Slowbro"],
  [13, 5, "Magnemite"],
  [14, 5, "Magneton"],
  [15, 5, "Farfetch'd"],
  [16, 5, "Doduo"],
  [17, 5, "Dodrio"],
  [1, 6, "Seel"],
  [2, 6, "Dewgong"],
  [3, 6, "Grimer"],
  [4, 6, "Muk"],
  [5, 6, "Shellder"],
  [6, 6, "Cloyster"],
  [7, 6, "Gastly"],
  [8, 6, "Haunter"],
  [9, 6, "Gengar"],
  [10, 6, "Onix"],
  [11, 6, "Drowsee"],
  [12, 6, "Hypno"],
  [13, 6, "Krabby"],
  [14, 6, "Kingler"],
  [15, 6, "Voltorb"],
  [16, 6, "Electrode"],
  [17, 6, "Exeggcute"],
  [1, 7, "Exeggutor"],
  [2, 7, "Cubone"],
  [3, 7, "Marowak"],
  [4, 7, "Hitmonlee"],
  [5, 7, "Hitmonchan"],
  [6, 7, "Lickitung"],
  [7, 7, "Koffing"],
  [8, 7, "Weezing"],
  [9, 7, "Rhyhorn"],
  [10, 7, "Rhydon"],
  [11, 7, "Chansey"],
  [12, 7, "Tangela"],
  [13, 7, "Kangaskhan"],
  [14, 7, "Horsea"],
  [15, 7, "Seadra"],
  [16, 7, "Goldeen"],
  [17, 7, "Seaking"],
  [1, 8, "Staryu"],
  [2, 8, "Starmie"],
  [3, 8, "Mr.Mime"],
  [4, 8, "Scyther"],
  [5, 8, "Jynx"],
  [6, 8, "Electabuzz"],
  [7, 8, "Magmar"],
  [8, 8, "Pinsir"],
  [9, 8, "Tauros"],
  [10, 8, "Magikarp"],
  [11, 8, "Gyarados"],
  [12, 8, "Lapras"],
  [13, 8, "Ditto"],
  [14, 8, "Eevee"],
  [15, 8, "Vaporeon"],
  [16, 8, "Jolteon"],
  [17, 8, "Flareon"],
  [1, 9, "Pokeball"],
  [2, 9, "Porygon"],
  [3, 9, "Omanyte"],
  [4, 9, "Omastar"],
  [5, 9, "Kabuto"],
  [6, 9, "Kabutops"],
  [7, 9, "Aerodactyl"],
  [8, 9, "Snorlax"],
  [9, 9, "Articuno"],
  [10, 9, "Zapdos"],
  [11, 9, "Moltres"],
  [12, 9, "Dratini"],
  [13, 9, "Dragonair"],
  [14, 9, "Dragonite"],
  [15, 9, "Mewtwo"],
  [16, 9, "Mew"],
  [17, 9, "Pokeball"],
];

// ---------Get data from local storage-------------------------//
let highScores = [];
if(localStorage.getItem("scores") !== null) {
  var storageArray = JSON.parse(localStorage.getItem("scores"));
  highScores = storageArray.map(x => x);
}
//--Display/Undisplay stuff and begin timed quiz with questions------//

function beginQuiz() {
  startButton.style.display = "none";
  scoresButton.style.display = "none";
  questionsContainer.style.display = "inline";
  h3.textContent = "Who's that Pokemon?";
  generateQAndA();
  generateMultipleChoice();
  countDown = setInterval(decreaseTimer, 1000);
  timeChecker = setInterval(checkTime, 100);
  choice1.addEventListener("click", answerQuestion);
  choice2.addEventListener("click", answerQuestion);
  choice3.addEventListener("click", answerQuestion);
  choice4.addEventListener("click", answerQuestion);
}

//------Checks if the time is zero more accurately-----//
function checkTime() {
  if(time <= 0) {
    clearInterval(countDown);
    clearInterval(timeChecker);
    displayResults();
  }
}

//------------Decrease time and display it-------------//
function decreaseTimer() {
  time--;
  timeLeft = `Time Left: ${time}s`;
  timer.textContent = timeLeft;
}

//----Display items from the saved local storage----//
function displayScoreList() {
  root = document.getElementById("score-list");
  h3.textContent = "Saved Scores";
  imgs.style.display = "none";
  for (let i = 0; i < highScores.length; i++) {
    var player = document.createElement("li");
    var playerData = document.createElement("li");
    player.textContent = highScores[i].fName;
    playerData.textContent = " Accuracy: " + highScores[i].accuracy + 
    " Answered Correctly: " + highScores[i].correct + " Answered Incorrectly: " + highScores[i].incorrect;
    root.appendChild(player);
    root.appendChild(playerData);
  }
  startButton.style.display = "none";
  scoresButton.style.display = "none";
  homeButton.style.display = "block";
}

//---------Display results and buttons------------//
function displayResults() {
  questionsContainer.style.display = "none";
  imgs.style.display = "none";
  results.style.display = "block";
  saveButton.style.display = "block";
  homeButton.style.display = "block";
  h3.textContent = "Your Results";
  results.children[0].textContent = `You answered ${answerCorrect} correctly and ${answerIncorrect} incorrectly.`;
}

//-----Save results to an array and then store that array in the local storage---//
function saveResults() {
  var name = document.getElementById("savedName").value;
  var acc = ((answerCorrect / totalAnswered) * 100).toPrecision(4);
  const score = {
    fName: name,
    accuracy: acc,
    correct: answerCorrect,
    incorrect: answerIncorrect
  };

  highScores.push(score);
  localStorage.setItem("scores", JSON.stringify(highScores));
  var scoreObj = JSON.parse(localStorage.getItem("scores"));
  goHome();
}

//---Save answer, whether correct or incorrect, move on to next question------/
function answerQuestion(element) {
  var choice = element.currentTarget.textContent;
  if(choice === answer) {
    answerCorrect++;
    feedback.textContent = "Correct!";
  }
  else if(choice !== answer) {
    answerIncorrect++;
    time--;
    feedback.textContent = "Wrong.";
  }
  totalAnswered++;
  generateQAndA();
  generateMultipleChoice();
}

//---Randomly generate question from our master array
function generateQAndA() {
  do {
    var randomIndex = Math.floor(Math.random() * master.length);
    if(randomIndex !== 0)
      randomIndex--;
    console.log("Index of: " + randomIndex + " Array Value: " + master[randomIndex][2]);
  } while (master[randomIndex][2] === "Pokeball");
  var randomCol = master[randomIndex][0];
  var randomRow = master[randomIndex][1];
  answer = master[randomIndex][2];
  imgs.style.background = `url(images/pokemon-list.jpeg) var(--column${randomCol}) var(--row${randomRow})`;
}

//----Randomly put the correct answer into a multiple choice of 4.
function generateMultipleChoice () {
  var randomAnswer = Math.floor(Math.random() * 4 + 1);

  if(randomAnswer === 1) {
    choice1.textContent = answer;
  }
  else {
    do {
      var randomIndex = Math.floor(Math.random() * master.length);
      if(randomIndex !== 0)
        randomIndex--;
    } while (master[randomIndex][2] === answer && master[randomIndex][2] === "Pokeball");
    choice1.textContent = master[randomIndex][2];
  }

  if(randomAnswer === 2) {
    choice2.textContent = answer;
  }
  else {
    do {
      var randomIndex = Math.floor(Math.random() * master.length);
      if(randomIndex !== 0)
        randomIndex--;
    } while (master[randomIndex][2] === answer && master[randomIndex][2] === "Pokeball");
    choice2.textContent = master[randomIndex][2];
  }

  if(randomAnswer === 3) {
    choice3.textContent = answer;
  }
  else {
    do {
      var randomIndex = Math.floor(Math.random() * master.length);
      if(randomIndex !== 0)
        randomIndex--;
    } while (master[randomIndex][2] === answer && master[randomIndex][2] === "Pokeball");
    choice3.textContent = master[randomIndex][2];
  }

  if(randomAnswer === 4) {
    choice4.textContent = answer;
  }
  else {
    do {
      var randomIndex = Math.floor(Math.random() * master.length);
      if(randomIndex !== 0)
        randomIndex--;
    } while (master[randomIndex][2] === answer && master[randomIndex][2] === "Pokeball");
    choice4.textContent = master[randomIndex][2];
  }
}

//-----------To reload the page and reset all the values-----------//
function goHome() {
  location.reload();
}