angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('add', {
      url: '/edit/:todoId',
      templateUrl: 'app/add/add.html',
      controller: 'AddCtrl',
      resolve: {
        todo: function($stateParams, PostService) {
          return PostService.find('add', $stateParams.todoId);
        }
      }
    });

  }]);
