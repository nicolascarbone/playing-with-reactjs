
require.config({

    baseUrl: './',

    paths: {
      jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
      underscore: 'http://underscorejs.org/underscore-min',
      backbone: 'http://backbonejs.org/backbone-min',
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
    }

    // map: {
    //     '*': {
    //         // 'app/models/employee': 'app/models/memory/employee'
    //     }
    // },

});

require(['jquery', 'backbone', 'router'], function ($, Backbone, Router) {
  var router = new Router();
  Backbone.history.start();
});
