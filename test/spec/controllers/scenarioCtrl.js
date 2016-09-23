'use strict';

describe('Controller: scenarioCtrl', function () {

  // load the controller's module
  beforeEach(module('testerApp'));

  var scenarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scenarioCtrl = $controller('scenarioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
