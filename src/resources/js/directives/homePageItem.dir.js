app.directive('homePageItem', function () {
    return {
      restrict: 'E',
      scope:{
        title:'@',
        imgsrc:'@'
      },
      templateUrl:'resources/js/directives/templates/homeItemTemplate.html',
      link: function(scope, elm, attrs) {
      }
    }
});