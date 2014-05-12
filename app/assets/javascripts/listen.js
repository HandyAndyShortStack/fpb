$(function() {
  var playPause = $('#play-pause');

  $('#listen-link').on('click', function(event) {
    $('#listen').toggle();
    if ($('#listen').is(':visible')) {
      FPB.listening = true;
    } else {
      FPB.listening = false;
    }
    event.preventDefault();
  });

  if (new RegExp('^/listen$').test(location.pathname)) {
    console.log('listening');
  }

  if (!FPB.player) {
    FPB.player = new FPB.Player;
  }

  if (FPB.player.paused()) {
    playPause.removeClass('icon-pause').addClass('icon-play');
  } else {
    playPause.removeClass('icon-play').addClass('icon-pause');
  }

  FPB.player.getButtons();
  playPause.on('click', function() {
    setTimeout(function() {
      if (FPB.player.paused()) {
        FPB.player.play();
      } else {
        FPB.player.pause();
      }
    }, 0);
  });
});

FPB.Player = function () {
  FPB.Player.prototype.initialize.apply(this, arguments);
}

FPB.Player.prototype = {

  initialize: function() {
    this.initialized = true;
    this.songs = $('.song');
    this.currentSong = this.songs[0];
  },

  getButtons: function() {
    this.playPauseButton = $('#play-pause');
  },

  play: function() {
    this.currentSong.play();
    this.playPauseButton.removeClass('icon-play').addClass('icon-pause');
  },

  pause: function() {
    this.currentSong.pause();
    this.playPauseButton.removeClass('icon-pause').addClass('icon-play');
  },

  currentTime: function() {
    return this.currentSong.currentTime;
  },

  prettyTime: function() {
    var time = this.currentTime();
    var remainder = (time % 60).toString();
    return (Math.floor(time / 60)) + ':' + remainder[0] + remainder[2];
  },

  duration: function() {
    return this.currentSong.duration;
  },

  title: function() {
    return $(this.currentSong).data('title');
  },

  paused: function() {
    return this.currentSong.paused;
  },

  playing: function() {
    return !this.paused();
  },
}
