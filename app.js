(function () {

angular.module('NarrowItDownApp', [])
.controller('narrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController () {
	var ctrl = this;

	ctrl.NarrowItDownButton = getMatchedMenuItems();
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
	var service = this;

	service.getMatchedMenuItems(searchTerm) = function () {
		var response = {
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		};
		console.log(response);
		return response;
	};
}

})();