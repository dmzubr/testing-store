'use strict';

describe('Controller: CtrlScenario', function () {

  // load the controller's module
  beforeEach(module('testerApp'));

  var CtrlScenario,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtrlScenario = $controller('CtrlScenario', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
