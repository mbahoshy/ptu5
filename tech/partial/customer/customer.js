angular.module('tech').controller('CustomerCtrl',function($scope, $http, $location, $routeParams){

  $scope.data = {};

  var customerData;

  var id = $routeParams.id;

  console.log('display customer' + id);

  $http.get('/api/tech/customerid/' + id).success(function(data, status) {
    $scope.customer = data;
    $scope.pmDisplay = data.pm;
    console.dir(data);
    var title = data.nameLast + ', ' + data.nameFirst;
  });

  $scope.pmClick = function (pm) {
    $location.url('/pm/' + id + '/' + pm.pmid);
  }

  $scope.filterEquipment = function (equipment) {
    $scope.equipmentFilter = equipment.system;
    filterEquipment(equipment.system)
  }

  function filterEquipment (system) {
    $scope.pmDisplay = _.where($scope.customer.pm, {system: system});
    console.dir(system);
    console.dir($scope.pmDisplay);
  }

});