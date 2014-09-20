//pitch-routes.js
'use strict';

module.exports = function(app) {

  app.config(function($routeProvider) {
    $routeProvider

      //default page
      .when('/', {
        templateUrl: '/views/public/pitch-main-view.html',
        controller: 'pitchController'
      })

      //admin
      .when('/admin', {
        templateUrl: '/views/admin/admin-view.html',
        controller: 'adminController'
      })

      //second page
      .when('/skill-select', {
        templateUrl: '/views/public/skill-select-view.html',
        controller: 'pitchController'
      })

      .when('/write-pitch', {
        templateUrl: '/views/public/write-pitch-view.html',
        controller: 'pitchController'
      })

      //default to main
      .otherwise({
        redirectTo: '/'
      });
  });
};
