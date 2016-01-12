'use strict';
var app = angular.module('MyApp', ['ui.router','ngAnimate','slick','ngSanitize','com.2fdevs.videogular',
	'com.2fdevs.videogular.plugins.controls','com.2fdevs.videogular.plugins.overlayplay','com.2fdevs.videogular.plugins.poster']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl:"partials/home.html",
			controller:"HomeCtrl"
		})

		.state('special', {
			url: "/special",
			templateUrl:"partials/drone-special.html"
		})
		
		.state('history', {
			url: "/history",
			templateUrl:"partials/about/history.html"
		})

		.state('whyevolution', {
			url: "/whyevolution",
			templateUrl:"partials/about/whyevolution.html"
		})
		.state('safety', {
			url: "/safety",
			templateUrl:"partials/about/safety.html"
		})

		.state('contact', {
			url: "/contact",
			templateUrl:"partials/contact.html",
			controller:"ContactCtrl"
		})
		
		.state('flat', {
			url: "/flat",
			templateUrl:"partials/commercial/flat-roof.html",
			controller:"FlatCtrl"
		})
		.state('choose', {
			url: "/choose",
			templateUrl:"partials/commercial/choose-evolution.html",
			controller:"FlatCtrl"
		})

		.state('pitched', {
			url: "/pitched",
			templateUrl:"partials/residential/pitched-roof.html",
			controller:"PitchCtrl"
		})
		.state('contractor', {
			url: "/contractor",
			templateUrl:"partials/residential/contractor.html",
			controller:"PitchCtrl"
		})
		

		.state('projects', {
			url: "/projects",
			templateUrl:"partials/projects.html",
			controller:"ProjectsCtrl"
		})

		.state('login', {
			url: "/login",
			templateUrl:"partials/login.html",
			controller:"LoginCtrl"
		})
		.state('job', {
			url: "/job",
			templateUrl:"partials/new-job.html",
			controller:"JobCtrl"
		})

		.state('bellaire', {
			url: "/bellaire",
			templateUrl:"jobs/royal-bellaire/royal-bellaire.html",
			controller:"CustomerJobCtrl"
			
		})

		.state('dealco', {
			url: "/dealco",
			templateUrl:"jobs/dealco/dealco.html",
			controller:"CustomerJobCtrl"
		})
		.state('silos', {
			url: "/silos",
			templateUrl:"jobs/dealco/silos.html"
		})
		.state('2017preston', {
			url: "/2017preston",
			templateUrl:"jobs/dealco/2017preston.html"
		})
		.state('600w6th', {
			url: "/600w6th",
			templateUrl:"jobs/dealco/600w6th.html"
		})

		.state('sovereign', {
			url: "/sovereign",
			templateUrl:"jobs/sovereign/sovereign.html",
			controller:"CustomerJobCtrl"
		})

		.state('townpark', {
			url: "/townpark",
			templateUrl:"jobs/townpark/townpark.html",
			controller:"CustomerJobCtrl"
		})

		.state('casagrande', {
			url: "/casagrande",
			templateUrl:"jobs/casa/casagrande.html",
			controller:"CustomerJobCtrl"
		})

		.state('liberty', {
			url: "/liberty",
			templateUrl:"jobs/liberty/liberty.html",
			controller:"CustomerJobCtrl"
		})

		.state('toc', {
			url: "/toc",
			templateUrl:"partials/toc.html"
		})

		.state('roofsystems', {
			url: "/roofsystems",
			templateUrl:"partials/roof-systems.html"
		})

		.state('technology', {
			url: "/technology",
			templateUrl:"partials/technology.html"
		})

		.state('academyresidential', {
			url: "/academyresidential",
			templateUrl:"partials/residential/academy-residential.html",
			controller:"PitchCtrl"
		})

		.state('academyresidential.shingles', {
			url: "/residentialshingles",
			templateUrl:"partials/residential/shingles.html"
		})
		.state('academyresidential.underlayments', {
			url: "/residentialunderlayments",
			templateUrl:"partials/residential/underlayments.html"
		})
		.state('academyresidential.ventilation', {
			url: "/residentialventilation",
			templateUrl:"partials/residential/ventilation.html"
		})
		.state('academyresidential.edge', {
			url: "/residentialedge",
			templateUrl:"partials/residential/edge-details.html"
		})
		.state('academyresidential.valley', {
			url: "/residentialvalley",
			templateUrl:"partials/residential/valley.html"
		})
		.state('academyresidential.flashings', {
			url: "/residentialflashings",
			templateUrl:"partials/residential/flashing.html"
		})
		.state('academyresidential.fasteners', {
			url: "/residentialfasteners",
			templateUrl:"partials/residential/fasteners.html"
		})

		.state('science.polyiso', {
			url: "/polyiso",
			templateUrl:"partials/science/polyiso.html"
		})
		.state('science.elvaloy', {
			url: "/elvaloy",
			templateUrl:"partials/science/elvaloy.html"
		})
		.state('science.envelope', {
			url: "/envelope",
			templateUrl:"partials/science/envelope.html"
		})
		.state('science.warranty', {
			url: "/warranty",
			templateUrl:"partials/science/warranty.html"
		})
		.state('science.tpo', {
			url: "/tpo",
			templateUrl:"partials/science/tpo.html"
		})
		.state('science.epdm', {
			url: "/epdm",
			templateUrl:"partials/science/epdm.html"
		})
		.state('science.plasticizer', {
			url: "/plasticizer",
			templateUrl:"partials/science/plasticizer.html"
		})
		.state('science.pvc', {
			url: "/pvc",
			templateUrl:"partials/science/pvc.html"
		})
		.state('science.astm', {
			url: "/astm",
			templateUrl:"partials/science/astm.html"
		})
		
		.state('science.comparison', {
			url: "/comparison",
			templateUrl:"partials/science/comparison.html"
		})

		.state('science.membranes', {
			url: "/membranes",
			templateUrl:"partials/science/membrane-types.html"
		})

		.state('science', {
			url: "/science",
			templateUrl:"partials/science.html"
		})

		
		
		


});	

app.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();

        $('a.system5-close-reveal-modal').click(function(){
		  $('#system5').foundation('reveal', 'close');
		});

		$('a.system6-close-reveal-modal').click(function(){
		  $('#system6').foundation('reveal', 'close');
		});

		$('a.system1-close-reveal-modal').click(function(){
		  $('#system1').foundation('reveal', 'close');
		});
    });
});


