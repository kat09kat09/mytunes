// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      console.log("you clicked on a song!");
      this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});


/*
  xit('queues clicked songs', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

*/