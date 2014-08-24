angular.module('tech').controller('AddEquipmentCtrl',function($scope, $http, $routeParams, $location){

  $scope.submitForm = function(form) {
    if(form.$valid == true) {
      postEquipment();
    } else {
      form.showErrors = true;
    }

    function postEquipment () {
      $http.post('/api/tech/equipment/' + id, $scope.equipment).success(function(data) {
        console.dir(data);
        $location.url('/customer/' + id);
      })
    }
  }


  var id = $routeParams.id;

  console.log('display customer' + id);

  $http.get('/api/tech/customerid/' + id).success(function(data, status) {
    $scope.customer = data;
    loadForm(data);
  });

  function loadForm(data) {
    $scope.systemOptions = _.chain(data.equipment).pluck('system').uniq().value();
  }

  $scope.typeOptions = [
    "Gas Furnace",
    "Electric Furnace",
    "Air Handler",
    "Air Conditioner",
    "Heat Pump",
    "Duct-free split",
    "Oil Furnace",
    "Package Unit (gas)"
  ]

});