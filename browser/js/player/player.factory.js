'use strict';

juke.factory('PlayerFactory', function($log, $http, $rootScope){
  var songPlaying = false;
  var currentSong = null;
  var songs;
  var songList = [];
//  var progress = 0;
  
  var audio = document.createElement('audio');
  
  function pause() {
    audio.pause();
    songPlaying = false;
  }
  
  function start(song, albumSongs) {
  	player.pause();
    songList = albumSongs;
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
    var nextSong;
    songList.forEach(function(song, index) {
      if(song.audioUrl === currentSong.audioUrl) {
        if(index == songList.length-1) {
          nextSong = songList[0];
        } else {
        nextSong = songList[index + 1];
        }
      }
    })
    player.start(nextSong, songList);
  }
  
  function previous () {
    var prevSong;
    songList.forEach(function(song, index) {
      if(song.audioUrl === currentSong.audioUrl) {
        if(index == 0) {
          prevSong = songList[songList.length-1];
        } else {
        prevSong = songList[index - 1];
        }
      }
    })
    player.start(prevSong, songList);
  }  
  
  function getProgress() {
    console.log(currentSong)
    console.log('audio', audio)
    var progress = 0;
    if(songPlaying) {
      progress = 100 * audio.currentTime / audio.duration;
    }
      console.log(audio.duration)
      console.log('currtime', audio.currentTime)
    return progress;
  }
  
    
    
//  audio.addEventListener('ended', $scope.next);
//  audio.addEventListener('timeupdate', function () {
//    progress = 100 * audio.currentTime / audio.duration;
//    console.log(audio.duration)
//  });
//    $rootScope.$digest(); // no Angular-aware code is doing this for us here
//    console.log(audio)
//    progress = 100 * audio.currentTime / audio.duration;
  
  
  var player = { 
  	start: start,
    pause: pause,
    resume: resume,
    isPlaying: isPlaying,
    getCurrentSong: getCurrentSong,
    next: next,
    previous: previous,
    getProgress: getProgress
  };
  return player;
});











