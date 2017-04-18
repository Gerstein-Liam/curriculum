
mainApp.controller('SVG_Ctrl', function($scope) {
    
	$scope.i_green_state = 0;
	$scope.i_blue_state = 0;
	
	
	
	var current_green_state=0;
	var current_blue_state=0;
	var current_res_red_state=0;
	
	var past_green_state=0;
	var past_blue_state=0;
	var past_res_red_state=0;
	
	var past_state=0;
	var time_stamp = 0;
	
	var svg_green_state ;
	var svg_blue_state ;
	 var svg_res_red_state;
	
	 var svgGreenZone = d3.select("#green_zone").append("svg").attr("width", 200).attr("height", 60);$
	 var svgBlueZone = d3.select("#blue_zone").append("svg").attr("width", 200).attr("height", 60);
	  var svgRedZone = d3.select("#red_zone").append("svg").attr("width", 200).attr("height", 60);

    
	
     
	
	
	$scope.myFunction = function() {
        current_green_state = Boolean($scope.i_green_state);
        current_blue_state = Boolean($scope.i_blue_state);
        current_res_red_state = current_green_state & current_blue_state;
		
		if(current_green_state!=past_green_state){
			if (current_green_state==0){
			svg_green_state = ""+String(time_stamp)+"," +String(10 + 0 * 50)+"," + String(time_stamp) + "," + String(10 + !current_green_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_green_state * 50) + "";	
			}
			else{
			svg_green_state = ""+String(time_stamp)+"," +String(10 + 1 * 50)+"," + String(time_stamp) + "," + String(10 + !current_green_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_green_state * 50) + "";	
			}}
		else{
			svg_green_state = "" + String(time_stamp) + "," + String(10 + !current_green_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_green_state * 50) + "";
			}
			
			
			
		if(current_blue_state!=past_blue_state){
			if (current_blue_state==0){
			svg_blue_state = ""+String(time_stamp)+"," +String(10 + 0 * 50)+"," + String(time_stamp) + "," + String(10 + !current_blue_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_blue_state * 50) + "";	
			}
			else{
			svg_blue_state = ""+String(time_stamp)+"," +String(10 + 1 * 50)+"," + String(time_stamp) + "," + String(10 + !current_blue_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_blue_state * 50) + "";	
			}}
		else{
			svg_blue_state = "" + String(time_stamp) + "," + String(10 + !current_blue_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_blue_state * 50) + "";
			}
			
			
		if(current_res_red_state!=past_res_red_state){
			if (current_res_red_state==0){
			svg_res_red_state = ""+String(time_stamp)+"," +String(10 + 0 * 50)+"," + String(time_stamp) + "," + String(10 + !current_res_red_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_res_red_state * 50) + "";	
			}
			else{
			svg_res_red_state = ""+String(time_stamp)+"," +String(10 + 1 * 50)+"," + String(time_stamp) + "," + String(10 + !current_res_red_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_res_red_state * 50) + "";	
			}}
		else{
			svg_res_red_state = "" + String(time_stamp) + "," + String(10 + !current_res_red_state * 50) + "," + String(time_stamp + 25) + "," + String(10 + !current_res_red_state * 50) + "";
			}
		
		
        
		
        time_stamp = time_stamp + 25;
        $scope.o_res_red_past_state = current_res_red_state; 
		
		svgGreenZone.append("polyline").attr("points", svg_green_state).style("fill", "none").attr("stroke", "green").attr("stroke-width", 3);
        svgBlueZone.append("polyline").attr("points", svg_blue_state).style("fill", "none").attr("stroke", "blue").attr("stroke-width", 3);
		svgRedZone.append("polyline").attr("points", svg_res_red_state).style("fill", "none").attr("stroke", "red").attr("stroke-width", 3);
		
		
		past_green_state=current_green_state;
		past_blue_state=current_blue_state;
		past_res_red_state=current_res_red_state;
		
		
     
    }
});


holder.append("polyline")      // attach a polyline
    .style("stroke", "black")  // colour the line
    .style("fill", "none")     // remove any fill colour
    .attr("points", "100,50, 200,150, 300,50");  // x,y points