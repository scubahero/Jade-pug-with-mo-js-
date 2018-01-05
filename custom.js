// Animation One
var burst = new mojs.Burst({
    radius: { 0: 50 },
    count: 30,
    children : {
      shape: 'circle',
      stroke: 'pink',
      strokeWidth: { 160: 0},
      angle: { 360: 0},
      radius: { 50 : 10 },
      duration: 3000
    }
});

document.getElementById('animation1').addEventListener('click', playAnimation);

function playAnimation() {
    burst.play();
}
// Animation Two
var burst1 = new mojs.Burst({
    radius: { 0: 50 },
    count: 20,
    children : {
      shape: 'zigzag',
      stroke: {'yellow' : 'orange'},      
      strokeWidth: { 160: 0},
      angle: { 360: 0},
      radius: { 50 : 10 },
      duration: 3000
    }
});

document.getElementById('animation2').addEventListener('click', playAnimationTwo);

function playAnimationTwo() {
    burst1.play();
}
  

// Animation Tree
var burst2 = new mojs.Burst({
    radius: { 0: 200 },
    count: 5,
    children : {
      color: 'purple',
      points: 10,
      angle: { '360': 0},
      radius: { 90 : 10 },
      opacity: { 1: 0},
      duration: 4000,
    }
});

document.getElementById('animation3').addEventListener('click', playAnimationThree);

function playAnimationThree() {
    burst2.play();
}

// Animation Four
const burst3 = new mojs.Burst({
    radius: { 0: 200 },
    count: 12,
    children : {
      shape: 'polygon',
      points: 7,
      stroke: {'magenta' : 'pink'},
      fill: 'none',
      strokeWidth: { 6: 0},
      angle: { '-360': 0},
      radius: { 30 : 5 },
      opacity: { 1: 0},
      duration: 3000
    }
});

document.getElementById('animation4').addEventListener('click', playAnimationFour);

function playAnimationFour() {
    burst3.play();
}

// Animation Five
const burst4 = new mojs.Burst({
    radius: { 0: 400 },
    count: 5,
    children : {
      shape: 'circle',
      points: 2,
      stroke: {'red' : 'blue'},
      fill: 'orange',
      strokeWidth: { 6: 0},
      angle: { '360': 0},
      radius: { 30 : 5 },
      opacity: { 0: 1},
      duration: 3000
    }
});

document.getElementById('animation5').addEventListener('click', playAnimationFive);

function playAnimationFive() {
    burst4.play();
}


// Animation Six
document.getElementById('animation6').addEventListener('click', playAnimationSix);

function playAnimationSix() {
    burst1.play();
    burst2.play();
    burst3.play();
    burst4.play();
}
