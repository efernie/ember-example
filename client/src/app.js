
define( 'App', [
  //libs
  'jquery',
  'ember',

  //Models
  'models/individualModel'
  ],
  function( $ , ember, individual ) {
    var App = Ember.Application.create({

      VERSION: '0.1',
      name : 'Ember Example',
      // Constructor
      init: function() {
        this._super();
        console.log('start', this)
      },
      ready : function(){
        console.log(individual)
        // individual.create({
        //   name : 'Eric'
        // });
        // Create the first Contact
      }

    });

    // Expose the application globally
    return window.FernsWorld = App;
  }
);
