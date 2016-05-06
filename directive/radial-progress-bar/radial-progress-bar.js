angular.module('pontis').directive('radialProgressBar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/radial-progress-bar/radial-progress-bar.html',
        link: function(scope, element, attrs, fn) {
        	
        	var progress = new RadialProgressChart(element[0], {
				   diameter: 30,
				    stroke: {
				        width: 15,
				        gap: 1
				    },
				   series: [{
				     //labelStart: '\uF105',
				     value: 68,
				     color: ['red', 'lightred']
				   }],
				   center: function(p) {
				     return p + ' %'
				   }
				 });


        }
    };
});
