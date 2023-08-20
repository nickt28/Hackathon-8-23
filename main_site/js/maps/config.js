// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDJnDQqBJp4mWzsaU7VVWiksRnZYSpPCrU&callback=initMap&v=weekly';
script.defer = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);
