
//размеры холста
var x0 = -180;
var y0 = -90;
var width_x = 360;
var height_y = 180;

//объект радар
var Radar_main_lat_y = 56.42;
var Radar_main_long_x = 58.53;
var Main_radar = {
	x : Radar_main_long_x,
	y : Radar_main_lat_y
}

//координаты лучей радара
var Beams = [
	[86.19, 4.46],
	[87.45, 25.24],
	[87.87, 66.44],
	[87.07, 101.10],
	[85.67, 116.53],
	[84.09, 123.41],
	[82.45, 126.75],
	[80.77, 128.40],
	[79.09, 129.11],
	[77.39, 129.27],
	[75.70, 129.05],
	[74.02, 128.59],
	[72.33, 127.94],
	[70.66, 127.16],
	[69.00, 126.27],
	[67.34, 125.30]
];


//перевод из градусов в радианы
var transform_to_radians = Math.PI / 180;


var lines = contours.split('\n');


function New_continents(){ //отображение материков

	let line_null = 0;  
	let StartPointContinent = {
		x : 0,
		y : 0
	}
	let FinishPointContinent = {
		x : 0,
		y : 0
	}

	for(var i = 0; i < lines.length; i++){
		if (lines[i] != ""){
			let coords = lines[i].split(' ');
			if (i == 0){
				StartPointContinent.x = parseFloat(coords[0]);
				StartPointContinent.y = parseFloat(coords[1]);
			}
			else{
				if (line_null != -1){
					FinishPointContinent.x = parseFloat(coords[0]);
					FinishPointContinent.y = parseFloat(coords[1]);
					New_Beams(StartPointContinent, FinishPointContinent);

					StartPointContinent.x = parseFloat(coords[0]);
					StartPointContinent.y = parseFloat(coords[1]);
				}
				else{
					StartPointContinent.x = parseFloat(coords[0]);
					StartPointContinent.y = parseFloat(coords[1]);
					line_null = 0;
				}
			}    		
    	}
    	else{
    		line_null = -1;
    	}
 	}

}


function Create_SVG(){ //рисуем холст для изображения

	var my_svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	my_svg.id = "svg_id";
	//my_svg.setAttribute('width', '400');
	//my_svg.setAttribute('height', '300');
	var string_viewbox = String(x0) +' '+ String(y0) +' '+ String(width_x) + ' ' + String(height_y);
	my_svg.setAttribute('style', 'border: 1px solid black');
	my_svg.setAttribute('viewBox', string_viewbox);

	var js_element_1 = document.getElementById("js_element_1");
	js_element_1.appendChild(my_svg);

}


function New_radar(Main_radar){ //отображаем координаты радара
	
	
	//var const_x = 400;
	//var const_y = 300;

	var Radar = document.createElementNS("http://www.w3.org/2000/svg","circle");

	//Main_radar.Radar_cx = radar_long_x;
    //Main_radar.Radar_cy = 90 - (Main_radar.Radar_cy - 50);

    var point = Gnomonic_projection_radar(Main_radar);
	Radar.setAttribute('r', '1');
	Radar.setAttribute('cx', point.x);
	Radar.setAttribute('cy', point.y);
	Radar.setAttribute('fill', 'orangered');
	Radar.setAttribute('stroke', 'crimson');
	Radar.setAttribute('stroke-width', '1');

	
	var svg_id = document.getElementById("svg_id");
	svg_id.appendChild(Radar);

}


function New_Beams(Main_radar, My_beam){ //отрисовка лучей

	//var const_x = 400;
	//var const_y = 300;

	

	var New_beam = document.createElementNS("http://www.w3.org/2000/svg","line");


	var point1 = Gnomonic_projection_radar(Main_radar); //координаты радара
	var point2 = Gnomonic_projection_radar(My_beam); //физические координаты точки на луче

	point1.y = - point1.y; //изменение направления оси y
	point2.y = - point2.y;

	New_beam.setAttribute('x1', point1.x);
	New_beam.setAttribute('y1', point1.y);
	New_beam.setAttribute('x2', point2.x);
	New_beam.setAttribute('y2', point2.y);
	New_beam.setAttribute('style', 'stroke:red;stroke-width:0.5');


	var svg_id = document.getElementById("svg_id");
	svg_id.appendChild(New_beam);

}


function Main_logic(){ //главная функция - полная отрисовка изображения


	Create_SVG();

	New_radar(Main_radar);

	for (var i = 0; i < Beams.length; i++){
		let point = {"x" : Beams[i][1], "y" : Beams[i][0]};
		console.log(point);
		New_Beams(Main_radar, point);
	}

	New_continents();	

}


function Gnomonic_projection_radar(point){ // гномоническая проекция

	let LatitudeRadar_radians = Radar_main_lat_y * transform_to_radians;

	let cosC = Math.sin(Main_radar.y * transform_to_radians) * Math.sin(point.y * transform_to_radians)  + Math.cos(Main_radar.y * transform_to_radians) * Math.cos(point.y * transform_to_radians) * Math.cos( (point.x - Main_radar.x) * transform_to_radians );
	
	let x = Math.cos(point.y * transform_to_radians) * Math.sin( (point.x - Main_radar.x) * transform_to_radians ) / cosC;

	let y = (Math.cos(Main_radar.y * transform_to_radians) * Math.sin(point.y * transform_to_radians)  - Math.sin(Main_radar.y * transform_to_radians) * Math.cos(point.y * transform_to_radians) * Math.cos( (point.x - Main_radar.x) * transform_to_radians ) ) / cosC;

	return {"x" : x/transform_to_radians, "y" : y/transform_to_radians};

}






