// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=IMPORT-YOUR-KEY&callback=initMap&v=weekly';
script.async = true;
script.defer = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);
