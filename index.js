// intialize the variable

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressbar = document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));



let songs=[
{songName:"abc1",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"ab2",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
{songName:"ab3",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
{songName:"abc4",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
{songName:"abc5",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
{songName:"abc6",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
{songName:"abc7",f7ilePath:"song/7.mp3",coverPath:"covers/7.jpg"},
{songName:"abc8",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
{songName:"abc9",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
{songName:"abc10",filePath:"song/10.mp3",coverPath:"covers/10.jpg"},
];

songitems.forEach((element,i)=>{
    console.log(element,i,audioElement);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText=songs[i].songName;
  
})
// handle play pause click
 
masterplay.addEventListener('click',()=>{
if (audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add('fa-pause-circle');  
    gif.style.opacity=1;

}

else {

audioElement.pause();
masterplay.classList.remove("fa-pause-circle");
masterplay.classList.add('fa-play-circle'); 
gif.style.opacity=0; 

}

})


audioElement.addEventListener('timeupdate',()=>{
// update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressbar.value=progress;


})


myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=parseInt((myProgressbar.value*audioElement.duration)/100);
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');
        
        })
    

}


Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       index=parseInt(e.target.id);
        console.log(e.target);
        makeAllPlays();
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`songs/${index+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');

    })



})