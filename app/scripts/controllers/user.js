'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('UserCtrl', ['$scope', '$http', 'userProvider', function ($scope, $http, userProvider) {
    
		function getDataUser() {
			userProvider.GetDataUser()// -> promise
	  		.then(function(res) {
	  			$scope.userList = res;
	  		}); 	
		}	
		
      getDataUser();

  }]);
