(function() {
    function nguiHtmltext() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function($scope, $element, $attrs, ngModel) {

                var ck = CKEDITOR.replace($element[0], {
                    customConfig: $attrs.customConfig
                });

                if (ngModel) {
                    $element.bind('$destroy', function() {
                        CKEDITOR.instances[ck.name].destroy();
                        $scope.$destroy();
                    });
                    ck.on('instanceReady', function() {
                        ck.setData(ngModel.$viewValue);
                    });
                    ck.on('change', function() {
                        ngModel.$setViewValue(ck.getData());
                    });
                    ngModel.$render = function(value) {
                        ck.setData(ngModel.$modelValue);
                    };
                }
            }
        };
    }
    nguiHtmltext.$inject = [];
    angular.module('ngui-htmltext', [])
        .directive('nguiHtmltext', nguiHtmltext);
})();