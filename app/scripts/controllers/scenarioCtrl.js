'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:scenarioCtrl
 * @description
 * # scenarioCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('scenarioCtrl', ['$scope', '$http', 'scenarioFactory', 'toastr', '$rootScope', '$location', function ($scope,$http,scenarioFactory,toastr,$rootScope,$location) {
    
  	var _urlLink = 'http://localhost:8085/scenario'

    function getScenarioData(){
      scenarioFactory.GetScenarioData()
      	.then(function(res){
      		console.log(res);
      		$scope.scenarioList = res;
      	}, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	})	
    };

   
    function _getUrlScenario(getData){
       return _urlLink + '(' + getData.ScenarioId + ')'
       
    };

    function deleteScenario(scenarioData){
          var targetUrl = _getUrlScenario(scenarioData);
          scenarioFactory.DeleteScenarioEntity(targetUrl)
                .then(function(res) { 
                  angular.forEach($scope.scenarioList, function(element, index) { 
                    if (element == scenarioData) 
                    $scope.scenarioList.splice(index, 1); 
                   
                  }); 
                 toastr.success('Ok', 'good');
                  }, function(error) { 
                  toastr.error('Плохой код', 'Поправь его');
                   });
    };

    /*function saveDataScenario(scenarioData){

       var targetUrl = _getUrlScenario(scenarioData);
       scenarioData.editLink = undefined; 
       $http.put(targetUrl, scenarioData)
        .then(function(res){
          getScenarioData()
          debugger;
         toastr.success('Go on this way', 'All fine');
        }, function(error){
          toastr.error('Плохой код', 'Поправь его');
        });


    }*/


   /* function editScenario(scenarioData){
      $scope.postScenario = scenarioData;
      console.log(scenarioData);

    }*/

    String.prototype.format = function() 
      { 
      var content = this; 
      for (var i=0; i < arguments.length; i++) 
      { 
      var replacement = '{' + i + '}'; 
      content = content.replace(replacement, arguments[i]); 
      } 
      return content; 
      }; 

     function editScenario(scenarioData){
        $rootScope.postScenario = scenarioData;     
        return $location.path('/Scenario/Edit/{0}'.format(scenarioData.ScenarioId));
               
           // return $location.path('/scenario/edit/{0}'.format(scenarioData.ScenarioId));
         // Пока обозначил вот так, через service/factory не получается
      //  Не надо ругать :)
      }

    getScenarioData();
  //  $scope.postDataToTable = postDataToTable;
    $scope.deleteScenario = deleteScenario;
  //  $scope.saveDataScenario = saveDataScenario;
    $scope.editScenario = editScenario;


  }]);


 