// The code was written with the aid of Code institute tutorials and Google map documentation

// Create a map of Moscow

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 55.7558,
            lng: 37.6173
        }
    });

    // Create a marker for Moscow

    let marker = new google.maps.Marker({
    position: {
        lat: 55.7558, 
        lng: 37.6173},
    map:map
    });

    // Create a label for Moscow
    let infoWindow = new google.maps.InfoWindow({
        content:'<h3>Moscow</h3>',
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}  

//Create location markerss of the sightseeings when pressed on the button 'Sightseeings'
document.getElementById("sightseeings").addEventListener("click",initMapSightseeings);
function initMapSightseeings() {
    let mapSightseeings = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat:55.7558, 
            lng:37.6173
        },
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Create markers for Sightseeings locations
    const markerSightseeings = [
        {
            location: {lat:55.7539, lng:37.6208}, 
            info:"<h5>Red square</h5><p>Red Square is the largest and most famous square in Russia.</p>"
        },
        {
            location: {lat:55.7525, lng:37.6231}, 
            info:"<h5>St.Basil’s Cathedral</h5><p>St.Basil’s Cathedral is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.</p>",
        },
        
    ];
    
    // Add click listener to each marker that opens the InfoWindow with the sightseeing info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow (переделать)
    
    let infoWindow = new google.maps.InfoWindow();

    let markers = markerSightseeings.map(function (markerSightseeings, i) {
    let marker = new google.maps.Marker({
        position:markerSightseeings.location,
        label: labels[i % labels.length]
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(markerSightseeings.info);
        infoWindow.open(mapSightseeings, marker);
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapSightseeings, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
