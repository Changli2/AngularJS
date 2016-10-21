(function() {
angular.module('LunchCheck', [])
.controller("LunchCheckController", MyLunchController);
MyLunchController.$inject = ['$scope'];

function MyLunchController($scope) {
  $scope.food = "";
  $scope.message = "";
  $scope.checkFood = function() {
    var items = $scope.food.split(",");
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.trim() !== "") {
        total++;
      }
    }
    if (total == 0) {
      $scope.message = "Empty";
    } else if (total <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
}
})();
