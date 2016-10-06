'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:EdituserCtrl
 * @description
 * # EdituserCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('EdituserCtrl', ['$scope', '$routeParams', '$http', 'toastr', '$location', function ($scope, $routeParams, $http, toastr, $location) {
   
   var User = $routeParams.UserId;
  var _userUrl = 'http://localhost:8085/User'+ '('+ User + ')'; 


   function geteditUser(){
    	return $http.get(_userUrl) // -> promise
        .then(function(res) {
           var List = res.data;
           $scope.user = List[0];
          //debugger;
                  }, function(error) { 
            toastr.error('Пиздец настал!', 'Ошибка');
        });
   }

  geteditUser();

    function editUser(editedUser){
      editedUser.editLink = undefined;
    
      return $http.put(_userUrl,editedUser)
      .then(function() {
        $location.path('/user');
          }, function() {
          toastr.error('Пиздец настал!','Ошибка');
        });
     
      // debugger;
    }
 	
    $scope.editUser = editUser;


  }]);
