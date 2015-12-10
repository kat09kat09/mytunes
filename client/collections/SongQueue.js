// SongQueue.js - Defines a backbone model class for the song queue.

var SongQueue = Songs.extend({

  initialize: function(){
   // this.set("currentSpot", 0); 

    this.on("add", function () {
      if(this.length ===1) {
        this.playFirst();   
      }
    });

    // var queue= this.get('songQueue'); 
    this.on('enqueue', function(song){
      console.log("calling enqueue event");
      this.push(song);
      }
    );


    this.on("dequeue", function () {
      this.remove(); 
    });
    
    this.on("ended", function () {
      // console.log('ended gets called'); 
      this.remove(this.at(0));


      if(this.length >0) { 
        // console.log('if statement is reached'); 
        this.playFirst();
      }
    });
      
  },

  playFirst: function()  { 
    // console.log("playFirst gets called");
    // console.log(this); 
    this.at(0).play(); 
  }

  

});

/*
  describe('when a song is added', function() {
    describe('when it is the only song in the song queue', function() {
      xit('plays it', function() {
        var songQueue = new SongQueue();
        songQueue.add(songData1);
        expect(playSpy).to.have.been.called;
      });
    });

    describe('when it is not the only song in the song queue', function() {
      xit('does nothing', function() {
        var songQueue = new SongQueue(songData1);
        songQueue.add(songData2);
        expect(playSpy).to.have.not.been.called;
      });
    });
  });

  describe('when a song ends', function() {
    xit('removes the song from the queue', function() {
      var songQueue = new SongQueue([songData1, songData2]);
      song2 = songQueue.at(1);
      expect(songQueue.length).to.equal(2);
      songQueue.at(0).trigger('ended');
      expect(songQueue.length).to.equal(1);
      expect(songQueue.at(0)).to.equal(song2);
    });

    describe('if there are any songs left in the queue', function() {
      xit('plays the first song in the queue', function() {
        var songQueue = new SongQueue([songData1, songData2]);
        songQueue.at(0).ended();
        expect(playSpy).to.have.been.called;
      });
    });

    describe('if there are no songs left in the queue', function() {
      xit('does nothing', function() {
        var songQueue = new SongQueue(songData1);
        songQueue.at(0).ended();
        expect(playSpy).to.have.not.been.called;
      });
    });
  });

  describe('when a song is dequeued', function() {
    xit('removes the song', function() {
      removeSpy = sinon.spy(SongQueue.prototype, 'remove');
      var songQueue = new SongQueue(songData1);
      songQueue.at(0).dequeue();
      expect(removeSpy).to.have.been.called;
      SongQueue.prototype.remove.restore();
    });
  });

  describe('playFirst', function() {
    xit('plays the first song in the queue', function() {
      sinon.spy(SongModel.prototype, 'play');
      var songQueue = new SongQueue(songData1);
      songQueue.playFirst();
      expect(songQueue.at(0).play).to.have.been.called;
      SongModel.prototype.play.restore();

*/