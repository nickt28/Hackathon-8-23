google.charts.load('current', {
    'packages': ['geochart'],
    // Note: Because markers require geocoding, you'll need a mapsApiKey.
    'mapsApiKey': 'AIzaSyDJnDQqBJp4mWzsaU7VVWiksRnZYSpPCrU'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

   function drawMarkersMap() {

    const inputData = [
        ['Lat', 'Long', 'Population'],
        [-37.8152065, 144.963937, 2109.576],
        [-37.8161444, 144.9804594, 720.069],
        [-37.8114504, 144.9253974, 1677.48],
        [-37.8301583, 144.9804594, 370.96],
        [-37.8245483, 144.963937, 1186.465],
        [-37.8170652, 144.9419122, 1594.805],
        [-37.7960195, 144.9006313, 6299.184],
        [-37.8146251, 144.8456217, 10441.392],
        [-37.819811, 144.8813738, 5723.072]
      ];

   var data = google.visualization.arrayToDataTable(inputData);

   var options = {
     region: 'AU',
     displayMode: 'markers',
     colorAxis: {colors: ['green', 'blue']},
     resolution: 'provinces'
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
   chart.draw(data, options);
};