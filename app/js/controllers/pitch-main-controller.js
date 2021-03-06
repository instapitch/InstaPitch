//pitch-main-controller.js

'use strict';

module.exports = function(app) {
  app.controller('pitchMainController', function($scope, $location, userInputService) {

    $scope.username = userInputService.get();


    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
      userInputService.set("username",$scope.username);
      userInputService.set("usermajor",$scope.usermajor);
    };

    $scope.majors = [
      {name:'Full Stack JavaScript',type:'js'},
      {name:'iOS',type:'ios'},
      {name:'Python',type:'python'},
      {name:'Front-End UX Design',type:'ux'},
      {name:'Ruby',type:'ruby'}
    ];

    $scope.username = userInputService.get("username");
    $scope.usermajor = userInputService.get("usermajor");

    if ($scope.usermajor != null) {
      console.log("usermajor is " + $scope.usermajor.name);
    }

  });
};

