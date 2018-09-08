angular.module('app')
  .component('bookMarker', {
    templateUrl: 'templates/bookmarker.html',
    controller: (linkService) => {
      linkService.getLinks((links) => {
        console.log(links, "bookc")
        this.links = links
      })
    }

})