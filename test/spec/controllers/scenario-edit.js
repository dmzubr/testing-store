'use strict';

describe('Controller: scenarioEditCtrl', function () {

  // load the controller's module
  beforeEach(module('testerApp'));

  var ScenarioeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scenarioEditCtrl = $controller('scenarioEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
