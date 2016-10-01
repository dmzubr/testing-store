'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:CreateuserCtrl
 * @description
 * # CreateuserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('CreateuserCtrl',['$scope', 'toastr', 'userProvider',  function ($scope, toastr, userProvider) {
    	

    	function createUser(createdUser) {
			userProvider.CreateUser(createdUser)
				.then(function() {
					}, function() {
					toastr.error('Пиздец настал!','Ошибка');
				});	
		}
		$scope.createUser = createUser;
  }]);
