angular.module('app')
  .controller('EditCtrl', ['$rootScope', '$scope', '$http', 'todo', 'HttpService', function ($rootScope, $scope, $http, todo, HttpService) {

    $scope.contents = "To jest strona o nas";

    $scope.todo = todo;

    $scope.submit = () => {
      if($scope.todo.id != null && $scope.todo.title != "") {
        console.log($scope.todo);
        HttpService.postData('edit/'+$scope.todo.id, {
          id: $scope.todo.id,
          title: $scope.todo.title,
          description: $scope.todo.description
        }).then(res => console.log(res));
      }
    }

  }]);
