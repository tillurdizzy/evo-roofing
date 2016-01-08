app.controller('HeaderCtrl', ['$scope','$state', function ($scope,$state) {
	$scope.showHome = function(){
		$state.transitionTo("home");
	};
	
 }]);