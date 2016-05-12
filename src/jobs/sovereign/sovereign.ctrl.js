'use strict';

app.controller('SovereignCtrl',['$scope','$sce', function ($scope,$sce) {
	this.config = {
		sources: [{src: $sce.trustAsResourceUrl("jobs/sovereign/vids/Sovereign-001.mp4"), type: "video/mp4"}],
		tracks: [{src: "",kind: "subtitles",srclang: "en",label: "English",default: ""}],
		theme: "vendors/videogular/videogular.css",
		plugins: {poster: ""}
	};

	var controller = this;
	controller.API = null;
 
	controller.onPlayerReady = function(API) {
		controller.API = API;
	};


	$scope.selectBldg = function(listObj){
		$scope.selectBldgNum = listObj.label;
		controller.API.stop();
		controller.config.sources = [{src: $sce.trustAsResourceUrl("jobs/sovereign/vids/" + listObj.path), type: "video/mp4"}];
	};

	$scope.bldgList = [
		{label:"Bldg #01",value:1,path:'DJI_0001.mp4'},
		{label:"Bldg #01 Oct 2",value:1,path:'Sovereign-001.mp4'},
		{label:"Bldg #02",value:2,path:'DJI_0002.mp4'},
		{label:"Bldg #02 Oct 2",value:2,path:'Sovereign-002.mp4'},
		{label:"Bldg #03",value:3,path:'DJI_0003.mp4'},
		{label:"Bldg #03 Oct 2",value:3,path:'Sovereign-003.mp4'},
		{label:"Bldg #04",value:4,path:'DJI_0004.mp4'},
		{label:"Bldg #04 Oct 2",value:4,path:'Sovereign-004.mp4'},
		{label:"Bldg #05",value:5,path:'DJI_0005.mp4'},
		{label:"Bldg #05 Oct 2",value:5,path:'Sovereign-005.mp4'},
		{label:"Bldg #06",value:6,path:'DJI_0006.mp4'},
		{label:"Bldg #06 Oct 2",value:5,path:'Sovereign-006.mp4'},
		{label:"Bldg #07",value:7,path:'DJI_0007.mp4'},
		{label:"Bldg #07 Oct 2",value:7,path:'Sovereign-007.mp4'},
		{label:"Bldg #08",value:8,path:'DJI_0010.mp4'},
		{label:"Bldg #08 Oct 2",value:8,path:'Sovereign-008.mp4'},
		{label:"Bldg #09",value:9,path:'DJI_0009.mp4'},
		{label:"Bldg #09 Oct 2",value:9,path:'Sovereign-009.mp4'},
		{label:"Bldg #09 Oct 13",value:9,path:'sovereign-oct13-009.mp4'},
		{label:"Bldg #10",value:10,path:'DJI_0008.mp4'},
		{label:"Bldg #10 Oct 2",value:10,path:'Sovereign-010.mp4'},
		{label:"Bldg #11",value:11,path:'DJI_0011.mp4'},
		{label:"Bldg #11 Oct 2",value:11,path:'Sovereign-011.mp4'},
		{label:"Bldg #12",value:12,path:'DJI_0012.mp4'},
		{label:"Bldg #12 Oct 2",value:12,path:'Sovereign-012.mp4'},
		{label:"Bldg #13",value:13,path:'DJI_0013.mp4'},
		{label:"Bldg #13 Oct 2",value:13,path:'Sovereign-013.mp4'},
		{label:"Bldg #14",value:14,path:'DJI_0020.mp4'},
		{label:"Bldg #14 Oct 2",value:14,path:'Sovereign-014.mp4'},
		{label:"Bldg #15",value:15,path:'DJI_0017.mp4'},
		{label:"Bldg #15 Oct 2",value:15,path:'Sovereign-015.mp4'},
		{label:"Bldg #16",value:16,path:'DJI_0021.mp4'},
		{label:"Bldg #16 Oct 2",value:16,path:'Sovereign-016.mp4'},
		{label:"Bldg #17",value:17,path:'DJI_0022.mp4'},
		{label:"Bldg #17 Oct 2",value:17,path:'Sovereign-017.mp4'},
		{label:"Bldg #18",value:18,path:'DJI_0019.mp4'},
		{label:"Bldg #18 Oct 2",value:18,path:'Sovereign-018.mp4'},
		{label:"Bldg #19",value:19,path:'DJI_0016.mp4'},
		{label:"Bldg #19 Oct 2",value:19,path:'Sovereign-019.mp4'},
		{label:"Bldg #20",value:20,path:'DJI_0015.mp4'},
		{label:"Bldg #20 Oct 2",value:20,path:'Sovereign-020.mp4'},
		{label:"Bldg #21",value:21,path:'DJI_0018.mp4'},
		{label:"Bldg #21 Oct 2",value:21,path:'Sovereign-021.mp4'},
		{label:"Bldg #22",value:22,path:'DJI_0026.mp4'},
		{label:"Bldg #22 Oct 2",value:22,path:'Sovereign-022.mp4'},
		{label:"Bldg #23",value:23,path:'DJI_0025.mp4'},
		{label:"Bldg #23 Oct 2",value:23,path:'Sovereign-023.mp4'},
		{label:"Bldg #23 Oct 13",value:9,path:'sovereign-oct13-023.mp4'},
		{label:"Bldg #24",value:24,path:'DJI_0023.mp4'},
		{label:"Bldg #24 Oct 2",value:24,path:'Sovereign-024.mp4'},
		{label:"Bldg #25",value:25,path:'DJI_0024.mp4'},
		{label:"Bldg #25 Oct 2",value:25,path:'Sovereign-025.mp4'},
		{label:"Club House",value:14,path:'DJI_0014.mp4'},
		{label:"Club House Oct 2",value:14,path:'Sovereign_office.mp4'}];
		$scope.selectedBldg = $scope.bldgList[1];
		$scope.selectBldgNum = "Bldg #01 Oct 2";
 }]);