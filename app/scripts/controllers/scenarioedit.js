'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:ScenarioeditCtrl
 * @description
 * # ScenarioeditCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('scenarioEditCtrl', ['$scope', '$http', 'scenarioFactory', 'toastr', '$routeParams', '$location', function ($scope,$http,scenarioFactory,toastr,$routeParams,$location) {
    
  	var _urlLink = 'http://localhost:8085/scenario';


    function getScenarioData(){
      scenarioFactory.GetScenarioData()
      	.then(function(res){
      		console.log(res);
      		$scope.scenarioList = res;
      	}, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	})	
    };
  
    function saveDataScenario(scenarioData){          // Функция обновляет данные в БД
	//var getData.ScenarioId = $routeParams["id"];
		var ScenarioId = $routeParams["id"];  // Переменная, чтобы поймать ключ Id
		_urlLink = _urlLink + '(' + ScenarioId + ')'
       
       var targetUrl = _urlLink;
       scenarioData.editLink = undefined; 
       $http.put(targetUrl, scenarioData)
        .then(function(res){
          getScenarioData()
          debugger;
         toastr.success('Go on this way', 'All fine');
        }, function(error){
          toastr.error('Плохой код', 'Поправь его');
        });

        
     	getScenarioData();
        $location.path('/Scenario');
    }


	   getScenarioData();
	   $scope.saveDataScenario = saveDataScenario;

  }]);