function mapVis(data) {
    var u = d3.select('.map')
        .selectAll('g')
        .data(data.features)
        .enter()
        .append('g');

    u.append('path')
        .attr('d', geoGenerator)
        .attr('fill', function (d) {
            return "white";
        })
        .attr('id', function (d) {
            this.parentNode.id = d.properties.precinct.toString();
        })
        .attr("opacity", 0.1);

    u.append('circle')
        .attr("fill", function (d) {
            return '#ffff99';

            // var precinctNumber = d.properties.precinct;
            // var precinctData = getComplaintInfo(precinctNumber);
            // if (precinctData === undefined) {
            //     return affectedColor("None");
            // }
            // return affectedColor(precinctData.mostAffected);

            // var precinctNumber = d.properties.precinct;
            // var precinctData = getComplaintInfo(precinctNumber);
            // if (precinctData === undefined) {
            //     return color(0);
            // }
            // return color(precinctData.complaints);
        })
        .attr("opacity", 0.75)
        // .attr('display', 'none')
        .attr("cx", function (d) {
            var view = this.parentNode.getBBox();
            return view.x + (view.width / 2);
        })
        .attr("cy", function (d) {
            var view = this.parentNode.getBBox();
            return view.y + (view.height / 2);
        })
        .attr("r", function (d) {
            // return 5;

            var precinctNumber = this.parentNode.id;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData === undefined) {
                return 0;
            }

            precinctData = precinctData.Hispanic;
            return precinctData;
        });

    hello();
}