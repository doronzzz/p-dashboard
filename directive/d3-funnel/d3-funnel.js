angular.module('pontis').directive('d3Funnel', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/d3-funnel/d3-funnel.html',
        link: function(scope, element, attrs, fn) {
        	 var data = [
		        ['Total Base',     5000 ,"#86ADE8"],
		        ['Available',    2500 ,"#64BBE8"],
		        ['Assigned', 200 ,"#66C2CD"]
		    ];
		    var options = {};
		    // var selector = $(element).find('.myFunnel');
		    var chart = new D3Funnel(element[0]);
		    chart.draw(data, options);
        }
    };
});
