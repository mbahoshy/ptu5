angular.module('tech').controller('DashboardCtrl',function($scope, $location, $http){



  $http.get('/api/tech/customer').success(function(data, status) {
    $scope.customerList = data;

  });


  $scope.customerClick = function (customer) {
    $location.url('/customer/' + customer._id);

  }

  $scope.instantSearch = function () {
    if (this.stoppedTyping) clearTimeout(this.stoppedTyping);
    // set a new timer to execute 3 seconds from last keypress
    this.stoppedTyping = setTimeout(function(){
      // $('#customer_search').trigger('click');
      $scope.search();
    }, 100);
  }

  $scope.search = function () {

    var searchterms = $scope.search.terms.toUpperCase();
    var searchparameters = 'search.' + $scope.search.parameters;

    if (searchterms == '') {
      $.get('/api/tech/customer', function(data) {
        $scope.customerList = data;

      });
    } else {

      var y = {};
      y[searchparameters] = searchterms;

      $http.post('/api/tech/customersearch', y).success(function(data, status) {
        $scope.customerList = data;
      });
    }
  }

});