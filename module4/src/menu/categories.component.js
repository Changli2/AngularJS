(function(angular) {
'use strict';
angular.module("MenuApp")
.component("categories", {
  bindings: {
    items: '<'
  },
  templateUrl: 'src/menu/templates/categories.component.html'
});


})(window.angular);
