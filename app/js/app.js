angular.module('MarsRoverApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/home", {templateUrl: "views/home.html", controller: "homeController"}).
	when("/gallery", {templateUrl: "views/gallery.html", controller: "galleryController"}).
	otherwise({redirectTo: '/home'});
}]);