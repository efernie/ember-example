define('controllers/contacts',
       ['ember',
        'controllers/entries',
        'text!views/individual.html'
       ],

  function(ember, Entries, individual_html) {

    return FernsWorld.Individual = Entries.extend({
      entryView : Ember.View.create({
        template: Ember.Handlebars.compile( individual_html )
      }),
      init : function(){
        this._super();
        console.log(this);
        this.get( 'entryView' ).appendTo( '#main' );
      }
    });

    // return FernsWorld.Individual = Ember.View.extend({
    //   init : function(){
    //     console.log('view')
    //   },
    //   mouseDown: function() {
    //     window.alert("hello world!");
    //   }
    // });
  }
);