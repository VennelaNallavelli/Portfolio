console.log("Welcome to Gaana!");
let songindex=0;
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogresbar");
let gif=document.getElementById("gif");
let audioelement=new Audio("yr.mp3");
let songs=[
    {songname:"yr.mp3",filepath:"Downloads\yr.mp3",coverpath:"yr.jpeg"},
    {songname:"yr.mp3",filepath:"Downloads\yr.mp3",coverpath:"yr.jpeg"},
    {songname:"yr.mp3",filepath:"Downloads\yr.mp3",coverpath:"yr.jpeg"},
    {songname:"yr.mp3",filepath:"Downloads\yr.mp3",coverpath:"yr.jpeg"},
    {songname:"yr.mp3",filepath:"Downloads\yr.mp3",coverpath:"yr.jpeg"},
    {songname:"yr.mp3",filepath:"Downloads\yr.mp3",coverpath:"yr.jpeg"}
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value * audioelement.duration)/100;
})