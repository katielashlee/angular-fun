'use strict';
(function () {

  angular
    .module('app', [
      'ngRoute',
      'app.hello'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './app/hello/hello.html',
          controller: 'HelloController',
          controllerAs: 'vm',
          resolve: {
            // I will cause a 1 second delay
            delay: function ($q, $timeout) {
              var delay = $q.defer();
              $timeout(delay.resolve, 1000);
              return delay.promise;
            }
          }
        })
    });

})();
