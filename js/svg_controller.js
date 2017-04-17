
mainApp.controller('SVG_Ctrl', function($scope) {
    
	$scope.i_green_state = 0;
	$scope.i_blue_state = 0;
	
	
	
	var green_state=0;
	var blue_state=0;
	var past_state=0;
	var current_state=0;
	var time_stamp = 0;
	
	
    var svgContainer = d3.select("#draw_zone").append("svg").attr("width", 200).attr("height", 400);
	//var svgContainer = d3.select("#draw_zone").append("svg").attr("width", 800).attr("height", 800);
    
	
     
	
	
	$scope.myFunction = function() {
        green_state = Boolean($scope.i_green_state);
        blue_state = Boolean($scope.i_blue_state);
        current_state = green_state & blue_state;
        var state1 = "" + String(time_stamp) + "," + String(10 + !green_state * 50) + "," + String(time_stamp + 30) + "," + String(10 + !green_state * 50) + "";
        var state2 = "" + String(time_stamp) + "," + String(70 + !blue_state * 50) + "," + String(time_stamp + 30) + "," + String(70 + !blue_state * 50) + "";
        var stateres = "" + String(time_stamp) + "," + String(140 + !current_state * 50) + "," + String(time_stamp + 30) + "," + String(140 + !current_state * 50) + "";
        time_stamp = time_stamp + 30;
        $scope.past_state = current_state; 
        var circle = svgContainer.append("polyline").attr("points", state1).attr("stroke", "blue").attr("stroke-width", 3);
        $scope.count = current_state;
        var circle = svgContainer.append("polyline").attr("points", state2).attr("stroke", "blue").attr("stroke-width", 3);
        $scope.count = current_state;
        var circle = svgContainer.append("polyline").attr("points", "0,135,350,135").attr("stroke", "black").attr("stroke-width", 1);
        $scope.count = current_state;
        var circle = svgContainer.append("polyline").attr("points", stateres).attr("stroke", "green").attr("stroke-width", 3);
        $scope.count = current_state;
    }
});