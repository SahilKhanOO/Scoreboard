let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0
function oneHome() {
    homeScore += 1
    homeEl.textContent = homeScore
}
function twoHome() {
    homeScore += 2
    homeEl.textContent = homeScore
}
function threeHome() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function oneAway() {
    awayScore += 1
    awayEl.textContent = awayScore
}
function twoAway() {
    awayScore += 2
    awayEl.textContent = awayScore
}
function threeAway() {
    awayScore += 3
    awayEl.textContent = awayScore
}