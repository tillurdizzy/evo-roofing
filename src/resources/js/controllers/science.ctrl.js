app.controller('ScienceCtrl', ['$scope','$state',function ($scope,$state) {

	var self = this;

	
	self.gridClick = function(state){
		$state.transitionTo(state);
	};

	
 }]);