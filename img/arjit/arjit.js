let music = new Audio('/audio/arjit/1.mp3');
// music.play();


const songs = [
    {
        id: 1,
        songname: `Faded1 
        </div>   
        <div class="singer" id="singer">
        Alanwalkerda`,
        poster: "/img/arjit/1.jpg"

    },
    
    {
        id: 5,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/5.jpg"

    },
    {
        id: 6,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/6.jpg"

    },
    {
        id: 2,
        songname: `Faded2 
        </div>   
        <div class="singer" id="singer">
         Alan walker`,
        poster: "/img/arjit/2.jpg"

    },
    {
        id: 3,
        songname: `Faded3 
        </div>   
        <div class="singer" id="singer">
         Alan walker`,
        poster: "/img/arjit/3.jpg"

    },
    {
        id: 4,
        songname: `Faded4 
        </div>   
        <div class="singer" id="singer">
         Alan war`,
        poster: "/img/arjit/4.jpg"

    },
    {
        id: 7,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/7.jpg"

    },
    {
        id: 8,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/8.jpg"

    },
    {
        id: 9,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/9.jpg"

    },
    {
        id: 10,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/10.jpg"

    },
    {
        id: 11,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/11.jpg"

    },
    {
        id: 12,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/12.jpg"

    },
    {
        id: 13,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/13.jpg"

    },
    {
        id: 14,
        songname: `Fadedhjghj 
        </div>   
        <div class="singer" id="singer">
         Alan walker278`,
        poster: "/img/arjit/14.jpg"

    },
   

];


let play = document.getElementById('play');
let wave = document.getElementById('wave')

play.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        play.classList.remove('bi-pause-fill');
        play.classList.add('bi-play-fill');
    }

})







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let image_container = document.getElementById('image_container');

pop_song_right.addEventListener('click', () => {
    image_container.scrollLeft += 140;
})
pop_song_left.addEventListener('click', () => {
    image_container.scrollLeft -= 140;
})
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');

let image_container2 = document.getElementById('image_container2');

pop_art_right.addEventListener('click', () => {
    image_container2.scrollLeft += 100;
})
pop_art_left.addEventListener('click', () => {
    image_container2.scrollLeft -= 100;
})



let index = 0;
let master_img = document.getElementById('master_img');
let maintitle = document.getElementById('maintitle');

Array.from(document.getElementsByClassName('bi-play')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        console.log(index );
        music.src = `/audio/arjit/${index}.mp3`;
        master_img.src = `/img/arjit/${index}.jpg`
        music.play();
        wave.classList.add('active1');
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');

        let title = songs.filter((els) => {
            return els.id == index;
        });

        title.forEach(elss => {
            let { songname } = elss;
            maintitle.innerHTML = songname;
        })
    })
});




let time_start = document.getElementById('time_start');
let time_end = document.getElementById('time_end');
let seek = document.getElementById('seek');
let dot = document.getElementById('dot');
let bar2 = document.getElementsByClassName('bar2')[0];

music.addEventListener('timeupdate', () => {
    let music_cur = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_cur / 60);
    let sec1 = Math.floor(music_cur % 60);
    if (sec1 < 10 ) {
        sec1 = `0${sec1}`;
    }
    time_start.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_dur / 60);
    let sec2 = Math.floor(music_dur % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    time_end.innerHTML = `${min2}:${sec2}`;

    time_start.innerHTML = `${min1}:${sec1}`;
    time_end.innerHTML = `${min2}:${sec2}`;

    let progressbar = parseInt((music_cur / music_dur) * 100);
    seek.value = progressbar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})



let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let val_bar = document.getElementsByClassName('val_bar')[0];

vol.addEventListener('change', () => {
    console.log(vol.value);
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 75) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_action = vol.value;
    val_bar.style.width = `${vol_action}%`;
    vol_dot.style.left = `${vol_action}%`;

    music.volume = (vol_action / 100);

})




let previos = document.getElementById('previos');
let next = document.getElementById('next');

previos.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('image')).length;
    }
    music.src = `/audio/arjit/${index}.mp3`;
    master_img.src = `/img/arjit/${index}.jpg`
    music.play();
    wave.classList.add('active1');
    play.classList.remove('bi-play-fill');
    play.classList.add('bi-pause-fill');

    let title = songs.filter((els) => {
        return els.id == index;
    });

    title.forEach(elss => {
        let { songname } = elss;
        maintitle.innerHTML = songname;
    });
})


next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('image')).length) {
        index = 1;
    }
    music.src = `/audio/arjit/${index}.mp3`;
    master_img.src = `/img/arjit/${index}.jpg`
    music.play();
    wave.classList.add('active1');
    play.classList.remove('bi-play-fill');
    play.classList.add('bi-pause-fill');

    let title = songs.filter((els) => {
        return els.id == index;
    });

    title.forEach(elss => {
        let { songname } = elss;
        maintitle.innerHTML = songname;
    });
})

let like = document.getElementById('like');
let fav = new Array 
let z = 0;
like.addEventListener('click', () =>{

    if(index == z)
    {
        if(like.style.color != 'red')
        {
            like.style.color = 'red';
            fav.push(index);
        }else
        {
            like.style.color = '';
        }
    }else
    {
        like.style.color = '';
    }

    z = index;
})




Array.from(document.getElementsByClassName('image')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('div')[0].innerHTML = songs[i].songname;
});