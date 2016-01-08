'use strict';

app.controller('TechDroneSample',['$scope','$rootScope','$location','$sce', function ($scope,$rootScope,$location,$sce) {
	this.config = {
		sources: [
			{src: $sce.trustAsResourceUrl("resources/img/DroneSample.mp4"), type: "video/mp4"}
		],
		tracks: [
			{
				src: "",
				kind: "subtitles",
				srclang: "en",
				label: "English",
				default: ""
			}
		],
			theme: "vendors/videogular/videogular.css",
			plugins: {
				poster: ""
			}
	};
 }]);