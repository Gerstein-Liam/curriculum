
var holder;
var last_state;
var time_stamp;


mainApp.controller('SVG_Ctrl', function($scope) {
    $scope.count = 0;
    time_stamp = 0;
    var svgContainer = d3.select("#draw_zone").append("svg").attr("width", 800).attr("height", 800);
    $scope.myFunction = function() {
        var signal_1 = Boolean($scope.signal_1);
        var signal_2 = Boolean($scope.signal_2);
        var signal_res = signal_1 & signal_2;
        var state1 = "" + String(time_stamp) + "," + String(10 + !signal_1 * 50) + "," + String(time_stamp + 30) + "," + String(10 + !signal_1 * 50) + "";
        var state2 = "" + String(time_stamp) + "," + String(70 + !signal_2 * 50) + "," + String(time_stamp + 30) + "," + String(70 + !signal_2 * 50) + "";
        var stateres = "" + String(time_stamp) + "," + String(140 + !signal_res * 50) + "," + String(time_stamp + 30) + "," + String(140 + !signal_res * 50) + "";
        time_stamp = time_stamp + 30;
        $scope.count = time_stamp;
        var circle = svgContainer.append("polyline").attr("points", state1).attr("stroke", "blue").attr("stroke-width", 3);
        $scope.count = signal_res;
        var circle = svgContainer.append("polyline").attr("points", state2).attr("stroke", "blue").attr("stroke-width", 3);
        $scope.count = signal_res;
        var circle = svgContainer.append("polyline").attr("points", "0,135,800,135").attr("stroke", "black").attr("stroke-width", 1);
        $scope.count = signal_res;
        var circle = svgContainer.append("polyline").attr("points", stateres).attr("stroke", "green").attr("stroke-width", 3);
        $scope.count = signal_res;
    }
});