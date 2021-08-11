/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable indent */
'use strict';
// eslint-disable-next-line no-unused-vars
let picArray = [

  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg'
];
//constructor
//New obj
// prototype render
// get by id
// Event Handler
let prevArray = [];
const imageCatalog = document.getElementById( 'imageCatalog' );
let result = document.getElementById( 'result' );
let counter = 0;
let chooseNum = 25;
let leftImg = document.getElementById( 'leftimg' );
let middleImg = document.getElementById( 'middleimg' );
let rightImg = document.getElementById( 'rightimg' );
let leftRandom = 0;
let middleRandom = 0;
let rightRandom = 0;
 let clickDiv = document.getElementById( 'click' );
  let localStorage.data = JSON.stringify(picArray)
function Item( name, imgsrc ) {
  this.name = name;
  this.imgpath = imgsrc;
  this.disply = 0;
  this.click = 0;
  Item.all.push( this );
}
Item.all = [];

// eslint-disable-next-line no-empty
for ( let i = 0; i < picArray.length; i++ ) {
  new Item( picArray[i].split( '.' )[0], picArray[i], picArray[i] );
}
console.log( Item.all );
function run() {
  // eslint-disable-next-line no-undef
  leftRandom = getRandomNumber( 0, picArray.length - 1 );

  do {
    middleRandom = getRandomNumber( 0, picArray.length - 1 );
    rightRandom = getRandomNumber( 0, picArray.length - 1 );

  } while ( leftRandom === middleRandom || leftRandom === rightRandom ||
    middleRandom === rightRandom || prevArray.includes( leftRandom ) || prevArray.includes( middleRandom ) || prevArray.includes( rightRandom ) );

  
  prevArray = [leftRandom, middleRandom, rightRandom];


  leftImg.src = './img/' + Item.all[leftRandom].imgpath;
  middleImg.src = './img/' + Item.all[middleRandom].imgpath;
  rightImg.src = './img/' + Item.all[rightRandom].imgpath;

  Item.all[leftRandom].disply++;
  Item.all[middleRandom].disply++;
  Item.all[rightRandom].disply++;
  console.log( Item.all );
}
run();
imageCatalog.addEventListener( 'click', chooseCounter );
function chooseCounter( Event ) {
  if ( ( Event.target.id === 'leftimg' || Event.target.id === 'middleimg' || Event.target.id === 'rightimg' ) && counter < chooseNum ) {
    if ( Event.target.id === 'leftimg' ) {
      Item.all[leftRandom].click++;
      if ( Event.target.id === 'middleimg' ) {
        Item.all[middleRandom].click++;
        if ( Event.target.id === 'rightimg' ) {
          Item.all[rightRandom].click++;
        }
      }
    }
    run();
    counter++;
  }

  console.log( Event );
}
function getRandomNumber( min, max ) {
  let random;
  let allowed;
  do {
    random = Math.floor( Math.random() * ( max - min + 1 ) + min );
    allowed = true;

    for ( let i = 0; i < prevArray.length; i++ ) {
      if ( random === prevArray[i] ) {
        allowed = false;
      }
    }
  } while ( !allowed ); {

  }
  return random;
}
result.addEventListener( 'click', viewResult );
function viewResult() {
  if ( counter < chooseNum ) {

  const ul = document.createElement( 'ul' );

  clickDiv.appendChild( ul );
  for ( let i = 0; i < Item.all.length; i++ ) {
    let li = document.createElement( 'li' );
    li.textContent = `${Item.all[i].name} had ${Item.all[i].click} votes, and was seen ${Item.all[i].disply} times`;
    ul.appendChild( li );
  }
  creatChart();
}
}
if ( counter >= chooseNum ) {
imageCatalog.removeEventListener( 'click', chooseCounter );}


 function creatChart() {
  let names = [];
  let votes = [];
  let clicks = [];
  for ( let i = 0; i < Item.all.length; i++ ) {
    names.push( Item.all[i].name );
    votes.push( Item.all[i].disply );
    clicks.push( Item.all[i].click );}
  var ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  var myChart = new Chart( ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '# of clicks',
        data: clicks,
        backgroundColor: 'rgba(222, 90, 120, 0.2)',
        borderColor: 'rgba(233, 80, 120, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  } );
}
function getData() {
  if (localStorage.data){
let data = JSON.parse(localStorage.data[i]);
for (let i = 0; i < data.length; i++) {
  new imgConstructor(data[i].split('.')[0],data[i]);
  
}
  }else {
    for (let i = 0; i < picArray.length; i++) {
   new imgConstructor(picArray[i].split('.')[0], picArray[i]);
    
  }
  
}}