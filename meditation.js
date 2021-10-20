window.onload= function(){

    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const video = document.querySelector('.vid-container video');
    const outline = document.querySelector('.moving-outline circle');
    const timeSelect = document.querySelectorAll('.time-select button');

    // songs
    const sounds = document.querySelectorAll('.sound-picker img');
    //time display
    const timeDisplay = document.querySelector('.time-display');
    // get the length
    const outLineLength = outline.getTotalLength();
    
    let faketimer =600;
    outline.style.strokeDasharray = outLineLength;
    outline.style.strokeDashoffset = outLineLength;

// Play different sounds
    sounds.forEach(sound=>{
        sound.addEventListener('click', function(){
            video.src = this.getAttribute('data-video');
            song.src = this.getAttribute('data-sound');
            checkPLaying(song);
        })
    });


//  Play & Pause button
    play.addEventListener('click', ()=>{
       checkPLaying(song);
   });

//    Select song
   timeSelect.forEach(option =>{
    option.addEventListener('click', function(){
        faketimer = this.getAttribute('data-time');
        timeDisplay.innerHTML = `${Math.floor(faketimer/60)}:${faketimer%60}`
    });
   });



   const checkPLaying= song=>{
       if(song.paused){
           song.play();
           video.play();
           play.src= "Images/pause.png"
       }else{
           song.pause();
           video.pause();
           play.src ="Images/play.png"
       }
   };

//    Animate the Circle
   song.ontimeupdate= ()=>{
        let currentTime = song.currentTime;
        let elapsed = faketimer -currentTime;
        let seconds = Math.floor(elapsed%60);
        let minutes = Math.floor(elapsed/60);

        let progress = outLineLength - (currentTime/faketimer)*outLineLength;
        outline.style.strokeDashoffset = progress;
        
        // Animate text
        timeDisplay.innerHTML = `${minutes}:${seconds}`;
        
        if(currentTime>=faketimer){
            song.pause();
            video.pause();
            song.currentTime=0;
            play.src = "Images/play.png"
        }
   };
};