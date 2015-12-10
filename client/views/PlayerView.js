// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

/*
 describe('Song transitions', function() {
    xit('dequeues a song when finished playing & plays the next song', function(){
      var firstSong = library.at(0)
        , secondSong = library.at(1)
        , thirdSong = library.at(2)
        , songQueue = appView.model.get('songQueue');
      // Set up a queue of three songs
      songQueue.add(firstSong);
      songQueue.add(secondSong);
      songQueue.add(thirdSong);
      // play the first song
      songQueue.playFirst();
      expect(appView.playerView.model).to.equal(firstSong);
      // Simulate the end of the first song
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).to.equal(secondSong);
      // Simulate the end of the second song
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).to.equal(thirdSong);
*/