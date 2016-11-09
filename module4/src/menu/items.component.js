(function(angular) {
'use strict';
angular.module("MenuApp")
.component("items", {
  bindings: {
    items: '<'
  },
  templateUrl: "src/menu/templates/items.component.html",
});


})(window.angular);
