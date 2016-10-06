'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:ScenarioeditCtrl
 * @description
 * # ScenarioeditCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('scenarioEditCtrl', ['$scope', '$http', 'scenarioFactory', 'toastr', '$routeParams', '$location', 'scenarioSharedDataService', 'helper', function ($scope,$http,scenarioFactory,toastr,$routeParams,$location,scenarioSharedDataService,helper) {
    
  	//var _urlLink = 'http://localhost:8085/scenario';

/**/
    function getScenarioData(){
        
      scenarioFactory.GetScenarioData()
      	.then(function(res){
          
           $scope.scenarioList = res;
          }
          }, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	})	
    };

    function getEditId(){
        var param = $routeParams.id;
        var i;

        (res[i].ScenarioId === param){
            return res;

    };

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
      debugger;
    //  $scope.scenarioData = scenarioData.ScenarioId;
      
    //  $scope.postScenario = scenarioData; 
      

      
        return $location.path('/Scenario/Edit/{0}'.format(scenarioData.ScenarioId));
            
               
               
           // return $location.path('/scenario/edit/{0}'.format(scenarioData.ScenarioId));
         // Пока обозначил вот так, через service/factory не получается
      }
      
        $scope.model = {
        message: $routeParams.id
      } 
      

    

      
    /*function saveDataScenario(scenarioData){          // Функция обновляет данные в БД без helper
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


      function saveDataScenario(scenarioData){          // Функция обновляет данные в БД
      //var getData.ScenarioId = $routeParams["id"];
        var ScenarioId = $routeParams["id"];  // Переменная, чтобы поймать ключ Id
        var _urlLink = helper.GetUrlLink() + '(' + ScenarioId + ')'
        debugger;
        var targetUrl = _urlLink;
        scenarioData.editLink = undefined;
        scenarioFactory.SaveDataScenario(targetUrl, scenarioData)
          .then(function(res){
            getScenarioData();

         toastr.success('Go on this way', 'All fine');
        }, function(error){
          toastr.error('Плохой код', 'Поправь его');
        });
         

          var path = $location('/scenario/edit/{0}'.format(scenarioData.scenarioId));
         // $console.debugger(path);
          colsole.log(path);
          getScenarioData();
          //$location.path('/Scenario');
      }*/




    
	   getScenarioData();
	 //  $scope.saveDataScenario = saveDataScenario; 
     $scope.editScenario = editScenario;

   

  }]);
