
let theta = []
let dir = []
let d = []
let c = []
let n = 2000
let i = 0;
// var colors = ['#d96299', '#733csf', '#4637a6', '#72f2es', '#f2eeac', '#f2b56b', '#f2884b', '#bf5934', '#207368', '#54acbf', '#b6f2f2', '#d9798b', '#a6445e', '#026873', '#03a6a6', '#6a73a6', '#adb8d9'];
// var randomColor = colors[Math.floor(Math.random()*colors.length)];
var magic = Math.random()*12
let randomX = Math.random() * ((window.innerWidth*.5)-(window.innerWidth*-.5)) + (window.innerWidth*-.5);
let randomY = Math.random() * ((window.innerHeight*.5)-(window.innerHeight*-.5)) + (window.innerHeight*-.5);
console.log(randomX + "," + randomY);
var r = Math.random()*255
var g = Math.random()*55
var b = Math.random()*255
var a = 1
// var timesRan = 0

//allows the function to be executed on repeat around 2000 times?
// let int = setInterval(function(){
//    i = i+1;
//    if(i>1){
//       clearInterval(int);
//       noLoop()
//    } else {
//       magic = Math.random()*12
//       randomColor = colors[Math.floor(Math.random()*colors.length)];
//    }
// }, 2000)

setInterval(function(){
      r = Math.random()*20
      g = Math.random()*255
      b = Math.random()*255
      magic = Math.random()*12
      timesRan++
      // randomColor = colors[Math.floor(Math.random()*colors.length)];
}, 2000)

console.log(magic)

//sets up canvas, stroke, and text size
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  strokeWeight(1)
  stroke('black')
  blendMode(SCREEN)
  textSize(random(5, 22))

//controls the location of composition
  for (let i = 0; i < n; i++) {
    theta.push(random(0, 2 * PI))
    dir.push([-1, 1][round(1)])
    d.push(random(30, 800))
    c.push(createVector(870, 500))
  }
}

//words used in composition
var word = ['f', 'o', 'r', 'e', 'v', 'e', 'r']
var word2 = ['t', 'i', 'm', 'e']
var word3 = ['f', 'a', 's', 't']
var word4 = ['s', 'l', 'o', 'w']
//randomizes words picked
var words = [word, word2, word3, word4]
var pickWord = words[Math.floor(Math.random()*words.length)]
var wordCounter = 0;


//picks random compositions 
function draw() { 
      // if (timesRan === 3) {
      //       noLoop();
      // }
    translate(randomX, randomY);
    console.log(r, g, b)
    fill(r, g, b);
//     fill(randomColor);

    for (let i = 0; i < n; i++) {
      theta[i] = theta[i] + PI / random(100, 800) * dir[i]

      if(magic > 1 && magic <= 2){
            x = c[i].x - d[i] / tan(theta[i])
            y = c[i].y + d[i] * sin(theta[i]) 
            console.log('2')

      }
      else if(magic > 2 && magic <= 3){
            x = c[i].x - d[i] * tan(theta[i])
            y = c[i].y + d[i] * sin(theta[i])
            console.log('3')

      }
      else if(magic > 3 && magic <= 4){
            x = c[i].x - d[i] * cos(theta[i])
            y = c[i].y + d[i] * tan(theta[i])
            console.log('4')
 
      }
      else if(magic > 4 && magic <= 5){
            x = c[i].x - d[i] / cos(theta[i])
            y = c[i].y + d[i] * tan(theta[i])
            console.log('5')

      }
      else if(magic > 5 && magic <= 6){
            x = c[i].x - d[i] * cos(theta[i])
            y = c[i].y + d[i] / tan(theta[i])
            console.log('6')

      }
      else if(magic > 6 && magic <= 7){
            x = c[i].x - d[i] / cos(theta[i])
            y = c[i].y + d[i] * cos(theta[i])
            console.log('7')

      }
      else if(magic > 7 && magic <= 8){
            x = c[i].x - d[i] * cos(theta[i])
            y = c[i].y + d[i] / cos(theta[i])
            console.log('8')

      }
      else if(magic > 8 && magic <= 9){
            x = c[i].x - d[i] * cos(theta[i])
            y = c[i].y + d[i] / sin(theta[i])
            console.log('9')

      }
      else if(magic > 9 && magic <= 10){
            x = c[i].x - d[i] / tan(theta[i])
            y = c[i].y + d[i] / sin(theta[i])
            console.log('10')
      }
      else if(magic > 10 && magic <= 11){
            x = c[i].x - d[i] / cos(theta[i])
            y = c[i].y + d[i] * sin(theta[i])
            console.log('11')

      }
      else if(magic > 11 && magic <= 12){
            x = c[i].x - d[i] * cos(theta[i])
            y = c[i].y + d[i] * sin(theta[i])
            console.log('12')
      }
      text(pickWord[wordCounter], x, y)
      wordCounter+=1
      if(wordCounter > pickWord.length){
        wordCounter = 0;
      }
    }
}

//below is the magicccc where random variables were added
//line
      // x = c[i].x - d[i] * tan(theta[i])
      // y = c[i].y + d[i] * tan(theta[i])
//horizontal eye 
      // x = c[i].x - d[i] / tan(theta[i])
      // y = c[i].y + d[i] * sin(theta[i])
//horizontal X   
      // x = c[i].x - d[i] * tan(theta[i])
      // y = c[i].y + d[i] * sin(theta[i])
//vertical eye cascade
      // x = c[i].x - d[i] * cos(theta[i])
      // y = c[i].y + d[i] * tan(theta[i])
//left&right cascade
      // x = c[i].x - d[i] / cos(theta[i])
      // y = c[i].y + d[i] * tan(theta[i])
//vertical X
      // x = c[i].x - d[i] * cos(theta[i])
      // y = c[i].y + d[i] / tan(theta[i])
//even more diagonal tubes
      // x = c[i].x - d[i] / cos(theta[i])
      // y = c[i].y + d[i] * cos(theta[i])
//diagonal tubes
      // x = c[i].x - d[i] * cos(theta[i])
      // y = c[i].y + d[i] / cos(theta[i])
//top&bottom tubes
      // x = c[i].x - d[i] * cos(theta[i])
      // y = c[i].y + d[i] / sin(theta[i])

      // x = c[i].x - d[i] / tan(theta[i])
      // y = c[i].y + d[i] / sin(theta[i])
//left&right tubes
      // x = c[i].x - d[i] / cos(theta[i])
      // y = c[i].y + d[i] * sin(theta[i])
//circles
      // x = c[i].x - d[i] * cos(theta[i])
      // y = c[i].y + d[i] * sin(theta[i])

      // translate(50, 50)