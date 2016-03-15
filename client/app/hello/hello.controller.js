'use strict';
(function () {
  angular.module('app.hello', []);
})();

(function () {
  angular
    .module('app.hello')
    .controller('HelloController', HelloController);

  HelloController.$inject = [];

  function HelloController() {
    var vm = this;

    vm.squares = [];
    vm.canLoad = true;
    vm.maxItems = 1000;
    vm.getSquares = getSquares;
    vm.reset = reset;
    activate();

    function getSquares() {
      for (var i = 0; i < 20; i++) {
        vm.squares.push({name: 'item ' + (vm.squares.length + 1)});
        if (vm.squares.length >= vm.maxItems) {
          vm.canLoad = false;
          return;
        }
      }
    }

    function reset() {
      vm.squares = [];
      vm.canLoad = true;
      vm.getSquares();
    }

    vm.reset();

    function activate() {
      // activate code here
    }
  }

})();
