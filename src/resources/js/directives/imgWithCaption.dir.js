app.directive('imgWithCaption', function () {
    return {
      restrict: 'E',
      scope:{
        title:'@',
        cap:'@',
        imgsrc:'@'
      },
      templateUrl:'resources/js/directives/templates/imageWithCaption.html',
      link: function(scope, elm, attrs) {
      }
    }
});