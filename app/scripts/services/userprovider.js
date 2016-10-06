'use strict';

/**
 * @ngdoc service
 * @name testerApp.userProvider
 * @description
 * # userProvider
 * Factory in the testerApp.
 */
angular.module('testerApp')
  .factory('userProvider',['$http', function ($http) {
    // Service logic
    // ...

    var _userUrl = 'http://localhost:8085/User';

    function getDataUser(){
      return $http.get(_userUrl)
      .then(function(res) {
        return res.data;
        
        });
    }

    function createUser(createdUser){
      return $http.post(_userUrl,createdUser);
    }

    function deleteUser(deletedUserId){
      var targetUrl = _userUrl +'('+ deletedUserId + ')';
      return $http.delete(targetUrl);
    }

    function editUser(editedUser, editedUserId){
      var targetUrl = _userUrl +'('+ editedUserId + ')';
      return $http.put(targetUrl,editedUser);
    }

    // Public API here
    return {
      GetDataUser: getDataUser,
      CreateUser: createUser,
      DeleteUser: deleteUser,
      EditUser: editUser
      };
  }]);
