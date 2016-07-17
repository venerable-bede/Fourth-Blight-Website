angular.module('FourthBlightApp')
.controller('MapCtrl', function ($scope) {
  
  	var width = document.getElementById("pageContent").offsetWidth - 100,
    height = 500,
    radius = 25;

	var topology = hexTopology(radius, width, height);

	var projection = hexProjection(radius);

	var path = d3.geo.path()
	    .projection(projection);

	var svg = d3.select("#hex-map").append("svg")
	    .attr("width", width)
	    .attr("height", height);
	    
  	var defs = svg.append("defs");
  	defs.append("pattern")
      .attr("id", "forest")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 40)
      .attr("width", 40)
      .append("image")
      .attr("xlink:href","/hexicons/tree.svg")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 40)
      .attr("width", 40)

    defs.append("pattern")
      .attr("id", "mountain")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 40)
      .attr("width", 40)
      .append("image")
      .attr("xlink:href","/hexicons/mountain.svg")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 40)
      .attr("width", 40)

      
	svg.append("g")
	    .attr("class", "hexagon")
	  .selectAll("path")
	    .data(topology.objects.hexagons.geometries)
	  .enter().append("path")
	    .attr("d", function(d) { return path(topojson.feature(topology, d)); })
	    .attr("class", function(d) { return d.fill ? "fill" : null; })
	    .style("fill", function(d) { 
	    	var seed =  Math.floor(Math.random() * 4) + 1;
	    	if (seed == 1)
	    		return "url(#mountain)"
	    	else if (seed == 2)
	    	 	return "url(#forest)"
	    	else 
	    		return null
	    })
	    .on("mousedown", mousedown)

	svg.append("path")
	    .datum(topojson.mesh(topology, topology.objects.hexagons))
	    .attr("class", "mesh")
	    .attr("d", path);

	function mousedown(d) {
	    d3.select(this).attr("class", "border")
	}

	function hexTopology(radius, width, height) {
	  var dx = radius * 2 * Math.sin(Math.PI / 3),
	      dy = radius * 1.5,
	      m = Math.ceil((height + radius) / dy) + 1,
	      n = Math.ceil(width / dx) + 1,
	      geometries = [],
	      arcs = [];

	  for (var j = -1; j <= m; ++j) {
	    for (var i = -1; i <= n; ++i) {
	      var y = j * 2, x = (i + (j & 1) / 2) * 2;
	      arcs.push([[x, y - 1], [1, 1]], [[x + 1, y], [0, 1]], [[x + 1, y + 1], [-1, 1]]);
	    }
	  }

	  for (var j = 0, q = 3; j < m; ++j, q += 6) {
	    for (var i = 0; i < n; ++i, q += 3) {
	      geometries.push({
	        type: "Polygon",
	        arcs: [[q, q + 1, q + 2, ~(q + (n + 2 - (j & 1)) * 3), ~(q - 2), ~(q - (n + 2 + (j & 1)) * 3 + 2)]],
	        fill: Math.random() > i / n * 2
	      });
	    }
	  }

	  return {
	    transform: {translate: [0, 0], scale: [1, 1]},
	    objects: {hexagons: {type: "GeometryCollection", geometries: geometries}},
	    arcs: arcs
	  };
	}

	function hexProjection(radius) {
	  var dx = radius * 2 * Math.sin(Math.PI / 3),
	      dy = radius * 1.5;
	  return {
	    stream: function(stream) {
	      return {
	        point: function(x, y) { stream.point(x * dx / 2, (y - (2 - (y & 1)) / 3) * dy / 2); },
	        lineStart: function() { stream.lineStart(); },
	        lineEnd: function() { stream.lineEnd(); },
	        polygonStart: function() { stream.polygonStart(); },
	        polygonEnd: function() { stream.polygonEnd(); }
	      };
	    }
	  };
	}

})
