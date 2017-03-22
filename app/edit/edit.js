angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('edit', {
      url: '/edit/:todoId',
      templateUrl: 'app/edit/edit.html',
      controller: 'EditCtrl',
      resolve: {
        todo: function($stateParams, PostService) {
          return PostService.find('edit', $stateParams.todoId);
        }
      }
    });

  }]);
