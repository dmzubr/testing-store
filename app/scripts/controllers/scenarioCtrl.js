'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:scenarioCtrl
 * @description
 * # scenarioCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('scenarioCtrl', ['$scope', '$http', 'scenarioFactory', 'toastr', '$rootScope', '$location', 'scenarioSharedDataService', 'helper', function ($scope,$http,scenarioFactory,toastr,$rootScope,$location,scenarioSharedDataService,helper) {
    
 // 	var _urlLink = 'http://localhost:8085/scenario'

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
       return helper.GetUrlLink() + '(' + getData.ScenarioId + ')'
       
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

    

   /* String.prototype.format = function() 
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
      $scope.scenData = scenarioData;
        scenarioSharedDataService.addList($scope.scenData);
      //  console.log(a);
        $rootScope.postScenario = scenarioData;     
        return $location.path('/Scenario/Edit/{0}'.format(scenarioData.ScenarioId));
               
           // return $location.path('/scenario/edit/{0}'.format(scenarioData.ScenarioId));
         // Пока обозначил вот так, через service/factory не получается
      //  Не надо ругать :)
      }*/



    getScenarioData();
  //  $scope.postDataToTable = postDataToTable;
    $scope.deleteScenario = deleteScenario;
  //  $scope.saveDataScenario = saveDataScenario;
   // $scope.editScenario = editScenario;


  }]);


 