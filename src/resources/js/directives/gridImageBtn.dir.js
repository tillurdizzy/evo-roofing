app.directive('gridImageBtnItem', function () {
    return {
      restrict: 'A',
      scope:{
        title:'@',
        tagline:'@',
        titleclass:'@',
        rid:'@',
        imgsrc:'@'
      },
      templateUrl:'resources/js/directives/templates/gridImageTemp.html',
      link: function(scope, elm, attrs) {
      }
    }
});