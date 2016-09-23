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
    
    var _scenarioUrl = 'http://localhost:8085/scenario'   // Ссылка на порт БД, где находится сущность Scenario

      function getScenarioData(){              // Функция получения списка сущностей из БД
        return $http.get(_scenarioUrl)
          .then(function(res){
            return res.data;
            
          })

      }




      function deleteScenarioEntity(deletedScenario){          // Функция удаления сущности
        
        return $http.delete(deletedScenario) 
         .then(function(res){ 
          // debugger;
            return res;
           }); 

      }


     
    




    return {
      GetScenarioData : getScenarioData,
      DeleteScenarioEntity : deleteScenarioEntity
      };
    
  }]);
