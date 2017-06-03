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

	var sanjeev = 'sanjeev';
	console.log(sanjeev);

	ctrl.searchTerm = 'chicken';
	console.log(ctrl.searchTerm);

	var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

	promise.then(function(serverList) {

	})

	ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

	//ctrl.remove = MenuSearchService.removeItem(index);

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http, searchTerm) {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		var serverList = [];
		serverList = $http ({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function(searchTerm) {
			console.log(serverList);
			var foundItems = [];
			if (searchTerm == serverList.indexOf(serverList.description)) {
				var x = {
					name: serverList.name,
					id: serverList.id,
					//description = service.serverList.description
				};
				foundItems.push(x);
			}
			return foundItems;
		});
		//console.log(serverList);
	};

	service.removeItem = function (itemIndex) {
		found.splice(itemIndex, 1);
		return found;
	};
}

})();
