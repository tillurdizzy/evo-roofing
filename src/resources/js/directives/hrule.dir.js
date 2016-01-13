app.directive('horizRule',[function () {
    return {
      restrict: 'E',
      scope:{
        margintop:'@',
        marginbottom:'@'
      },
      templateUrl:'resources/js/directives/templates/hrule.tpl.html',
      link: function(scope, elm, attrs) {
      }


    }
}]);