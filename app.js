angular.module('pontis', ['ui.bootstrap','ui.router','ngAnimate','gridshore.c3js.chart']);

angular.module('pontis').config(function($stateProvider, $urlRouterProvider) {

    // $stateProvider
    // .state('dashboard', {
    //       url: '/dashboard',
    //       controller: function($scope){
    //           $scope.hideRightHeader = true;
    //       },          
    //       templateUrl: 'app/dashboard/dashboard.tmpl.html'
    //     });
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partial/dashboard/dashboard.html',
        controller:"DashboardCtrl"
    });
    $stateProvider.state('uri', {
        url: '/uri',
        templateUrl: 'partial/uri/uri.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');

});

angular.module('pontis').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
