google.charts.load('current', {
    'packages': ['geochart'],
    // Note: Because markers require geocoding, you'll need a mapsApiKey.
    'mapsApiKey': 'AIzaSyDJnDQqBJp4mWzsaU7VVWiksRnZYSpPCrU'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

   function drawMarkersMap() {

    const inputData = [
        ['Lat', 'Long', 'Population'],
        [37.4232, -122.0853, 150],
        [40.7128, -74.0060, 200],
        [51.5074, -0.1278, 250],
        [35.6895, 139.6917, 300]
      ];

   var data = google.visualization.arrayToDataTable(inputData);

   var options = {
     region: 'AU',
     displayMode: 'markers',
     colorAxis: {colors: ['green', 'blue']}
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
   chart.draw(data, options);
};