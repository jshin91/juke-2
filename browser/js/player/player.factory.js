'use strict';

juke.factory('PlayerFactory', function($log, $http, $rootScope){
  var songPlaying = false;
  var currentSong = null;
  var songs, songList;
  
  $http.get('/api/albums')
  .then(function(albums){
    console.log(albums)
    return albums.data[1];
  })
  .then(function(album){
    songList = album.songs
  }).catch($log.error);
  
  var audio = document.createElement('audio');
  // non-UI logic in here
  function pause() {
    audio.pause();
    songPlaying = false;
  }
  
  function start(song, songList) {
  	pause();
    currentSong = song;
  	audio.src = currentSong.audioUrl
    audio.load();
    audio.play();
    songPlaying = true;
  }
  
  function resume() {
    audio.play();
    songPlaying = true;
  }
  
  function isPlaying () {
    return songPlaying;
  }
  
  function getCurrentSong () {
    return currentSong;
  }
  
  function next () {
    
  }
  
  return {
  	start: start,
    pause: pause,
    resume: resume,
    isPlaying: isPlaying,
    getCurrentSong: getCurrentSong,
    next: next
  };
});

