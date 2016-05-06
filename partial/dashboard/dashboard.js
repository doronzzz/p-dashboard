angular.module('pontis').controller('DashboardCtrl',function($scope){


	$scope.gridsterOptions = {
				margins: [8, 8],
				columns: 4,
				draggable: {
					handle: 'span'
				}
			};
	$scope.barVals = '30,50,70,100,102,80,95,75,70,40,30,35,40,30,50,70,100,102,80,95,75,70,40,30,35,40,30,50,70,100,102,80,95,75,70,40,30,35,40,70,40,30,35,40,30,50,70,100,102,80,95,75,70,40,30,35,40';
	$scope.dashboard = {
			id: '1',
			name: 'Home',
			widgets: [{
				col: 0,
				row: 0,
				sizeY: 1,
				sizeX: 2,
				name: "Behavior"
			}, {
				col: 2,
				row: 0,
				sizeY: 1,
				sizeX: 1,
				name: "Rate"
			},
			{
				col: 3,
				row: 0,
				sizeY: 1,
				sizeX: 1,
				name: "targeting"
			},
			{
				col: 2,
				row: 2,
				sizeY: 1,
				sizeX: 4,
				name: "exposure"
			}]
	};

});