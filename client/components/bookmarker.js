angular.module('app')
  .component('bookMarker', {
    templateUrl: 'templates/bookmarker.html',
    controller: function(linkService) {
      linkService.getLinks(links =>{
        this.links = links;
      });
      this.onSubmit = (url, description) => {
        linkService.send({ url, description }, (response) => {
          if (response) {
            linkService.getLinks((links) => {
              this.links = links;
            })
          }
        });
      }
    }

})