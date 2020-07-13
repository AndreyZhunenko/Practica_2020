

function Create_SVG(){

	var my_svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	my_svg.id = "svg_id";
	my_svg.setAttribute('style', 'border: 1px solid black');
	my_svg.setAttribute('width', '400');
	my_svg.setAttribute('height', '300');
	//my_svg.setAttribute('viewBox', '0 0 100 100');

	var js_element_1 = document.getElementById("js_element_1");
	js_element_1.appendChild(my_svg);

}


function New_radar(Main_radar, radar_lat_y, radar_long_x){
	
	
	var const_x = 400;
	var const_y = 300;

	var Radar = document.createElementNS("http://www.w3.org/2000/svg","circle");

	Main_radar.Radar_cx = radar_long_x;
	Main_radar.Radar_cy = const_y - radar_lat_y;

	Radar.setAttribute('r', '5');
	Radar.setAttribute('cx', Main_radar.Radar_cx);
	Radar.setAttribute('cy', Main_radar.Radar_cy);
	Radar.setAttribute('fill', 'orangered');
	Radar.setAttribute('stroke', 'crimson');
	Radar.setAttribute('stroke-width', '5');

	
	var svg_id = document.getElementById("svg_id");
	svg_id.appendChild(Radar);

}


function New_Beams(Main_radar, My_beam){

	var const_x = 400;
	var const_y = 300;

	var New_beam_y2 = const_y - My_beam.beamLat_y;

	var New_beam = document.createElementNS("http://www.w3.org/2000/svg","line");

	New_beam.setAttribute('x1', Main_radar.Radar_cx);
	New_beam.setAttribute('y1', Main_radar.Radar_cy);
	New_beam.setAttribute('x2', My_beam.beamLong_x);
	New_beam.setAttribute('y2', New_beam_y2);
	New_beam.setAttribute('style', 'stroke:red;stroke-width:0.5');


	var svg_id = document.getElementById("svg_id");
	svg_id.appendChild(New_beam);

}


function Main_logic(){

	var number_beams = 16;

	var Main_radar = {
		Radar_cx : 0,
		Radar_cy : 0
	}

	var Radar_main_lat_y = 56.42;
	var Radar_main_long_x = 58.53;



	var Beam_0={
		beamLat_y : 86.19,
		beamLong_x : 4.46
	}
	var Beam_1={
		beamLat_y : 87.45,
		beamLong_x : 25.24
	}
	var Beam_2={	
		beamLat_y : 87.87,
		beamLong_x : 66.44
	}
	var Beam_3={
		beamLat_y : 87.07,
		beamLong_x : 101.10
	}
	var Beam_4={	
		beamLat_y : 85.67,
		beamLong_x : 116.53
	}
	var Beam_5={	
		beamLat_y : 84.09,
		beamLong_x : 123.41
	}
	var Beam_6={	
		beamLat_y : 82.45,
		beamLong_x : 126.75
	}
	var Beam_7={	
		beamLat_y : 80.77,
		beamLong_x : 128.40
	}
	var Beam_8={	
		beamLat_y : 79.09,
		beamLong_x : 129.11
	}
	var Beam_9={	
		beamLat_y : 77.39,
		beamLong_x : 129.27
	}
	var Beam_10={	
		beamLat_y : 75.70,
		beamLong_x : 129.05
	}
	var Beam_11={	
		beamLat_y : 74.02,
		beamLong_x : 128.59
	}
	var Beam_12={	
		beamLat_y : 72.33,
		beamLong_x : 127.94
	}
	var Beam_13={	
		beamLat_y : 70.66,
		beamLong_x : 127.16
	}
	var Beam_14={	
		beamLat_y : 69.00,
		beamLong_x : 126.27
	}
	var Beam_15={	
		beamLat_y : 67.34,
		beamLong_x : 125.30
	}


	Create_SVG();

	New_radar(Main_radar, Radar_main_lat_y, Radar_main_long_x);

	New_Beams(Main_radar, Beam_0);
	New_Beams(Main_radar, Beam_1);
	New_Beams(Main_radar, Beam_2);
	New_Beams(Main_radar, Beam_3);
	New_Beams(Main_radar, Beam_4);
	New_Beams(Main_radar, Beam_5);
	New_Beams(Main_radar, Beam_6);
	New_Beams(Main_radar, Beam_7);
	New_Beams(Main_radar, Beam_8);
	New_Beams(Main_radar, Beam_9);
	New_Beams(Main_radar, Beam_10);
	New_Beams(Main_radar, Beam_11);
	New_Beams(Main_radar, Beam_12);
	New_Beams(Main_radar, Beam_13);
	New_Beams(Main_radar, Beam_14);
	New_Beams(Main_radar, Beam_15);

}

