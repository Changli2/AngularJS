(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);
var END_POINT = "https://davids-restaurant.herokuapp.com/menu_items.json";
function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'list.html',
    scope: {
      foundItems: "<",
      onRemove: "&"
    },
  };
  return ddo;
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: 'GET',
      url: END_POINT
    }).then(function(result) {
      var foundItems = [];
      for (var i = 0; i < result.data.menu_items.length; i++) {
        var item = result.data.menu_items[i];
        if (item.description.indexOf(searchTerm) !== -1) {
          foundItems.push(item);
        }
      }
      return foundItems;
    });
  }
}

NarrowItDownController.$inspect = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.found = null;
  ctrl.searchTerm = "";
  ctrl.handleClick = function() {
    var searchTerm = ctrl.searchTerm || "";
    if (!searchTerm.trim()) {
      ctrl.found = [];
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm.trim().toLowerCase());
    promise.then(function(result) {
      ctrl.found = result;
    });
  };

  ctrl.removeItem = function(index) {
    if (ctrl.found.length === 1) {
      ctrl.found = null;
    } else {
      ctrl.found.splice(index, 1);
    }
  };
}
})();
