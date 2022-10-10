// variables decarations:
let audioElement= new Audio('1.mp3');
let masterplay= document.getElementById('masterplay');
let bar= document.getElementById('bar');
let gif = document.getElementById('gif');
let mastename = document.getElementById('mastername');
let songIndex = 0;
let songname = document.getElementsByClassName('songname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

// soong list with cover path
let songs =[
    {songname:"SHOORVEER - Rap Album", filepath:"1.mp3", coverpath:"https://i.scdn.co/image/ab67616d0000b273ade1e1efa9e20ab53147651e"},
    {songname:"Deva Deva -  Brahmastra", filepath:"2.mp3", coverpath:"https://img.pagalworld.icu/62f116e39c5e2-128Deva%20Deva%20-%20Brahmastra%20128%20Kbps.jpg"},
    {songname:"shoorveer reloaded", filepath:"3.mp3", coverpath:"https://i.scdn.co/image/ab67616d0000b2734cb746742f164d1a0cc91c5f"},
    {songname:"AC-DC - Thunderstrom", filepath:"4.mp3", coverpath:"https://m.media-amazon.com/images/I/91JgGHf4ilL.jpg"},
    {songname:"Ghamand Kar - Tahnaji", filepath:"5.mp3", coverpath:"https://c.saavncdn.com/555/Tanhaji-The-Unsung-Warrior-Hindi-2020-20200108084000-500x500.jpg"},
    {songname:"Hari Har - Samrat Prutviraj", filepath:"6.mp3", coverpath:"https://s3images.zee5.com/wp-content/uploads/2022/05/prithviiiiraaj2022051214495720220512150452.jpg"},
    {songname:"Kesariya - Bhahmastra", filepath:"7.mp3", coverpath:"https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62"},
    {songname:"Shiva Tandava", filepath:"8.mp3", coverpath:"https://www.bhaktiphotos.com/wp-content/uploads/2021/01/Bhagwan-Shiva-Tandav-Rudra-Stotram-Picture.jpg"},
    
]

// itterate all songs and cover 
songitem.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})

// Play/ Pause button 
masterplay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
  else {
    audioElement.pause();
     masterplay.classList.add('fa-circle-play');
     masterplay.classList.remove('fa-circle-pause');
    gif.style.opacity=0;
 }
})

// listen to all events , bar time update
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    bar.value = progress;
})
bar.addEventListener('change',()=>{
    audioElement.currentTime = bar.value * audioElement.duration/100;
})

// when click on any song play the spesific song
const makeAllPlay = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
  element.classList.remove('fa-circle-pause');
  element.classList.add('fa-circle-play');
 })
}

// song list play pause effect 
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlay();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `${songIndex+1}.mp3`;
    mastername.innerText = songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    })
})

// when click on next button the next song will play
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=7){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `${songIndex+1}.mp3`;
  mastername.innerText = songs[songIndex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');

})

// when click on previous  button the next song will play
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `${songIndex+1}.mp3`;
  mastername.innerText = songs[songIndex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');

})

