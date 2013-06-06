angular.module('pascalprecht.esthetic-adapter', ['ng']);
angular.module('pascalprecht.esthetic-adapter').directive('esthetic', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var esthetic, options = scope.$eval(attrs['esthetic']);
        $timeout(function () {
          element.esthetic(options);
          esthetic = element.data('esthetic');
        });
        scope.$watch(attrs['ngModel'], function (value) {
          if (value) {
            $timeout(function () {
              esthetic.update();
            });
          }
        });
      }
    };
  }
]);