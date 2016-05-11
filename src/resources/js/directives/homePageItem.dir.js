app.directive('homePageItem', function () {
    return {
      restrict: 'E',
      scope:{
        title:'@',
        imgsrc:'@'
      },
      templateUrl:'resources/js/directives/templates/home-grid.tpl.html',
      link: function(scope, elm, attrs) {
      }
    }
});