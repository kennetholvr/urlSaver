angular.module('app')
  .component('bookMarker', {
    templateUrl: 'templates/bookmarker.html',
    controller: function(linkService) {
      linkService.getLinks( (links) => {
        
        this.links = links;
        
      })
    }

})