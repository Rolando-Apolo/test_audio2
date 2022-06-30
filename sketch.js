let song;
let sliderVol;
let sliderVal;
let sliderPan;
let sliderPanval;
let sliderRate;
let sliderRateval;
let buttonPlay;

function preload() {
  //song = loadSound('tecladomp.mp3');
  //song = loadSound('https://raw.githubusercontent.com/Rolando-Apolo/audios/main/tecladomp.mp3');
  song = loadSound('https://cdn.freesound.org/previews/425/425556_4929134-lq.mp3');
}

function setup() {
  createCanvas(200, 200);
  sliderVol = createSlider(0, 1, 0, 0.01); 
  sliderPan = createSlider(-1, 1, 0, 0.01); 
  sliderRate = createSlider(-2, 3, 1, 0.01); 

  buttonPlay = createButton("Play");
  buttonPlay.mousePressed(botonPlay);  

  //song.loop();
  //song.play();
}

/*
function botonPlay(){
  if(! song.isPlaying()){
    //song.play();
    song.loop();
    buttonPlay.html('Pause'); 
  } else{
    song.pause(); 
    buttonPlay.html('Play');
  } */
  
  function botonPlay(){
    if( song.isPlaying()){
      song.pause();
      buttonPlay.html('Play')
    } else {
      song.loop(); 
    buttonPlay.html('Pause');
    }

  }

function draw() {
  background(200);
  sliderVal = sliderVol.value();
  sliderPanval = sliderPan.value(); 
  sliderRateval = sliderRate.value();  

  song.setVolume(sliderVal);
  song.pan(sliderPanval); 
  song.rate(sliderRateval); 

}
