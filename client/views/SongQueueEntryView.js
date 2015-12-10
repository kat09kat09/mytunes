// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  className: 'playlistEntry',

  template: _.template('<td class="playlistEntry">(<%= artist %>)</td><td class="playlistEntry"><%= title %></td>'),

  initialize: function() {
    this.on('rerenderPlaylist', function ( ) {
      consonle.log("song queue view will rerender event")
      this.render(); 
    }); 
  },

  events: {
    // 'click': function() {
    //   this.model.play();
    //   this.model.enqueue();
    // },
    // 'rerender': function () {
    //   this.render(); 
    // }
  },


  render: function(){
    console.log('im rendering'); 
    return this.$el.html(this.template(this.model.attributes));
  }

});

