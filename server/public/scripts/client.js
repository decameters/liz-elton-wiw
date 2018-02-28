var app = angular.module('WIWapp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/views/login.html',
            controller: 'WIWController as vm'
        }).when('/success', {
            templateUrl: '/views/success.html',
            controller: 'WIWController as vm'
        }).when('/fail', {
            templateUrl: '/views/fail.html',
            controller: 'WIWController as vm'
        }).when('/10000', {
            templateUrl: '/views/abc.html',
            controller: 'WIWController as vm'
        }).when('/12345', {
            templateUrl: '/views/123.html',
            controller: 'WIWController as vm'
        }).otherwise({
            template: '<h1>404</h1><p>no bueno</p>'
        });

});

app.controller('WIWController', function(){
    var self = this;

    self.message = "howdy yall";

    self.data = {
        "login": {
          "id": 5,
          "first_name": "Goldie",
          "last_name": "Wilson",
          "email": "goldiewilson@hillvalleygov.org",
          "token": "ilovemyboss"
        },
        "users": [
          {
            "id": 4364,
            "login_id": 5,
            "account_id": 10000,
            
            "first_name": "Goldie",
            "last_name": "Wilson",
            "email": "goldiewilson@hillvalleycalifornia.gov",
          },
          {
            "id": 5475,
            "login_id": 5,
            "account_id": 12345,
            
            "first_name": "Goldenrod",
            "last_name": "Wilson, IV",
            "email": "goldiewilson@gmail.com",
          }
        ],
        "accounts": [
          {
            "id": 10000,
            
            "company": "ABC Company",
            
          },
          {
            "id": 12345,
            
            "company": "123 Company",
            
          }
        ]
      }


});
    