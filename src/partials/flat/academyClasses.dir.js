app.directive('academyGridItem', function () {
    return {
      restrict: 'E',
      scope:{
        title:'@',
        ref:'@'
      },
      transclude:true,
      templateUrl:'partials/science/academyItem.tpl.html',

      link: function (scope,element,attrs,ctrl,transclude) {
        element.find('.content').append(transclude());

        scope.hover = false;

        element.on('mouseenter', function () {
          scope.hover = true;
          scope.$digest();
        });

        element.on('mouseleave', function () {
          scope.hover = false;
          scope.$digest();
        });

        scope.getHover = function(){
          return scope.hover;
        };
    }
  }
});