mercadopagoApp.controller('homeCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  var vm = this;
  var url = "https://api.mercadopago.com/v1/payments";
  vm.sendUser = sendUser;

  console.log("Sending post to MercadoLibre...");
//https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/charge-with-creditcard/javascript/
  Mercadopago.setPublishableKey("TEST-9a10f136-859d-4015-a7e0-f295e9ce34ba");

  Mercadopago.getIdentificationTypes(function(res, data) {
    vm.docTypeOptions = data;
    console.debug("Document Type Options: ");
    console.debug(data);
  });

  function sendUser(){

  };
  // var paymentData = {};
  //
  // $http.post(url, paymentData).then(successCallback, errorCallback);
  //
  // function successCallback() {
  //   console.log('success');
  // }
  //
  // function errorCallback() {
  //   console.log('error');
  // }

}]);
