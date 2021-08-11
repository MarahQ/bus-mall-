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
  middleRandom = getRandomNumber( 0, picArray.length - 1 );
  rightRandom = getRandomNumber( 0, picArray.length - 1 );
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
  if ( ( Event.target.id === 'leftimg' || Event.target.id === 'middleimg' || Event.target.id === 'rightimg' ) && counter < chooseNum )
  { if ( Event.target.id === 'leftimg' ){
    Item.all[leftRandom].click++;
    if ( Event.target.id === 'middleimg' ){
      Item.all[middleRandom].click++;
      if ( Event.target.id === 'rightimg' ) {
        Item.all[rightRandom].click++;
      }
    }
  }
    run();
    counter++;
  }
  //function removeHandler() {
    //document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
  //}
  console.log( Event );
}
function getRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
result.addEventListener( 'click', viewResult );
function viewResult(){
  const ul = document.createElement('ul')
  clickDiv
  for ( let i=0; i < Item.all.length; i++ )
  let li = document.createElement( 'li' )
li.textContent = `${Item.all[i].name} had ${Item.all[i].click} votes, and was seen ${Item.all[i].disply} times`
ul.appendChild( li )
}
if (counter >= chooseNum ){
  imageCatalog.removeEventListener('click', chooseCounter);
}