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
    
<<<<<<< HEAD
  	//var _urlLink = 'http://localhost:8085/scenario';

/**/
=======
  	$scope.model = {
      idRoute: $routeParams.id
    }

>>>>>>> ba444537acc751136ad05e82ec41746f54b20b45
    function getScenarioData(){
        
      scenarioFactory.GetScenarioData()
      	.then(function(res){
<<<<<<< HEAD
          
           $scope.scenarioList = res;
          }
          }, function(error){
=======
         debugger;

         var scenarioLists = [];
         scenarioLists = res;
            for(var i in scenarioLists){
              if(parseInt($scope.model.idRoute) === scenarioLists[i].ScenarioId){
              
                $scope.postScenario = scenarioLists[i];
                toastr.success('Меню загружено','Можно редактировать');
              }
            }
                 
          
      	}, function(error){
>>>>>>> ba444537acc751136ad05e82ec41746f54b20b45
           toastr.error('Плохой код', 'Поправь его');

      	})	
    }

    function refreshScenarioData(){
     
      scenarioFactory.GetScenarioData()
        .then(function(res){
             
         $scope.postScenario = res;
            toastr.success('Меню загружено','Обновлено');
              
         }, function(error){
            toastr.error('Плохой код', 'Поправь его');

        })  
    }

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
<<<<<<< HEAD
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
      

=======
>>>>>>> ba444537acc751136ad05e82ec41746f54b20b45
    
       return $location.path('/Scenario/Edit/{0}'.format(scenarioData.ScenarioId));
      
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
                    refreshScenarioData()   
                    toastr.success('Go on this way', 'All fine');
              }, function(error){
                    toastr.error('Плохой код', 'Поправь его');
              });
       
          refreshScenarioData()
          $location.path('/Scenario');
      }




    
	   getScenarioData();
	   $scope.saveDataScenario = saveDataScenario; 
     $scope.editScenario = editScenario;

   

  }]);
