(function (angular) {
'use strict';
angular.module('MenuApp')
.controller('ItemController', ItemController);
ItemController.$inject = ['items', 'MenuDataService'];
function ItemController (items, MenuDataService) {
  var itemCtrl = this;
  itemCtrl.items = items;
}

})(window.angular);
