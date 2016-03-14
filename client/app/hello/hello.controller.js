'use strict';
(function() {
  angular.module('app.hello', []);
})();

(function() {
  angular
    .module('app.hello')
    .controller('HelloController', HelloController);

  HelloController.$inject = [];

  function HelloController() {
    var vm = this;
  }


})();
