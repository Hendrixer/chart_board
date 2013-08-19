(function(){
var t;
function size(animate){
	if (animate == undefined){
		animate = false;
	}
	clearTimeout(t);
	t = setTimeout(function(){
		$("canvas").each(function(i,el){
			$(el).attr({
				"width":$(el).parent().width(),
				"height":$(el).parent().outerHeight()
			});
		});
		redraw(animate);
		var m = 0;
		$(".widget").height("");
		$(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
		$(".widget").height(m);
	}, 30);
}
$(window).on('resize', function(){ size(false); });


function redraw(animation){
	var options = {};
	if (!animation){
		options.animation = false;
	} else {
		options.animation = true;
	}
	var data = [
		{
			value: 40,
			color:"#c62f29"
		},
		{
			value : 17,
			color : "#2c9c69"
		},
		{
			value : 11,
			color : "#dbba34"
		},
		{
			value : 6,
			color : "#637b85"
		},
		{
			value: 10,
			color: "#7e1453"
		}

	];
	var canvas = document.getElementById("location");
	var ctx = canvas.getContext("2d");
	new Chart(ctx).Doughnut(data, options);

/*	var data = {
		labels : ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
		datasets : [
			{
				fillColor : "rgba(99,123,133,0.4)",
	            strokeColor : "rgba(220,220,220,1)",
	            pointColor : "rgba(220,220,220,1)",
	            pointStrokeColor : "#fff",
	            data : [65,54,30,81,56,55,40]
			},
			{
				fillColor : "rgba(219,186,52,0.4)",
	            strokeColor : "rgba(220,220,220,1)",
	            pointColor : "rgba(220,220,220,1)",
	            pointStrokeColor : "#fff",
	            data : [20,60,42,58,31,21,50]
			}
		]
	} 


	var canvas = document.getElementById("hours");
	var ctx= canvas.getContext("2d");
	new Chart(ctx1).Line(data, options); */

	var data = [
		{
			value: 31,
			color:"#c62f29"
		},
		{
			value : 29,
			color : "#2c9c69"
		},
		{
			value : 20,
			color : "#dbba34"
		},
		{
			value : 12,
			color : "#637b85"
		},
		{
			value: 8,
			color: "#7e1453"
		}

	];
	var canvas1 = document.getElementById("schools");
	var ctx1 = canvas1.getContext("2d");
	new Chart(ctx1).Doughnut(data, options);

	var data = {
		labels : ["Javascript", "Ruby", "PHP", "iOS", "Android", ".ASP/.NET"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
	            strokeColor : "#637b85",
	            pointColor : "#dbba34",
	            pointStrokeColor : "#637b85",
	            data : [110,150,30,80,30,15]
			}
		]
	}
	var canvas2 = document.getElementById("lang");
	var ctx2 = canvas2.getContext("2d");
	new Chart(ctx2).Radar(data, options);

}
size(true);

}());