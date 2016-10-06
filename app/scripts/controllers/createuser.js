'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:CreateuserCtrl
 * @description
 * # CreateuserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('CreateuserCtrl',['$scope', 'toastr', 'userProvider', '$location', function ($scope, toastr, userProvider, $location) {
    	

    	function createUser(createdUser) {
			userProvider.CreateUser(createdUser)
				.then(function() {
					$location.path('/user');
					}, function() {
					toastr.error('Пиздец настал!','Ошибка');
				});	
		}
		$scope.createUser = createUser;
  }]);
