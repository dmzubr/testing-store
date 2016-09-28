'use strict';

describe('Service: planProvider', function () {

  // load the service's module
  beforeEach(module('testerApp'));

  // instantiate service
  var planProvider;
  beforeEach(inject(function (_planProvider_) {
    planProvider = _planProvider_;
  }));

  it('should do something', function () {
    expect(!!planProvider).toBe(true);
  });

});
