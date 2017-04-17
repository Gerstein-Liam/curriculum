
mainApp.controller('SVG_Ctrl', function($scope) {
    
	$scope.i_green_state = 0;
	$scope.i_blue_state = 0;
	
	
	
	var green_state=0;
	var blue_state=0;
	
	var res_red_state=0;
	var past_state=0;
	var time_stamp = 0;
	
	var svg_green_state ;
	var svg_blue_state ;
	 var svg_res_red_state;
	
	 var svgGreenZone = d3.select("#green_zone").append("svg").attr("width", 200).attr("height", 100);$
	 var svgBlueZone = d3.select("#blue_zone").append("svg").attr("width", 200).attr("height", 100);
	  var svgRedZone = d3.select("#red_zone").append("svg").attr("width", 200).attr("height", 100);

    
	
     
	
	
	$scope.myFunction = function() {
        green_state = Boolean($scope.i_green_state);
        blue_state = Boolean($scope.i_blue_state);
        res_red_state = green_state & blue_state;
		
		svg_green_state = "" + String(time_stamp) + "," + String(10 + !green_state * 50) + "," + String(time_stamp + 30) + "," + String(10 + !green_state * 50) + "";
        svg_blue_state = "" + String(time_stamp) + "," + String(10 + !blue_state * 50) + "," + String(time_stamp + 30) + "," + String(10 + !blue_state * 50) + "";
		svg_res_red_state = "" + String(time_stamp) + "," + String(10 + !res_red_state * 50) + "," + String(time_stamp + 30) + "," + String(10 + !res_red_state * 50) + "";
        time_stamp = time_stamp + 30;
        $scope.o_res_red_past_state = res_red_state; 
		
		svgGreenZone.append("polyline").attr("points", svg_green_state).attr("stroke", "green").attr("stroke-width", 3);
        svgBlueZone.append("polyline").attr("points", svg_blue_state).attr("stroke", "blue").attr("stroke-width", 3);
		svgRedZone.append("polyline").attr("points", svg_res_red_state).attr("stroke", "red").attr("stroke-width", 3);
     
    }
});