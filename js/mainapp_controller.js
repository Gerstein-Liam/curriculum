

//-------------------------------------------------- Routage-------------------------------------------------------------------------------------------------------------- 


'use strict';
var mainApp = angular.module('mainApp', [						// Module nGRoute--> Routage des view   |ModulerouteAppControllers-> Permet d'attacher un controlleur a une vue
  'ngRoute',
     'routeAppControllers'
]);

mainApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html"})
	
  
    .when("/cv", {templateUrl: "partials/cv.html"})
   
    .when("/web/skills", {templateUrl: "partials/web/skills.html"})
		.when("/web/this", {templateUrl: "partials/web/this_site.html"})
	
		.when("/web/beemon", {templateUrl: "partials/web/beemon.html"})

		.when("/web/angular_littlestory", {
		 templateUrl: "partials/web/littlestory_view.html",
		 controller: 'TextCtrl'

		})
		
		.when("/web/ds3_logicalgate", {templateUrl: "partials/web/logical_gate_sim.html",
		 controller: 'SVG_Ctrl'
		
		
		})
		
	

    .when("/ip/skills", {templateUrl: "partials/ip/skills.html"})
		.when("/ip/enterprise_network", {templateUrl: "partials/ip/enterprise_network.html"})	
    .when("/embedded/skills", {templateUrl: "partials/embedded/skills.html"})
		.when("/embedded/remote_car", {templateUrl: "partials/embedded/remote_car.html"})
		.when("/embedded/beemon", {templateUrl: "partials/embedded/beemon.html"})
    .when("/electronic/skills", {templateUrl: "partials/electronic/skills.html"})
		.when("/electronic/power_supply", {templateUrl: "partials/electronic/power_supply.html"})
		.when("/electronic/remote_car", {templateUrl: "partials/electronic/remote_car.html"})
	.when("/ce_site", {templateUrl: "partials/web/this_site.html"})
	 .when("/hobbys", {templateUrl: "partials/hobbys/hobbys.html"})
	.when("/contact", {templateUrl: "partials/contact.html"})

    .otherwise("/404", {templateUrl: "partials/404_page_not_found.html"});
}]);


var routeAppControllers = angular.module('routeAppControllers', []);



