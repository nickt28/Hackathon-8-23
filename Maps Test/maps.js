import data from './australian-states.json' assert { type: 'json' };

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -28, lng: 137 },
  })
  map.data.addGeoJson(data);
  // Add some style.
  map.data.setStyle((feature) => {
    return /** @type {google.maps.Data.StyleOptions} */ {
      fillColor: feature.getProperty("color"),
      strokeWeight: 1,
    }
  })
  // Set mouseover event for each feature.
  map.data.addListener("mouseover", (event) => {
  	map.data.overrideStyle(event.feature, {strokeWeight: 2})
    document.getElementById("info-box").textContent = event.feature.getProperty("letter")
  })
  map.data.addListener('mouseout', function(event) {
    map.data.revertStyle()
    document.getElementById("info-box").innerHTML = '?'
  })
}
// Attach callback function to the `window` object
window.initMap = initMap
