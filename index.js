let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
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

function oneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function twoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function threeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}