angular.module('pontis').directive('d3Funnel', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/d3-funnel/d3-funnel.html',
        link: function(scope, element, attrs, fn) {
        	 var data = [
		        ['Plants',     5000],
		        ['Flowers',    2500],
		        ['Perennials', 200],
		        ['Roses',      50],
		    ];
		    var options = {};
		    // var selector = $(element).find('.myFunnel');
		    var chart = new D3Funnel(element[0]);
		    chart.draw(data, options);
        }
    };
});
