angular.module('myAppName', [])
    .controller('FirstCtrl', function($scope, filterFilter) {
        


         $scope.remaining = 3;

         $scope.todos=[
         {
         name:"30 min remaining",
         completed: false
         },
         {
         name:"30 min remaining",
         completed: true
         }
         

         ];

         $scope.removeTodo = function (index){
         	$scope.todos.splice(index,1);	
         };

        $scope.$watch('todos', function(index){

        	$scope.remaining = filterFilter($scope.todos, {completed:false}).length;
        	$scope.allchecked = !$scope.remaining;


        }, true)

        $scope.addTodo=function(){
        	$scope.todos.push({
        		name: $scope.newtodo,
        		completed : false
        	});
        	$scope.newtodo=''; 
        }






	$scope.checkAllTodo = function(allchecked){
        	$scope.todos.forEach(function(todo){
        		todo.completed = allchecked;
        	});
        }














         
    });
