
define( 'App', [
  //libs
  'jquery',
  'ember',
  ],
  function( $ , ember ) {

    var App = Ember.Application.create({

      VERSION: '0.1',
      // Constructor
      init: function() {
        this._super();
        console.log('start', this)
      }

    });

    // Expose the application globally
    return window.FernsWorld = App;
  }
);
