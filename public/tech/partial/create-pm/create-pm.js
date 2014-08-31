angular.module('tech').controller('CreatePmCtrl',function($scope, $routeParams, $http){
  var custId = $routeParams.id,
      equipId = $routeParams.equipId;

  $http.get('/api/tech/customer/' + custId + '/equipment').success(function(data) {
    console.dir(data);

  })

});