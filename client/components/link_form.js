angular.module('app')
  .component('linkForm',{
    templateUrl: '/templates/link_form.html',
    controller: function(linkService){
      this.onSubmit = (url, description) => {
        
        linkService.send({url, description})
      }
    }
  })