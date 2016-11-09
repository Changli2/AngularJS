(function(angular) {
angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: "src/menu/templates/home.template.html"
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categories.template.html',
    controller: 'CategoryController as cateCtrl',
    resolve: {
      items: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCatagories();
      }],
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: "src/menu/templates/items.template.html",
    controller: "ItemController as itemCtrl",
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  })
  ;
}

})(window.angular);
