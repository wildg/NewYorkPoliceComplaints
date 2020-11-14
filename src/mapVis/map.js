var complaintByPrecinct = {
    "1": {
        "complaints": 11,
        "mostAffected": "White"
    },
    "5": {
        "complaints": 7,
        "mostAffected": "Black"
    },
    "6": {
        "complaints": 3,
        "mostAffected": "White"
    },
    "7": {
        "complaints": 16,
        "mostAffected": "White"
    },
    "9": {
        "complaints": 17,
        "mostAffected": "Black"
    },
    "10": {
        "complaints": 1,
        "mostAffected": "White"
    },
    "13": {
        "complaints": 15,
        "mostAffected": "Hispanic"
    },
    "14": {
        "complaints": 21,
        "mostAffected": "Black"
    },
    "18": {
        "complaints": 27,
        "mostAffected": "White"
    },
    "19": {
        "complaints": 11,
        "mostAffected": "White"
    },
    "20": {
        "complaints": 4,
        "mostAffected": "White"
    },
    "23": {
        "complaints": 9,
        "mostAffected": "Unknown"
    },
    "24": {
        "complaints": 6,
        "mostAffected": "Black"
    },
    "25": {
        "complaints": 33,
        "mostAffected": "White"
    },
    "26": {
        "complaints": 9,
        "mostAffected": "Hispanic"
    },
    "28": {
        "complaints": 4,
        "mostAffected": "Black"
    },
    "30": {
        "complaints": 10,
        "mostAffected": "Black"
    },
    "32": {
        "complaints": 12,
        "mostAffected": "Black"
    },
    "33": {
        "complaints": 8,
        "mostAffected": "Black"
    },
    "34": {
        "complaints": 27,
        "mostAffected": "Hispanic"
    },
    "40": {
        "complaints": 53,
        "mostAffected": "Hispanic"
    },
    "42": {
        "complaints": 38,
        "mostAffected": "Black"
    },
    "43": {
        "complaints": 39,
        "mostAffected": "Hispanic"
    },
    "44": {
        "complaints": 57,
        "mostAffected": "Hispanic"
    },
    "45": {
        "complaints": 3,
        "mostAffected": "Hispanic"
    },
    "46": {
        "complaints": 36,
        "mostAffected": "Black"
    },
    "47": {
        "complaints": 59,
        "mostAffected": "Black"
    },
    "48": {
        "complaints": 87,
        "mostAffected": "Black"
    },
    "49": {
        "complaints": 11,
        "mostAffected": "Black"
    },
    "50": {
        "complaints": 21,
        "mostAffected": "Hispanic"
    },
    "52": {
        "complaints": 37,
        "mostAffected": "Black"
    },
    "60": {
        "complaints": 30,
        "mostAffected": "White"
    },
    "61": {
        "complaints": 6,
        "mostAffected": "White"
    },
    "62": {
        "complaints": 16,
        "mostAffected": "White"
    },
    "63": {
        "complaints": 22,
        "mostAffected": "Black"
    },
    "67": {
        "complaints": 69,
        "mostAffected": "Black"
    },
    "68": {
        "complaints": 7,
        "mostAffected": "Hispanic"
    },
    "69": {
        "complaints": 26,
        "mostAffected": "Black"
    },
    "70": {
        "complaints": 35,
        "mostAffected": "Black"
    },
    "71": {
        "complaints": 35,
        "mostAffected": "Black"
    },
    "72": {
        "complaints": 12,
        "mostAffected": "Hispanic"
    },
    "73": {
        "complaints": 89,
        "mostAffected": "Black"
    },
    "75": {
        "complaints": 86,
        "mostAffected": "Black"
    },
    "76": {
        "complaints": 9,
        "mostAffected": "Black"
    },
    "77": {
        "complaints": 49,
        "mostAffected": "Black"
    },
    "78": {
        "complaints": 19,
        "mostAffected": "Black"
    },
    "79": {
        "complaints": 34,
        "mostAffected": "Black"
    },
    "81": {
        "complaints": 40,
        "mostAffected": "Black"
    },
    "83": {
        "complaints": 3,
        "mostAffected": "Black"
    },
    "84": {
        "complaints": 1,
        "mostAffected": "White"
    },
    "88": {
        "complaints": 6,
        "mostAffected": "White"
    },
    "90": {
        "complaints": 72,
        "mostAffected": "Hispanic"
    },
    "94": {
        "complaints": 7,
        "mostAffected": "Black"
    },
    "101": {
        "complaints": 7,
        "mostAffected": "Black"
    },
    "102": {
        "complaints": 12,
        "mostAffected": "Hispanic"
    },
    "103": {
        "complaints": 13,
        "mostAffected": "Black"
    },
    "104": {
        "complaints": 17,
        "mostAffected": "White"
    },
    "105": {
        "complaints": 20,
        "mostAffected": "Unknown"
    },
    "106": {
        "complaints": 5,
        "mostAffected": "Asian"
    },
    "107": {
        "complaints": 7,
        "mostAffected": "Other Race"
    },
    "108": {
        "complaints": 2,
        "mostAffected": "Hispanic"
    },
    "109": {
        "complaints": 17,
        "mostAffected": "Black"
    },
    "110": {
        "complaints": 7,
        "mostAffected": "Unknown"
    },
    "111": {
        "complaints": 3,
        "mostAffected": "White"
    },
    "112": {
        "complaints": 20,
        "mostAffected": "White"
    },
    "113": {
        "complaints": 23,
        "mostAffected": "Unknown"
    },
    "114": {
        "complaints": 30,
        "mostAffected": "Hispanic"
    },
    "115": {
        "complaints": 27,
        "mostAffected": "Unknown"
    },
    "120": {
        "complaints": 32,
        "mostAffected": "Unknown"
    },
    "121": {
        "complaints": 26,
        "mostAffected": "Hispanic"
    },
    "123": {
        "complaints": 6,
        "mostAffected": "White"
    }
}

function mapVis(data) {

    // Scale of map
    var scale = 69000;

    // Width and height of map
    var width = scale * (-0.575);
    var height = scale * (0.1452);

    // Define the popupInfo for the tooltip
    var popupInfo = d3.select("body")
        .append("div")
        .attr("class", "tooltip");

    var projection = d3.geoAlbers()
        .translate([width / 2, height / 2])
        .scale(scale);

    var geoGenerator = d3.geoPath()
        .projection(projection);

    function getComplaintInfo(precinct) {
        return complaintByPrecinct[precinct];
    }

    function precinctDataToHtml(precinct) {
        var output = "<b>Precinct " + precinct + "</b><br>";

        var precinctData = getComplaintInfo(precinct);

        if (precinctData === undefined) {
            output += "Number of Complaints: 0<br>";
            output += "Most Affected Demographic: None";
            return (output);
        }

        output += "Number of Complaints: " + precinctData.complaints + "<br>";
        output += "Most Affected Demographic: " + precinctData.mostAffected;
        return output;
    }

    function update(geojson) {
        var scaleValues = [0, 60];
        var scaleColors = ['#fef0d9','#fdd49e','#fdbb84','#fc8d59','#e34a33','#b30000'];

        var mostAffectedValues = ["None", "White", "Black", "Hispanic", "Unknown", "Asian", "Other Race"];
        var mostAffectedColors = ['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17']

        var color = d3.scaleQuantize()
            .domain(scaleValues)
            .range(scaleColors);

        var affectedColor = d3.scaleOrdinal()
            .domain(mostAffectedValues)
            .range(mostAffectedColors);

        var u = d3.select('.map')
            .selectAll('g')
            .data(geojson.features)
            .enter()
            .append('g');

        u.append('path')
            .attr('d', geoGenerator)
            .attr('fill', function(d) {
                // var precinctNumber = d.properties.precinct;
                // var precinctData = getComplaintInfo(precinctNumber);
                // if (precinctData === undefined) {
                //     return affectedColor("None");
                // }
                // return affectedColor(precinctData.mostAffected);
                //
                // var precinctNumber = d.properties.precinct;
                // var precinctData = getComplaintInfo(precinctNumber);
                // if (precinctData === undefined) {
                //     return color(0);
                // }
                // return color(precinctData.complaints);

                return "white";
            })
            .attr('id', function(d) {
                this.parentNode.id = d.properties.precinct.toString();
            })
            .attr("opacity", 0.1);

        u.append('circle')
            .attr("fill", function(d) {
                var precinctNumber = d.properties.precinct;
                var precinctData = getComplaintInfo(precinctNumber);
                if (precinctData === undefined) {
                    return affectedColor("None");
                }
                return affectedColor(precinctData.mostAffected);

                // var precinctNumber = d.properties.precinct;
                // var precinctData = getComplaintInfo(precinctNumber);
                // if (precinctData === undefined) {
                //     return color(0);
                // }
                // return color(precinctData.complaints);
            })
            .attr("opacity", 0.75)
            // .attr('opacity', 0)
            .attr("cx", function(d) {
                var view = this.parentNode.getBBox();
                return view.x + (view.width / 2);
            })
            .attr("cy", function(d) {
                var view = this.parentNode.getBBox();
                return view.y + (view.height / 2);
            })
            .attr("r", function(d) {
                // return 5;

                var precinctNumber = this.parentNode.id;
                var precinctData = getComplaintInfo(precinctNumber);
                if (precinctData === undefined) {
                    return 5;
                }

                precinctData = precinctData.complaints;

                if (precinctData <= 10) {
                    return 5;
                }
                else if (precinctData <= 20) {
                    return 10;
                }
                else if (precinctData <= 30) {
                    return 15;
                }
                else if (precinctData <= 40) {
                    return 20;
                }
                else if (precinctData <= 50) {
                    return 25;
                }
                else {
                    return 30;
                }
            });

        d3.selectAll('g')
            .on("mouseover", function(d) {
                var precinctNumber = this.id;
                var toPrint = precinctDataToHtml(precinctNumber);

                popupInfo.html(toPrint)
                    .style("opacity", .9)
                    .style("left", d.clientX + "px")
                    .style("top", d.clientY + "px");

                d3.selectAll('g')
                    .style("opacity", 0.5);

                d3.select(this)
                    .style("opacity", 1);
            })
            .on("mouseleave", function(d) {
                d3.selectAll('g')
                    .style("opacity", 1);

                popupInfo.style("opacity", 0)
                    .html("");
            });

        // var hello = d3.select('.map')
        //     .append('text')
        //     .attr('transform', function(d) {
        //         var par = this.parentNode.getBBox();
        //         console.log(par);
        //         var ans = 'translate(';
        //         ans += par.width + 150 + ', ';
        //         ans += par.height - 150 + ')';
        //         return ans;
        //     })
        //     .attr('fill', 'white')
        //     .text('Demographics')
        //     .data(mostAffectedValues)
        //     .enter()
        //     .append('circle')
        //     .attr('cy', function(d,i) {
        //         return 100 + i * 25;
        //     })
        //     .attr('r', 7)

        d3.select('.map')
            .append('g')
            .attr('id', 'legend')
            .attr('transform', function(d) {
                var par = this.parentNode.getBBox();
                var ans = 'translate(';
                ans += par.width + 300 + ', ';
                ans += par.height - 175 + ')';
                return ans;
            })

        d3.select('.map')
            .append('g')
            .attr('id', 'gradient')
            .attr('transform', function() {
                var par = this.parentNode.getBBox();
                var ans = 'translate(';
                ans += par.width + 200 + ', ';
                ans += par.height - 175 + ')';
                return ans;
            })

        d3.select('.map')
            .append('g')
            .attr('id', 'sizes')
            .attr('transform', function() {
                var par = this.parentNode.getBBox();
                var ans = 'translate(';
                ans += par.width + 410 + ', ';
                ans += par.height - 280 + ')';
                return ans;
            })

        var leg = d3.select('#legend')
            .selectAll('circle')
            .data(mostAffectedValues)
            .enter();

        leg.append('circle')
            .attr('cy', function(d,i) {
                return i * 25;
            })
            .attr('r', 10)
            .attr('fill', function(d) {
                return affectedColor(d);
            });

        leg.append('text')
            .text(function(d) {
                return d;
            })
            .attr('transform', function(d, i) {
                return 'translate(20, ' + (i * 25 + 5) + ')';
            })
            .attr('fill', function(d) {
                return affectedColor(d);
            });

        leg.append('text')
            .text('Demographic Most Affected')
            .attr('fill', 'white')
            .attr('transform', 'translate(20, -25)');

        var gradient = d3.select('#gradient')
            .selectAll('rect')
            .data([0, 10, 20, 30, 40, 50])
            .enter()

        gradient.append('rect')
            .attr('width', 38)
            .attr('height', 10)
            .attr('fill', function(d) {
                return color(d);
            })
            .attr('transform', function(d, i) {
                return 'translate(' + ((i * 40) - 200) + ', 130)';
            });

        gradient.append('text')
            .text(function(d) {
                return d;
            })
            .attr('transform', function(d, i) {
                return 'translate(' + ((i * 39) - 207) + ', 160)';
            })
            .attr('font', 'thin 10px sans-serif')
            .attr('fill', 'white');

        gradient.append('text')
            .text('Number Of Complaints')
            .attr('fill', 'white')
            .attr('transform', 'translate(-166, 115)');

        var sizes = d3.select('#sizes')
            .selectAll('circle')
            .data([10, 20, 30, 40, 50, 60])
            .enter();

        sizes.append('circle')
            .attr('cy', function(d, i) {
                return i * 5;
            })
            .attr('r', function(d, i) {
                return 30 - i * 5
            })
            .attr('fill', 'none')
            .attr('stroke', function(d, i) {
                if (i % 2 === 0) {
                    return "white"
                }
            });

        sizes.append('text')
            .text(function(d, i) {
                if ((i % 2) === 0) {
                    return d;
                }
            })
            .attr('font', '10px')
            .attr('transform', function(d, i) {
                return 'translate(-9, ' + (7 - i * 10) + ')';
            })
            .attr('fill', 'white')

        sizes.append('text')
            .text('Number Of Complaints')
            .attr('fill', 'white')
            .attr('transform', 'translate(-80, -60)');
    }

    update(data);
}