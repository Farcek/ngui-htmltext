angular.module('demo', ['ngRoute', 'ngui'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/demo/view.html',
                controller: function($scope) {
                    $scope.text = "helloo World";
                },
                page: 'htmltext'
            });

        //$locationProvider.html5Mode(true);
    })

;

angular.module('ngui', [
    'ngui-htmltext',
])

;