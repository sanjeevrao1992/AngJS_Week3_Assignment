(function () {

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		restrict: 'E',
		templateurl: 'foundItems.html',
		scope: {
			foundItems: '<',
			onRemove: '&'
		}
	};
	return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var ctrl = this;

	ctrl.searchTerm = 'chicken';

	var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

	ctrl.found = promise;

	ctrl.remove = function (index) {
		return MenuSearchService.removeItem(index);
	}
	

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http, searchTerm) {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		var foundItems = [];

		searchTerm = searchTerm.trim().toLowerCase();

		return $http ({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function(response) {

			for(var i=0; i<response.data.menu_items.length; i++) {
			
				if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
					foundItems.push(response.data.menu_items[i]);
				}
			}

		}).catch(function(errorResponse) {
			console.log(errorResponse);
		});
		return foundItems;
	};

	service.removeItem = function (itemIndex, found) {
		found.splice(itemIndex, 1);
		return found;
	};
}

})();
