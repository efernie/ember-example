define('controllers/entries', ['ember'],

  function() {

    return Ember.ArrayProxy.extend({
      content: [],

      init: function() {
        this._super();
        console.log('entrie class')
      }
    });
  }
);