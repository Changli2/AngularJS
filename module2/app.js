(function() {
  'use strict';
  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    var service = this;
    var bought = [];
    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "pancakes", quantity: 10 },
      { name: "mooncakes", quantity: 10 },
      { name: "burgers", quantity: 10 },
      { name: "sandwishes", quantity: 10 }
    ];

    service.moveItem = function(index) {
      var item = toBuy[index];
      toBuy.splice(index, 1);
      bought.push(item);
    };

    service.getToBuy = function() {
      return toBuy;
    };

    service.getBought = function() {
      return bought;
    };
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;
    buyCtrl.buyList = ShoppingListCheckOffService.getToBuy();
    buyCtrl.moveToBought = function(index) {
      ShoppingListCheckOffService.moveItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.boughtList = ShoppingListCheckOffService.getBought();
  }
})();
