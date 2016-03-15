'use strict';
(function () {
  angular
    .module('app')
    .directive('sayHello', sayHello);

  function sayHello() {
    return {
      restrict: 'A',
      scope: {},
      link: link
    };

    function link(scope, el, attrs, ctrl) {
      el.bind('click', function () {
        alert('hello');
      })
    }
  }
})();
