import solarData from './solarhobart.json' assert { type: 'json' };

function geoEnc(data) {
  const features = data.map((item) => {
      return {
      type: "Feature",
      geometry: {
          type: "Point",
          coordinates: [item.longitude, parseFloat(item.latitude)],
      },
      properties: {
          sq: item["Solar Exposure"],
          postcode: item.postcode
      },
      };
  });
  
  return {
      type: "FeatureCollection",
      features: features
  }
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.640079, lng: 146.315918 },
    zoom: 7,
  });
  
  const pdata = geoEnc(solarData);
  map.data.addGeoJson(pdata);
  console.log(pdata);

  const infowindow = new google.maps.InfoWindow();

  map.data.addListener("mouseover", (event) => {
    const sq = event.feature.getProperty("sq");
    const postcode = event.feature.getProperty("postcode");
    const content = `<div><strong>Solar Exposure:</strong> ${sq}</div><div><strong>Postcode:</strong> ${postcode}</div>`;
    infowindow.setContent(content);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
  });

  // const script = document.createElement("script");
  // script.setAttribute(
  //   "src",
  //   "https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json",
  // );
  // document.getElementsByTagName("head")[0].appendChild(script);

  map.data.setStyle((feature) => {
    const dScale = feature.getProperty("sq")
    return {
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: dScale,
        fillColor: "#f00",
        fillOpacity: 0.35,
        strokeColor: "#444",
        strokeWeight: 1,
      },
    };
  });
}

// function eqfeed_callback(data) {
//   map.data.addGeoJson(data);
// }

window.initMap = initMap;
// window.eqfeed_callback = eqfeed_callback;
