'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:EdituserCtrl
 * @description
 * # EdituserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('EdituserCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
   
   var User = $routeParams.UserId;

 	$scope.param = $routeParams.UserId;

 	editUser();

  }]);
