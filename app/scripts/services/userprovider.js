'use strict';

/**
 * @ngdoc service
 * @name testerApp.userProvider
 * @description
 * # userProvider
 * Factory in the testerApp.
 */
angular.module('testerApp')
  .factory('userProvider',['$http','backendConfig', function ($http, backendConfig) {
    // Service logic
    // ...

   var objectClassName = 'User';
    var  _userUrl = backendConfig.hostUrl + objectClassName;

    function getDataUser(){
      return $http.get('http://localhost:8085/User')
      .then(function(res) {
        return res.data;
        });
    }
    // Public API here
    return {
      GetDataUser: getDataUser
      };
  }]);
