// The code was written with the aid of Code institute tutorials and Google map documentation

// Create a map of Moscow

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 55.7558,
            lng: 37.6173
        },

        // From Google maps documentation: https://developers.google.com/maps/documentation/javascript/examples/style-array
        styles: [
            { elementType: "geometry", stylers: [{ color: "#2f3338" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#2f3338" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },]
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

//Create location markers of the sightseeings when pressed on the button 'Sightseeings'

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
// Credit: Info text is taken from https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
    const markerSightseeings = [
        {
            location: {lat:55.7539, lng:37.6208}, 
            info:`
            <h5>Red square</h5>
            <img src="../../assets/images/red-square.jpg" class="image">
            <p class="info-text">The heart of Russia’s capital, Red Square is arguably Moscow’s most visited attraction. The cobblestone square is surrounded by beautiful architecture, and is the place where most of the city’s (and country’s) history unfolded. What was once a market square where traders would sell their goods is now a key location in the city, surrounded by unforgettable sites such as the Kremlin, St.Basil’s Cathedral, Lenin’s Mausoleum and other celebrated attractions.</p>`
        },
        {
            location: {lat:55.7525, lng:37.6231}, 
            info:`
            <h5>St Basil&#8217;s Cathedral</h5>
            <img src="../../assets/images/st-basil-s-cathedral.jpg" class="image">
            <p>Soak up the archetypal image of Russia’s capital with the glistening rainbow domes of St Basil’s cathedral. The onion-shaped domes were designed to make the building look like the shape of a flame on a bonfire. The cathedral was commissioned in the 1500s by Ivan the Terrible and according to legend, the Tsar thought it so beautiful he ordered that the architect be blinded so that he would never surpass this creation.</p>`
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

            $("#info-window").html(markerSightseeings.info)
                
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapSightseeings, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Create location markers of the museums when pressed on the button 'Museums'

document.getElementById("museums").addEventListener("click",initMapMuseums);

function initMapMuseums() {
    let mapMuseums = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat:55.7558, 
            lng:37.6173
        },
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Create markers for Museums locations
// Credit: Info text is taken from https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
    const markerMuseums = [       
        {
            location: {lat:55.7520, lng:37.6175}, 
            info:`
            <h5>Moscow Kremlin</h5>
            <img src="../../assets/images/moscow-kremlin.jpg" class="image">
            <p class="info-text">The biggest active fortress in Europe, Moscow’s Kremlin offers a week’s worth of attractions. Once you get behind the 2,235 metre-long kremlin walls, there are five squares to wander around, various buildings to explore, 20 towers to learn the names of, and the world’s largest bell and cannon to see.</p>`
        },
        {
            location: {lat:55.7553, lng:37.6178}, 
            info:`
            <h5>State Historical Museum</h5>
            <img src="../../assets/images/state-historical-museum.jpg" class="image">
            <p class="info-text">An attraction in its own right, the State Historical Museum, sheltered in a neo-Russian style building, was founded in 1872 by Ivan Zabelin and Aleksey Uvarov. What once was the Principal Medicine Store now houses an impressive collection, which includes relics of prehistoric tribes that once inhabited the territory of present-day Russia, the country’s largest coin collection, as well as 6th-century manuscripts and artworks collected by the Romanov dynasty among other treasures.</p>`
        },
        {
            location: {lat:55.7414, lng:37.6209}, 
            info:`
            <h5>Tretyakov Gallery</h5>
            <img src="../../assets/images/state-historical-museum.jpg" class="image">
            <p class="info-text">Built between 1900 and 1905, Tretyakov Gallery started as the private collection of the Tretyakov brothers, who were 19th-century philanthropists. Designed by Viktor Vasnetsov, the gallery is a home to one of the largest collections of Russian art in the world. Here you can see icons including Rublev’s Trinity, and pre-revolutionary masterpieces such as Girl with Peaches by Valentin Serov, Demon by Mikhail Vrubel and Rooks have Come Backby Alexei Savrasov.</p>`
        },
        {
            location: {lat:55.7473, lng:37.6051}, 
            info:`
            <h5>Pushkin State Museum of Fine Arts</h5>
            <img src="../../assets/images/pushkin-museum.jpg" class="image">
            <p class="info-text">The largest foreign art museum in Moscow comprises three branches housing a collection of incredible works by masters of ancient civilisations, the Italian Renaissance and the Dutch Golden Age. The main building contains masterpieces by Botticelli, Tiepolo, Veronese and Rembrandt, some of which have never been displayed before. The Gallery of European & American Art, located next door, stores an incredible collection of Impressionist and post-Impressionist paintings.</p>`
        },
    ];
    
    // Add click listener to each marker that opens the InfoWindow with the sightseeing info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow (переделать)
    
    let infoWindow = new google.maps.InfoWindow();

    let markers = markerMuseums.map(function (markerMuseums, i) {

        let marker = new google.maps.Marker({

            position:markerMuseums.location,
            label: labels[i % labels.length]
        });

        google.maps.event.addListener(marker, 'click', function() {

            $("#info-window").html(markerMuseums.info)
                
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapMuseums, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Create location markers of the parks when pressed on the button 'Parks'

document.getElementById("parks").addEventListener("click",initMapParks);

function initMapParks() {
    let mapParks = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat:55.7558, 
            lng:37.6173
        },
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create markers for Parks locations
// Credit: Info text is taken from https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
    const markerParks = [
        {
            location: {lat:55.7094, lng:37.5423}, 
            info:`
            <h5>Sparrow Hills</h5>
            <img src="../../assets/images/sparrow-hills.jpg" class="image">
            <p class="info-text">f you to take a walk from Gorky Park along the Moscow river embankment, you’ll end up in the city’s other legendary park, Sparrow Hills. Although the park doesn’t offer as many activities as its hip neighbour, here you can take a closer look at the tallest of the seven Stalinist skyscrapers (the Moscow State University), admire the view from the observation deck or get a cable car ride.</p>`
        },
        {
            location: {lat:55.6117, lng:37.6861}, 
            info:`
            <h5>Tsaritsyno Museum-Reserve</h5>
            <img src="../../assets/images/tsaritsino.jpg" class="image">
            <p class="info-text">The former summer residence of Empress Catherine the Great was commissioned in 1775, and succumbed to deterioration during the Soviet era. The whole of Tsaritsyno Museum-Reserve has been fundamentally renovated since 1980s to look even brighter than the original. With its opulently decorated buildings, gardens, meadows and forests, Tsaritsyno Park is the perfect place for a green respite in Moscow.</p>`
        },
        {
            location: {lat:55.6704, lng:37.6695}, 
            info:`
            <h5>Kolomenskoye</h5>
            <img src="../../assets/images/kolomenskoe.jpg" class="image">
            <p class="info-text">A 10-minute metro ride from the city centre will take you to Kolomenskoe Museum-Reserve, where you can get an idea of what Medieval Moscow looked like. Here you’ll find ancient churches (one dating back to the 16th century), the oldest garden in Moscow and a favourite estate of Tsar Alexey Mikhailovich, father of Peter the Great.</p>`
        },
        {
            location: {lat:55.8310, lng:37.6298}, 
            info:`
            <h5>VDNKh All-Russian Exhibition Centre</h5>
            <img src="../../assets/images/vdnh.jpg" class="image">
            <p class="info-text">The enormous VDNKh (short for All-Russian Exhibition Centre) recently went through an extensive renovation and now looks better than ever. The centre started as the all-Soviet agricultural exhibition in 1935, and now serves as an open-air museum of Soviet architecture. With the iconic fountain at its entrance, the park complex is home to a number of museums, shopping pavilions, multiple eateries, a massive oceanarium, a zip-line, and a horse-riding rink. In winter a skating rink opens – the largest in Europe.</p>`
        },
        {
            location: {lat:55.7284, lng:37.6013}, 
            info:`
            <h5>Gorky Park</h5>
            <img src="../../assets/images/gorky-park.jpg" class="image">
            <p class="info-text">Moscow’s premier green space, Gorky Park, offers entertainment for every taste: outdoor dancing sessions, yoga and fitness classes all summer, as well as beach volleyball and ping-pong, rollerblading, skateboarding and cycling opportunities, along with segway and boat-rentals. In winter, half of the park turns into one of the city’s biggest skating rinks. The park is also home to an open-air movie theatre and the Garage Museum of Contemporary Art.</p>`
        },
        
        
    ];
    
    // Add click listener to each marker that opens the InfoWindow with the parks info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow (переделать)
    
    let infoWindow = new google.maps.InfoWindow();

    let markers = markerParks.map(function (markerParks, i) {

        let marker = new google.maps.Marker({

            position:markerParks.location,
            label: labels[i % labels.length]
        });

        google.maps.event.addListener(marker, 'click', function() {

            $("#info-window").html(markerParks.info)
                
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapParks, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Create location markers of the museums when pressed on the button 'Museums'

document.getElementById("theatres").addEventListener("click",initMapTheatres);

function initMapTheatres() {
    let mapTheatres = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat:55.7558, 
            lng:37.6173
        },
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Create markers for Theatres locations
// Credit: Info text is taken from https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
    const markerTheatres = [
        {
            location: {lat:55.7601, lng:37.6186}, 
            info:`
            <h5>Bolshoi Theatre</h5>
            <img src="../../assets/images/bolshoi-theatre.jpg" class="image">
            <p class="info-text">Opened in 1856, the legendary Bolshoi Theatre is one of the pest places in Moscow for an evening of entertainment. The building houses two stages, hosting both ballet and opera performances.</p>`
        },
        
    ];
    
    // Add click listener to each marker that opens the InfoWindow with the Theatres info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow (переделать)
    
    let infoWindow = new google.maps.InfoWindow();

    let markers = markerTheatres.map(function (markerTheatres, i) {

        let marker = new google.maps.Marker({

            position:markerTheatres.location,
            label: labels[i % labels.length]
        });

        google.maps.event.addListener(marker, 'click', function() {

            $("#info-window").html(markerTheatres.info)
                
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapTheatres, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}




