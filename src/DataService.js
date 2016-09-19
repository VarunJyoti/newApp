angular.module('myApp').factory('DataService',function($resource){

	var dService = {};

	dService.getUserList = $resource('/userlist');
	dService.getCompanyList = $resource('/data/companyList.json');
	return dService;
	
});