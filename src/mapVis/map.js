function mapVis(data) {
    var scale = 70000;
    // var realWidth = $(window).width();
    // var realHeight = $(window).height();
    // var scale = realWidth * realHeight * 0.11601620249136509;
    // console.log("Real width: " + realWidth);
    // console.log("Real height: " + realHeight);
    // console.log("New scale: " + scale);

    var width = scale * (-0.583);
    var height = scale * (0.1452);

    var projection = d3.geoAlbers()
        .translate([width / 2, height / 2])
        .scale(scale);

    var geoGenerator = d3.geoPath()
        .projection(projection);

    function update(geojson) {
        var color = d3.scaleThreshold()
            .domain([0, 10, 20])
            .range(["#FFEEFF", "#FFAAFF", "#FF88FF"]);

        var u = d3.select('#content g.map')
            .selectAll('path')
            .data(geojson.features);

        u.enter()
            .append('path')
            .attr('d', geoGenerator)
            .style("fill", function(d) {
                return color(rateById)
            })
            .on("mouseover", function(d) {
                d3.selectAll('path')
                    .style("opacity", 0.5);

                d3.select(this)
                    .style("fill", "red")
                    .style("opacity", 1);
            })
            .on("mouseleave", function(d) {
                d3.selectAll('path')
                    .style("opacity", 1);
                d3.select(this)
                    .style("fill", "lightgrey")
                    .style("stroke", "white");
            });
    }

    update(data);
}