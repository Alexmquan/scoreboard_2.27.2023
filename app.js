let home = 0
let away = 0

function reset() {
  home = 0
  away = 0
  let awayScore = document.getElementById('awayScore')
  awayScore.innerText = away
  let homeScore = document.getElementById('homeScore')
  homeScore.innerText = home
}

function away1() {
  console.log("Button is working")
  away += 1
  let awayScore = document.getElementById('awayScore')
  awayScore.innerText = away


}
function away3() {
  console.log("Button is working")
  away += 3
  console.log(away)
  let awayScore = document.getElementById('awayScore')
  awayScore.innerText = away

}

function home1() {
  console.log("Button is working")
  home += 1
  console.log(home)
  let homeScore = document.getElementById('homeScore')
  homeScore.innerText = home
}

function home3() {
  console.log("Button is working")
  home += 3
  console.log(home)
  let homeScore = document.getElementById('homeScore')
  homeScore.innerText = home
}




