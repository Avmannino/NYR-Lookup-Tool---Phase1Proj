const rangersAPI = "http://localhost:3000/players";
const playerInfoDiv = document.getElementById("player-info");
const mugshotMenuDiv = document.getElementById("mugshot-menu");
const playerImageDisplay = document.querySelector(".player-image");
const playerName = document.querySelector(".player-name");
const playerNumber = document.querySelector(".player-number");
const playerAge = document.querySelector(".player-age");
const playerCountry = document.querySelector(".player-country");
const playerPosition = document.querySelector(".player-position");

// Fetch JSON data from local server
fetch(rangersAPI)
  .then(response => response.json())
  .then(renderPlayers);

function renderPlayers(players) {
  players.forEach(renderPlayersImg);
}
  function renderPlayersImg(player) {
    const playerImageDisplay = document.createElement('img');
    
    // Creating a content container for player images
    const playerContainer = document.createElement("div");
    playerContainer.setAttribute("class", "container");
    playerImageDisplay.src = player.image;
    playerContainer.append(playerImageDisplay);
    mugshotMenuDiv.append(playerContainer);

    // Adds 'click' evlistener to player image
  playerImageDisplay.addEventListener('click', () => {
    displayPlayerInfo(player);
  })
  // Appends "stats" data to DOM for use with hover event listeners below
  const playerImage = document.getElementById("player-image");
  const stats = document.createElement("div");

  // Sets "stats" data to be hidden when User first loads or refreshes page
  stats.setAttribute("class", "hidden")
  stats.textContent = player.stats;
  playerContainer.append(stats);

  // Adds mouse hover event listener
  playerImageDisplay.addEventListener("mouseenter", () => {
    stats.classList.toggle("hidden");
  })
  // Adds mouse (exit) hover event listener
  playerImageDisplay.addEventListener("mouseout", () => {
    stats.classList.toggle("hidden");
  })
  }
const displayPlayerInfo = (player) => {
  playerImageDisplay.src = player.image;
  playerName.textContent = player.name;
  playerNumber.textContent = player.number;
  playerAge.textContent = player.age;
  playerCountry.textContent = player.country;
  playerPosition.textContent = player.position; 
}