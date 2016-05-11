'use strict';
var app = angular.module('MyApp', ['ui.router','ngAnimate','slick','ngSanitize','com.2fdevs.videogular',
	'com.2fdevs.videogular.plugins.controls','com.2fdevs.videogular.plugins.overlayplay','com.2fdevs.videogular.plugins.poster']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/");
  	
	$stateProvider
		.state('home', {
			url: "/"
		})

		.state('special', {
			url: "/special",
			templateUrl:"partials/drone-special.html"
		})

		// About
		.state('about', {
			url: "/about",
			templateUrl:"partials/about/about.html"
		})
		
		.state('about.history', {
			url: "/history",
			templateUrl:"partials/about/history.html"
		})

		.state('about.why', {
			url: "/why",
			templateUrl:"partials/about/whyevolution.html"
		})
		.state('about.safety', {
			url: "/safety",
			templateUrl:"partials/about/safety.html"
		})
		.state('about.privacy', {
			url: "/privacy",
			templateUrl:"partials/about/privacy-policy.html"
		})

		.state('contact', {
			url: "/contact",
			templateUrl:"partials/contact.html",
			controller:"ContactCtrl"
		})

		// Flat Roofs
		.state('flatsystems', {
			url: "/flatsystems",
			templateUrl:"partials/flat/flat-roof.html"
		})
		.state('choose', {
			url: "/choose",
			templateUrl:"partials/flat/choose-evolution.html"
		})
		.state('edgedetails', {
			url: "/edgedetails",
			templateUrl:"partials/flat/flat-edge-details.html"
		})

		.state('flat', {
			url: "/membranes",
			templateUrl:"partials/flat/flat-roof-academy.html"
		})

		.state('flat.membranes', {
			url: "/membranes",
			templateUrl:"partials/flat/membrane-types.html"
		})

		.state('flat.elvaloy', {
			url: "/elvaloy",
			templateUrl:"partials/flat/elvaloy.html"
		})
		.state('flat.warranty', {
			url: "/warranty",
			templateUrl:"partials/flat/warranty.html"
		})
		.state('flat.tpo', {
			url: "/tpo",
			templateUrl:"partials/flat/tpo.html"
		})
		.state('flat.epdm', {
			url: "/epdm",
			templateUrl:"partials/flat/epdm.html"
		})
		.state('flat.plasticizer', {
			url: "/plasticizer",
			templateUrl:"partials/flat/plasticizer.html"
		})
		.state('flat.pvc', {
			url: "/pvc",
			templateUrl:"partials/flat/pvc.html"
		})
		.state('flat.astm', {
			url: "/astm",
			templateUrl:"partials/flat/astm.html"
		})
		
		.state('flat.comparison', {
			url: "/comparison",
			templateUrl:"partials/flat/comparison.html"
		})

		

		// Pitched Roofs
		.state('pitchedsystems', {
			url: "/pitchedsystems",
			templateUrl:"partials/pitched/pitched-roof-2.html"
		})
		.state('contractor', {
			url: "/contractor",
			templateUrl:"partials/pitched/contractor.html"
		})
		
		.state('pitched', {
			url: "/pitched",
			templateUrl:"partials/pitched/academy-residential.html"
		})

		.state('pitched.shingles', {
			url: "/compositionshingles",
			templateUrl:"partials/pitched/shingles.html"
		})
		.state('pitched.metal', {
			url: "/metal",
			templateUrl:"partials/pitched/metal.html"
		})
		.state('pitched.ceramic', {
			url: "/ceramic",
			templateUrl:"partials/pitched/ceramic.html"
		})
		.state('pitched.concrete', {
			url: "/concrete",
			templateUrl:"partials/pitched/concrete.html"
		})
		.state('pitched.slate', {
			url: "/slate",
			templateUrl:"partials/pitched/slate.html"
		})
		.state('pitched.synthetic', {
			url: "/synthetic",
			templateUrl:"partials/pitched/synthetic.html"
		})
		.state('pitched.underlayments', {
			url: "/underlayments",
			templateUrl:"partials/pitched/underlayments.html"
		})
		.state('pitched.ventilation', {
			url: "/ventilation",
			templateUrl:"partials/pitched/ventilation.html"
		})
		.state('pitched.edge', {
			url: "/edge",
			templateUrl:"partials/pitched/edge-details.html"
		})
		.state('pitched.valley', {
			url: "/valley",
			templateUrl:"partials/pitched/valley.html"
		})
		.state('pitched.flashings', {
			url: "/flashings",
			templateUrl:"partials/pitched/flashing.html"
		})
		.state('pitched.fasteners', {
			url: "/fasteners",
			templateUrl:"partials/pitched/fasteners.html"
		})

		// Jobs
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

		.state('science', {
			url: "/science",
			templateUrl:"partials/science/science.html"
		})

		.state('science.polyiso', {
			url: "/polyiso",
			templateUrl:"partials/science/polyiso.html"
		})
		.state('science.envelope', {
			url: "/envelope",
			templateUrl:"partials/science/envelope.html"
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


