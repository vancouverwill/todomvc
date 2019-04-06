var app = app || {};


(function ($) {
  'use strict';
  
app.ActionView = Backbone.View.extend({

  // tagName: "li",

  // className: "document-row",
  el: '.todoapp',

  events: {
    'click .toggle-all': 'toggleAllComplete'
  },

  initialize: function () {
      this.allCheckbox = this.$('.toggle-all')[0];
    },

    render: function () {
      var remaining = app.todos.remaining().length;

      this.allCheckbox.checked = !remaining;
    },

  toggleAllComplete: function () {
      var completed = app.ActionView.allCheckbox.checked;

      app.todos.each(function (todo) {
        todo.save({
          completed: completed
        });
      });
    }

  // initialize: function() {
  //   this.listenTo(this.model, "change", this.render);
  // },

  // render: function() {
  //   ...
  // }

});
})(jQuery);