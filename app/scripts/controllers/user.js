'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
