// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }

  tagName: "table",
  className: "playlist",

  initialize: function() {
    this.render();

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th class="playlist">Playlist</th>').append(
      // ['<tr>',
      //   '<td>',
      //     "Playlist Entry",
      //   '</td>',
      // '</tr>']
      this.collection.map(function(song){
        // alert('do we have a song queue entry view instance', new SongQueueEntryView({model: song}))
        return new SongQueueEntryView({model: song}).render();
      })

    );
  }

});

// tagName: "table",

//   initialize: function() {
//     this.render();
//   },

//   render: function(){
//     // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
//     // see http://api.jquery.com/detach/
//     this.$el.children().detach();

//     this.$el.html('<th>Library</th>').append(
//       this.collection.map(function(song){
//         return new LibraryEntryView({model: song}).render();
//       })
//     );
//   }


/*
describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  xit('renders when add or remove event fires from the song queue collection', function(){
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

});

*/ 