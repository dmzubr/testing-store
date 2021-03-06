'use strict';

/**
 * @ngdoc service
 * @name testerApp.scenarioFactory
 * @description
 * # scenarioFactory
 * Factory in the testerApp.
 */
angular.module('testerApp')
  .factory('scenarioFactory', ['$http', 'helper', function ($http, helper) {
    
    //var _scenarioUrl = 'http://localhost:8085/scenario'   // Ссылка на порт БД, где находится сущность Scenario

      function getScenarioData(){              // Функция получения списка сущностей из БД
        return $http.get(helper.GetUrlLink())
          .then(function(res){
            return res.data;
            
          })

      }

  /*     function getScenarioDataC(callBack){              // Функция получения списка сущностей из БД
        return $http.get(helper.GetUrlLink())
          .then(function(res){
            return res.data(callBack);
            
          })

      }*/


     
      function postScenarioData(scenarioData){              // Функция добавления списка в сущность
        return $http.post(helper.GetUrlLink(), scenarioData)
          .then(function(res){
            return res.data;
            
          });

      }

      function deleteScenarioEntity(deletedScenario){          // Функция удаления сущности.
        
        return $http.delete(deletedScenario) 
         .then(function(res){ 
          // debugger;
            return res;
           }); 

      }


      function saveScenarioEntity(targetUrl, scenarioData){    // Функция обновления данных в сущносте.

        return $http.put(targetUrl, scenarioData)
         .then(function(res){
           return res;
         })

      }

    return {
      GetScenarioData : getScenarioData,
      DeleteScenarioEntity : deleteScenarioEntity,
      PostScenarioData : postScenarioData,
      SaveDataScenario : saveScenarioEntity
    //  GetScenarioDataC : getScenarioDataC

      
      };
    
  }]);
