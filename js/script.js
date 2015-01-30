var playerData;

$(document).ready(function() {
    getData();
});

function getData() {
	$.getJSON("js/juanbaseballcard.json", function(data, error) {
		playerData = data;
		drawStuff();
	});
}

function drawStuff() {
	
	

	var Name = playerData.name;
	var Team = playerData.club;
	var Stats = playerData.stats;



	var lastSeasonIndex = Stats.length -1
	var lastSeasonStats = playerData.stats[lastSeasonIndex];

	var lastSeasonHomeRuns = lastSeasonStats.HR;
	var lastSeasonYear = lastSeasonStats.year;
	var lastSeasonTeam = lastSeasonStats.club;

	$(".chart").append("<h1>"+Name+"</h1>");
	$(".chart").append("<h3>"+Team+"</h3>");
	$(".chart").append("<p>In "+lastSeasonYear+", "+Name+" hit "+lastSeasonHomeRuns+" home runs for the "+lastSeasonTeam);

}







