angular.module('app')
  .controller('AddCtrl', ['$rootScope', '$scope', '$http', 'todo', 'PostService', function ($rootScope, $scope, $http, todo, PostService) {

    $scope.contents = "To jest strona o nas";

    $scope.todo = todo;
    console.log(todo);


  }]);
