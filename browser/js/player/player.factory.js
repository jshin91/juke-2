'use strict';

juke.factory('PlayerFactory', function(){

  var audio = document.createElement('audio');
  // non-UI logic in here

  function start(song) {
  	audio.pause();
  	audio.src = song.audioUrl
    audio.load();
    audio.play();
  }
  return {
  	start: start
  };
});

