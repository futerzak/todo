angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('list', {
      url: '/list',
      templateUrl: 'app/list/list.html',
      controller: 'ListCtrl',
      resolve: {
        todoData: ($stateParams, HttpService) => {
          return HttpService.getData('list').then(re => {
            return re;
          });
        }
      }
    });
  }]);
