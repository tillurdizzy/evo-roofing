app.controller('CustomerJobCtrl', ['$scope','$state',function ($scope,$state) {
	$scope.activeSection = "docs";

	$scope.changeSection = function(sec){
		$scope.activeSection = sec;
	}

 }]);