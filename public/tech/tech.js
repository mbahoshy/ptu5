angular.module('tech', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('tech').config(function($routeProvider) {

    $routeProvider.when('/dashboard',{templateUrl: 'tech/partial/dashboard/dashboard.html'});
    $routeProvider.when('/add-customer',{templateUrl: 'tech/partial/add-customer/add-customer.html'});
    $routeProvider.when('/customer/:id',{templateUrl: 'tech/partial/customer/customer.html'});
    $routeProvider.when('/add-equipment/:id',{templateUrl: 'tech/partial/add-equipment/add-equipment.html'});
    $routeProvider.when('/create-pm/:id/:equipId',{templateUrl: 'tech/partial/create-pm/create-pm.html'});
    /* Add New Routes Above */

});

