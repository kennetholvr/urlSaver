angular.module('app')
  .component('linkForm',{
    templateUrl: '/templates/link_form.html',
    controller: function(linkService){

    },
    bindings:{
      click: '<'
    }
  })