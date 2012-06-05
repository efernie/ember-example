require([
  //Global App
  'App',
  // Libs
  'jquery',
  //Controllers
  'controllers/contacts'
  ],

  function(App, $, contacts){

    // Start controllers
    contacts.create();

    $(function(){
      console.log('jquery dom ready')
    });

  }
);