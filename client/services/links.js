angular.module('app')
  .service('linkService', function linkService($http) {

    this.send = ({url, description}, callback) =>{
      $http.post('/links', { url, description })
      .then((response) => {
        callback(response)
        }).catch((err) => {
          console.error(err)
        })
    };

    this.getLinks = (callback) => {
      $http.get('/links')
      .then(({data}) => callback(data))
      .catch(error=> console.log(error))
    }
    // write functin to retrieve links from server
});