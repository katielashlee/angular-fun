'use strict';
(function() {
    angular
        .module('app')
        .directive('infiniteScroll', infiniteScroll);

    function infiniteScroll() {
        return {
            link: link
        };

        function link(scope, el, attrs, cntrl) {

        }
    }

})();
