require([
  //Global App
  'App',
  // Libs
  'jquery',
  //Controllers
  'controllers/contacts'
  ],

  function(App, $, contacts){
    console.log(contacts)

    // Start controllers

    $(function(){
      console.log('dom ready')
    });

  }
);