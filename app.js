(function () {

angular.module('NarrowItDownApp', [])
.controller('narrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);

var foundItems () {
	var ddo = {

	},
	templateurl:
	onremove: '&'

	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var ctrl = this;

	ctrl.searchTerm = '';

	ctrl.found = MenusearchService.getMatchedMenuItems(searchTerm);

	ctrl.remove = MenusearchService.removeItem(index);


}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		service.serverList = [];
		serverList = $http {
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		}
		.then(function(result, searchTerm) {
			var foundItems = [];
			if (searchTerm == indexOf (serverList.description)) {
				var x = {
					name: serverList.name,
					id: serverList.id,
					description = serverList.description
				};
				foundItems.push(x);
			}
			return foundItems;
		});
		console.log(serverList);
		
	};

	service.removeItem = function (itemIndex) {
		found.splice(itemIndex, 1);
		return found;
	};
}

})();
