import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', onPlay => {
    console.log('played the video!');
});
player.getVideoTitle().then(title => {
    console.log('title:', title);
});

player.on('timeupdate', throttle(event => {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000));
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime);
};





