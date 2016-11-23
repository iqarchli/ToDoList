(function () {
    //Create a Module 
    var app = angular.module('MyApp', ['ui.grid', 'ui.grid.edit']);  // Will use ['ng-Route'] when we will implement routing
    //Create a Controller
    app.controller('HomeController', function ($scope,$http, $location, helloService) {
        var root = 'https://jsonplaceholder.typicode.com';  // here $scope is used for share data between view and controller
        $scope.message = "yo!";
        //$scope.myDatsa = 


        $scope.cusurl = $location.absUrl();



 		$http.get(root+'/posts').success( function(response) {
     	//$scope.students = response; 
         //$scope.myData = response;
        
  		}); 

         $scope.myData = [{name: "Moroni", age: 50},
                 {name: "Tiancum", age: 43},
                 {name: "Jacob", age: 27},
                 {name: "Nephi", age: 29},
                 {name: "Enos", age: 34}];   

        $scope.gridOptions = { 

        	enableFiltering : true ,
        columnDefs: [
          { name:'firstName', field: 'first-name' },
          { name:'1stFriend', field: 'friends[0]' },
          { name:'city', field: 'address.city'},
          { name:'street', field: 'address.street'},
          { name:'getZip', field: 'getZip()', enableCellEdit:false}
        ],
        	showGridFooter: true,
        	showColumnFooter: true,
        	
        	data : [   {
                           "first-name": "Cox",
                           "friends": ["friend0"],
                           "address": {street:"301 Dove Ave", city:"Laurel", zip:"39565"},
                           "getZip" : function() {return this.address.zip;}
                       },
                       {
                           "first-name": "Cox",
                           "friends": ["friend0"],
                           "address": {street:"301 Dove Ave", city:"Laurel", zip:"39565"},
                           "getZip" : function() {return this.address.zip;}
                       }

                   ]
        };      

      
           

       $scope.hellovar = helloService.testingservicevar(5);
        


        
    });

    app.service('helloService', function(){
    	this.testingservicevar = function(x){
    		var y = x*2 ; 
    		return y.toString();
    	}
    })

})();

   




