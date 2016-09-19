'use strict';

/**
 * @ngdoc service
 * @name testerApp.scenarioFactory
 * @description
 * # scenarioFactory
 * Factory in the testerApp.
 */
angular.module('testerApp')
  .factory('scenarioFactory', ['$http', function ($http) {
    
    var _scenarioUrl = 'http://localhost:8085/scenario'

      function getScenarioList(){
        return $http.get(_scenarioUrl)
          .then(function(res){
            return res.data;
            console.log(res);
          })

      }

    return {
      GetScenarioList : getScenarioList
      };
    
  }]);
