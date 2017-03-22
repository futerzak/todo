angular.module('app')
  .controller('ListCtrl', ['$rootScope', '$scope', '$http', 'todoData', 'HttpService', function ($rootScope, $scope, $http, todoData, HttpService) {

    $scope.contents = "To jest strona o nas";

    $scope.todoData = todoData;


    $scope.params = {
      page: 1,
      numberOnPage: 20,
      type: "",
      tags: ""
    }
    $scope.queryParams = {
      start: ($scope.params.page-1)*$scope.params.numberOnPage,
      num: $scope.params.numberOnPage,
      id: "",
      filter: "text",
      tagged: $scope.params.tags,
      chrono: ""
     };

     $scope.next = () => {
         $scope.params.page++;
     }

     $scope.prev = () => {
         if($scope.params.page > 1){
             $scope.params.page--;
         }
     }

    for(param in $scope.params) {

      $scope.$watch('params.'+param, () => {

        $scope.queryParams = {
          start: ($scope.params.page-1)*$scope.params.numberOnPage,
          num: $scope.params.numberOnPage,
          id: "",
          filter: "",
          tagged: $scope.params.tags,
          chrono: ""
        };


        HttpService.getData('list?start='+$scope.queryParams.start+'&num='+$scope.queryParams.num).then(re => {
          $scope.todoData = re;
          return re;
        });
      });
    }


}]);
