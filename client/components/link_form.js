angular.module('app')
  .component('linkForm',{
    templateUrl: '/templates/link_form.html',
    controller: function(){
      this.onSubmit = (url, description)=>{
        console.log({url, description})
      }
    }
  })