(function () {
  var jobs = [
    { num: "01", name: "Equip Me with the Information I Need", sub: "Stay ahead of trends", motLabel: "High", motVal: 80, abLabel: "Medium–High", abVal: 72, archetype: "Signal", prompts: ["Credible, quick answers", "Summarized insights", "Easy-to-digest reports", "Trend alerts"] },
    { num: "02", name: "Coach Me / Guide Me to Succeed as a CIO", sub: "Getting up to speed", motLabel: "Very High", motVal: 92, abLabel: "Medium", abVal: 50, archetype: "Facilitator", prompts: ["Mentorship", "Tailored guidance", "Bite-sized training", "Expert access", "Peer networks"] },
    { num: "03", name: "Challenge Me / Push Me / Guide Me", sub: "Advancing leadership & organizational skills", motLabel: "High", motVal: 80, abLabel: "Medium", abVal: 50, archetype: "Facilitator", prompts: ["Constructive feedback", "Leadership programs", "Strategic challenges", "Peer conversations", "Scenario exercises"] },
    { num: "04", name: "Partner with Me to Deliver Major Projects", sub: "Project success & business value", motLabel: "Very High", motVal: 92, abLabel: "Medium–High", abVal: 72, archetype: "Signal", prompts: ["Trusted advisory interactions", "Data-driven insights", "Project reviews", "Collaborative planning tools"] }
  ];

  var plotLeft = 44, plotRight = 290, plotTop = 16, plotBottom = 200;
  var plotWidth = plotRight - plotLeft, plotHeight = plotBottom - plotTop;
  function xScale(A) { return plotLeft + (A / 100) * plotWidth; }
  function yScale(M) { return plotBottom - (M / 100) * plotHeight; }
  function mThresh(A) { return Math.min(100, 6000 / (A + 65)); }

  var curvePts = [];
  for (var A = 0; A <= 100; A += 5) {
    curvePts.push(xScale(A).toFixed(1) + "," + yScale(mThresh(A)).toFixed(1));
  }
  var curvePath = "M " + curvePts.join(" L ");
  var areaPath = curvePath +
    " L " + plotRight.toFixed(1) + "," + plotBottom.toFixed(1) +
    " L " + plotLeft.toFixed(1) + "," + plotBottom.toFixed(1) + " Z";

  function svgFor(job) {
    var px = xScale(job.abVal).toFixed(1);
    var py = yScale(job.motVal).toFixed(1);
    var labelAbove = job.motVal >= 88;
    return '' +
    '<svg class="chart" viewBox="0 0 300 246" role="img" aria-label="Motivation ' + job.motVal + ', Ability ' + job.abVal + ', plotted against the Fogg action line">' +
      '<path d="' + areaPath + '" fill="var(--zone-below)" />' +
      '<line x1="' + plotLeft + '" y1="' + yScale(25) + '" x2="' + plotRight + '" y2="' + yScale(25) + '" stroke="var(--gridline)" stroke-width="1"/>' +
      '<line x1="' + plotLeft + '" y1="' + yScale(50) + '" x2="' + plotRight + '" y2="' + yScale(50) + '" stroke="var(--gridline)" stroke-width="1"/>' +
      '<line x1="' + plotLeft + '" y1="' + yScale(75) + '" x2="' + plotRight + '" y2="' + yScale(75) + '" stroke="var(--gridline)" stroke-width="1"/>' +
      '<line x1="' + xScale(25) + '" y1="' + plotTop + '" x2="' + xScale(25) + '" y2="' + plotBottom + '" stroke="var(--gridline)" stroke-width="1"/>' +
      '<line x1="' + xScale(50) + '" y1="' + plotTop + '" x2="' + xScale(50) + '" y2="' + plotBottom + '" stroke="var(--gridline)" stroke-width="1"/>' +
      '<line x1="' + xScale(75) + '" y1="' + plotTop + '" x2="' + xScale(75) + '" y2="' + plotBottom + '" stroke="var(--gridline)" stroke-width="1"/>' +
      '<line x1="' + plotLeft + '" y1="' + plotBottom + '" x2="' + plotRight + '" y2="' + plotBottom + '" stroke="var(--axis)" stroke-width="1"/>' +
      '<line x1="' + plotLeft + '" y1="' + plotTop + '" x2="' + plotLeft + '" y2="' + plotBottom + '" stroke="var(--axis)" stroke-width="1"/>' +
      '<path d="' + curvePath + '" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4,3" stroke-linecap="round"/>' +
      '<text class="zone-label" x="' + (plotRight - 4) + '" y="' + (plotTop + 12) + '" text-anchor="end">ACTION ZONE</text>' +
      '<text class="zone-label" x="' + (plotLeft + 6) + '" y="' + (plotBottom - 8) + '">BELOW THRESHOLD</text>' +
      '<text class="tick-label" x="' + plotLeft + '" y="' + (plotBottom + 14) + '">0</text>' +
      '<text class="tick-label" x="' + xScale(50) + '" y="' + (plotBottom + 14) + '" text-anchor="middle">50</text>' +
      '<text class="tick-label" x="' + plotRight + '" y="' + (plotBottom + 14) + '" text-anchor="end">100</text>' +
      '<text class="tick-label" x="' + (plotLeft - 6) + '" y="' + (plotBottom + 3) + '" text-anchor="end">0</text>' +
      '<text class="tick-label" x="' + (plotLeft - 6) + '" y="' + (yScale(50) + 3) + '" text-anchor="end">50</text>' +
      '<text class="tick-label" x="' + (plotLeft - 6) + '" y="' + (plotTop + 3) + '" text-anchor="end">100</text>' +
      '<text class="axis-label" x="' + ((plotLeft + plotRight) / 2) + '" y="234" text-anchor="middle">ABILITY →</text>' +
      '<text class="axis-label" x="-108" y="14" text-anchor="middle" transform="rotate(-90)">MOTIVATION →</text>' +
      '<circle cx="' + px + '" cy="' + py + '" r="6" fill="var(--accent)" stroke="var(--surface)" stroke-width="2.5"/>' +
      '<text class="point-label" x="' + (Number(px) + 11) + '" y="' + (Number(py) + (labelAbove ? 14 : -8)) + '">M ' + job.motVal + ' · A ' + job.abVal + '</text>' +
    '</svg>';
  }

  var grid = document.getElementById("panel-grid");
  if (grid) {
    jobs.forEach(function (job) {
      var panel = document.createElement("div");
      panel.className = "panel";
      panel.innerHTML =
        '<div class="panel-head">' +
          '<div>' +
            '<p class="panel-num mono">' + job.num + '</p>' +
            '<p class="panel-title">' + job.name + '</p>' +
            '<p class="panel-sub">' + job.sub + '</p>' +
          '</div>' +
          '<span class="badge">' + job.archetype + '</span>' +
        '</div>' +
        svgFor(job) +
        '<div class="readout">' +
          '<div class="stat"><p class="stat-label">Motivation</p><p class="stat-value">' + job.motLabel + ' <span class="num">' + job.motVal + '</span></p></div>' +
          '<div class="stat"><p class="stat-label">Ability</p><p class="stat-value">' + job.abLabel + ' <span class="num">' + job.abVal + '</span></p></div>' +
          '<div class="stat"><p class="stat-label">Clearance</p><p class="stat-value"><span class="num">+' + (job.motVal - mThresh(job.abVal)).toFixed(0) + '</span> pts</p></div>' +
        '</div>' +
        '<p class="prompts-label">Prompts that land</p>' +
        '<div class="chip-row">' + job.prompts.map(function (p) { return '<span class="chip">' + p + '</span>'; }).join('') + '</div>';
      grid.appendChild(panel);
    });
  }

  var tbody = document.getElementById("table-body");
  if (tbody) {
    jobs.forEach(function (job) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        '<td class="strong">' + job.name + '</td>' +
        '<td>' + job.motLabel + ' <span class="num">(' + job.motVal + ')</span></td>' +
        '<td>' + job.abLabel + ' <span class="num">(' + job.abVal + ')</span></td>' +
        '<td>' + job.archetype + '</td>' +
        '<td>' + job.prompts.join(', ') + '</td>';
      tbody.appendChild(tr);
    });
  }
})();
