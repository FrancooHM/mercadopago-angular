var mercadopagoApp = angular.module('mercadopagoApp', ['ngRoute']);

console.log("Mercdo PagoApp!");

mercadopagoApp.config(['$routeProvider', config]);

mercadopagoApp.run(['$rootScope', init]);

function init($rootScope) {
  console.log("Initializating app...")
  $('#docType').material_select();
}

function config($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'angular/home/index.html',
    controller: 'homeCtrl',
    controllerAs: 'vm'
  }).
  otherwise({
    redirectTo: '/'
  });
};
