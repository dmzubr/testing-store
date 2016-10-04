'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('UserCtrl', ['$scope', '$http', 'userProvider', 'toastr', function ($scope, $http, userProvider, toastr) {
    
		function getDataUser() {
			userProvider.GetDataUser()// -> promise
	  		.then(function(res) {
	  			$scope.userList = res;
	  		}); 	
		}	
		
      getDataUser();

      	function deleteUser(deletedUser) {				
			userProvider.DeleteUser(deletedUser.UserId)
			.then(function() {
				angular.forEach($scope.userList, function(element, index) {
					if (element === deletedUser) {
						$scope.userList.splice(index, 1);
					}
				});
			}, function(error) {
				toastr.error(error.message, 'все плохо');
			});
		}


		function editUser(editedUser){
			$scope.editedUser = editedUser;
			}



		$scope.deleteUser = deleteUser;
   }]);