function graph(){
    const data = [55000, 48000, 27000, 66000, 90000];

        // Define the margins and dimensions of the chart
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const width = 400 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        // Define the scale for the y-axis
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        // Define the y-axis
        const yAxis = d3.axisLeft(yScale);

        // Create the SVG element and add the y-axis
        const svg = d3.select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("g")
            .call(yAxis);

        // Create the bars for the chart
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", d => yScale(d))
            .attr("width", 20)
            .attr("height", d => height - yScale(d));

        // Add the y-axis label
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Data");
}