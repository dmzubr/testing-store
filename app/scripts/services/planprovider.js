'use strict';

/**
 * @ngdoc service
 * @name testerApp.planProvider
 * @description
 * # planProvider
 * Factory in the testerApp.
 */
angular.module('testerApp')
  .factory('planProvider', ['$http', function ($http) {
    // Service logic
    // ...
    function getDataPlan(){
      return $http.get('http://localhost:8085/Plan')
      .then(function(res) {
        return res.data;
      });
    }
   

    // Public API here
    return {
     GetDataPlan: getDataPlan
    };
  }]);
