(function(angular) {
'use strict';
angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['items', 'MenuDataService'];
function CategoryController(items, MenuDataService) {
  var cateCtrl = this;
  cateCtrl.items = items;
}
})(window.angular);
