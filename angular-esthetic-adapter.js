angular.module('pascalprecht.esthetic-adapter', ['ng']);
angular.module('pascalprecht.esthetic-adapter').directive('esthetic', [
  '$timeout',
  '$parse',
  function ($timeout, $parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, esthetic, options = scope.$eval(attrs.esthetic), match = attrs.ngOptions.match(NG_OPTIONS_REGEXP);
        $timeout(function () {
          element.esthetic(options);
          esthetic = element.data('esthetic');
        });
        scope.$watch(attrs.ngModel, function (value) {
          if (value) {
            $timeout(function () {
              esthetic.update();
            });
          }
        });
        scope.$watch($parse(match[7]), function (value) {
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