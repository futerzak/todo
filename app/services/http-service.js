angular.module('app')
.service('HttpService', function($http, $state) {
  this.getData = (path) => {

    let result = {};
    return $http.get("/api/" + path)
    .then((response) => {

      const todoData = response.data;

      result = todoData;
      return todoData;
    })
  }
  this.postData = (path, data) => {
    return $http.post("/api/"+path, data)
      .then(response => {
        return response.data;
      });
  }
})
.service('PostService', function($http) {
  this.find = (path, id) => {

    return $http.post("/api/"+path+"/"+id, {id: id}).then((response) => {
      return response.data;
    })
  }
})
