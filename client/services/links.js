angular.module('app').service('linkService', function linkService($http) {
  this.send = ({url, description}) =>{
    $http.post('/links', { url, description })
    .then((response) => {
      console.log(response)
      }).catch((err) => {
        console.error(err)
      })
  };
});