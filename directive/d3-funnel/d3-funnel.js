angular.module('pontis').directive('d3Funnel', function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            height: "=height",
            width: "=width",
        },
        templateUrl: 'directive/d3-funnel/d3-funnel.html',
        link: function(scope, element, attrs, fn) {
        	 var data = [

                
                    ['Total Base',     5000 ,"#86ADE8"],
                    ['Available',    2500 ,"#64BBE8"],
                    ['Assigned', 200 ,"#66C2CD"]
                

		    ];
		    var options = {
                chart:{
                    height:scope.height,
                    width:scope.width,
                    block:{
                        highlight : true
                    },
                    label:{
                        format:'{l}:- ${f}'
                    },
                    bottomPinch:0,
                    curve:{
                        enabled:true,
                        height:15
                    }
                }
            };
		    // var selector = $(element).find('.myFunnel');
		    var chart = new D3Funnel(element[0]);
		    chart.draw(data, options);
        }
    };
});
