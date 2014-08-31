angular.module('tech').controller('AddCustomerCtrl',function($scope){

  $scope.addCustomer = function (form) {
    console.dir(form);
    if (form.$valid == true) {
      postCustomer();
    } else {
      form.showErrors = true;
    }
    console.dir(form);

    function postCustomer () {

      $http.post('/customer', $scope.customer).success(function(data) {

      });
    }
  }

});