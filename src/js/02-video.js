import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playerTime = localStorage.getItem('videoplayer-current-time');
const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

if (playerTime) {
  player.setCurrentTime(playerTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
