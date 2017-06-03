(function () {

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
//.directive('foundItems', FoundItems);

//function FoundItems() {
//	var ddo = {
//		templateurl: 'foundItems.html',
//		scope: {
//			onremove: '&'
//		}
//	};
//	return ddo;
//}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var ctrl = this;

	ctrl.searchTerm = 'chicken';

	var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

	ctrl.found = promise.foundItems;

	//ctrl.remove = MenuSearchService.removeItem(index);

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

			for(var i=0; i<=response.data.length; i++) {
			
				if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
					foundItems.push(response.data.menu_items[i]);
					console.log(foundItems);
				}
			}

		}).catch(function(errorResponse) {
			console.log("Error while retrieving data!");
		});
		return foundItems;
	};

	//service.removeItem = function (itemIndex) {
	//	found.splice(itemIndex, 1);
	//	return found;
	//};
}

})();
