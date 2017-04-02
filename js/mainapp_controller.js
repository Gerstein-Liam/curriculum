'use strict';
var app = angular.module('MainApp', [
  'ngRoute',
     'routeAppControllers'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html"})
	
  
    .when("/cv", {templateUrl: "partials/cv.html"})
   
    .when("/web/skills", {templateUrl: "partials/web/skills.html"})
		.when("/web/ims_tv", {templateUrl: "partials/web/ims_tv.html"})
		.when("/web/beemon", {templateUrl: "partials/web/beemon.html"})
		.when("/web/uspot", {templateUrl: "partials/web/uspot.html"})
		.when("/web/angular_features_demo1", {templateUrl: "partials/web/angular_features_demo1.html",
		 controller: 'TextCtrl'

		})
		.when("/web/angular_app1", {templateUrl: "partials/web/angular_app1.html"})
		.when("/web/this", {templateUrl: "partials/about.html"})
	

    .when("/ip/skills", {templateUrl: "partials/ip/skills.html"})
		.when("/ip/enterprise_network", {templateUrl: "partials/ip/enterprise_network.html"})	
    .when("/embedded/skills", {templateUrl: "partials/embedded/skills.html"})
		.when("/embedded/remote_car", {templateUrl: "partials/embedded/remote_car.html"})
		.when("/embedded/beemon", {templateUrl: "partials/embedded/beemon.html"})
    .when("/electronic/skills", {templateUrl: "partials/electronic/skills.html"})
		.when("/electronic/power_supply", {templateUrl: "partials/electronic/power_supply.html"})
		.when("/electronic/remote_car", {templateUrl: "partials/electronic/remote_car.html"})
	.when("/about", {templateUrl: "partials/about.html"})
	.when("/contact", {templateUrl: "partials/contact.html"})

    .otherwise("/404", {templateUrl: "partials/404_page_not_found.html"});
}]);


var routeAppControllers = angular.module('routeAppControllers', []);


