import data from './solar.json' assert { type: 'json' };

let map;

function initMap() {
  console.log(data);
    
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: -160 },
    zoom: 2,
  });
  
  const script = document.createElement("script");

  script.setAttribute(
    "src",
    "https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json",
  );
  document.getElementsByTagName("head")[0].appendChild(script);

  map.data.setStyle((feature) => {
    const mag = Math.exp(parseFloat(feature.getProperty("mag"))) * 0.1;
    return {
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: mag,
        fillColor: "#f00",
        fillOpacity: 0.35,
        strokeWeight: 0,
      },
    };
  });
}

function eqfeed_callback(data) {
  map.data.addGeoJson(data);
}

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;
