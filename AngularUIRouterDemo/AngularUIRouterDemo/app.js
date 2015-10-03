// JavaScript source code
var routerDemoApp = angular.module('routerDemoApp', ['ui.router']);

routerDemoApp.config(function ($stateProvider, $urlRouterProvider) {



    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('aboutus', {
            url: '/aboutus',
            templateUrl: 'aboutus.html'
        })
        .state('contactus', {
            url: '/contactus',
            templateUrl: 'contactus.html'
        });

});
