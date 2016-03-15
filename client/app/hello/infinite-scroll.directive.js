'use strict';
//https://github.com/sparkalow/angular-infinite-scroll
(function () {
  angular
    .module('app')
    .directive('infiniteScroll', infiniteScroll);

  function infiniteScroll() {
    return {
      link: link
    };

    function link(scope, element, attributes) {
      var offset = parseInt(attributes.threshold) || 0;
      var e = element[0];

      element.bind('scroll', function () {
        if (scope.$eval(attributes.canLoad) && e.scrollTop + e.offsetHeight >= e.scrollHeight - offset) {
          scope.$apply(attributes.infiniteScroll);
        }
      });
    }
  }

})();
