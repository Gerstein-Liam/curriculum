	
	var myApp = angular.module('myApp', []);
	
	var holder;
	
	myApp.controller('SVG_Ctrl', function($scope) {
		
	
	holder = d3.select("#draw_zone").append("svg").attr("width", 600).attr("height", 300);
	// draw a rectangle
	holder.append("rect").attr("x", 300).attr("y", 150).style("fill", "none").style("stroke", "blue").attr("height", 150).attr("width", 200);
		
		$scope.height = new UpdateHeigth(50);
		$scope.width = new UpdateWidth(50);
	});

	function UpdateHeigth(numOfPcs) {
		var height = numOfPcs;
		this.__defineGetter__("height", function() {
			holder.selectAll("rect").attr("y", 150 - (height / 2)).attr("height", height);
			return height;
		});
		this.__defineSetter__("height", function(val) {
			val = parseInt(val);
			height = val;
		});
	}

	function UpdateWidth(numOfPcs) {
		var width = numOfPcs;
		this.__defineGetter__("width", function() {
			holder.selectAll("rect").attr("x", 150 - (width / 2)).attr("width", width);
			return width;
		});
		this.__defineSetter__("width", function(val) {
			val = parseInt(val);
			width = val;
		});
	}
	