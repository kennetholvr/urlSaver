angular.module('app').service('linkService', function linkService($http) {
  this.send = ({url, description}) =>{
    $http.post('/links')
    .then((response) => {
      console.log(response)
      }).catch((err) => {
        console.error(err)
      })
  };
});