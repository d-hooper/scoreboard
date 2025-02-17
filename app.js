// SECTION  BRAIN

let homeScore = 0

let awayScore = 0

// !SECTION

// SECTION  LOGIC

function updateHomeScore(amount) {
  homeScore += amount
  drawHomeScore()
}

function updateAwayScore(amount) {
  awayScore += amount
  drawAwayScore()
}

// !SECTION

// SECTION  DRAW/UPDATE

function drawHomeScore() {
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = homeScore
}

function drawAwayScore() {
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = awayScore
}

function resetScore() {
  homeScore = 0
  awayScore = 0
  drawHomeScore()
  drawAwayScore()
}

// !SECTION