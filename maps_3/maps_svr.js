import solarData from './solar.json' assert { type: 'json' };

function geoEnc(data) {
  const features = data.map((item) => {
      return {
      type: "Feature",
      geometry: {
          type: "Point",
          coordinates: [item.longitude, item.latitude],
      },
      properties: {
          iqt: item["Installations Quantity Total"],
          kw: item["SGU Rated Output In kW Total"],
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
    center: { lat: -37.840935, lng: 144.946457 },
    zoom: 9,
  });
  
  const pdata = geoEnc(solarData);
  map.data.addGeoJson(pdata);

  const infowindow = new google.maps.InfoWindow();

  map.data.addListener("mouseover", (event) => {
    const iqt = event.feature.getProperty("iqt");
    const kw = event.feature.getProperty("kw");
    const postcode = event.feature.getProperty("postcode");
    const content = `<div><strong>Installations Quantity Total:</strong> ${iqt}</div><div><strong>SGU Rated Output In kW Total:</strong> ${kw}</div><div><strong>Postcode:</strong> ${postcode}</div>`;
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
    const dScale = Math.pow(Math.log(feature.getProperty("iqt")),1.4)
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
