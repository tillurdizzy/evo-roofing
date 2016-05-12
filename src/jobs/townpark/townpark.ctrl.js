'use strict';

app.controller('TownParkCtrl', ['$scope', function($scope) {
    var ME = this;

    //Letters represet the photo pairs.. A is first pair, B is second pair
    // true means the top (before) photo is visible, false means the bottom (after) photo is visible
    ME.photo01 = 'before';
    ME.photo02 = 'before';
    ME.photo03 = 'before';
    ME.photo04 = 'before';
    ME.photo05 = 'before';

    ME.reset = function() {
        ME.photo01 = 'before';
        ME.photo02 = 'before';
        ME.photo03 = 'before';
        ME.photo04 = 'before';
        ME.photo05 = 'before';
    }


}]);
