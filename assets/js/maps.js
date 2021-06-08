// The code was written with the aid of Code institute tutorials and Google mapы documentation

// Define a map style
// Code credit: Google maps documentation (https://developers.google.com/maps/documentation/javascript/examples/style-array)

const dark_style = [
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

// Create a map of Moscow

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 55.7558,
            lng: 37.6173
        },
        styles: dark_style,
    });
}  

// Create location markers when pressed on the button 'Historic Sites'

document.getElementById("historic-sites").addEventListener("click",initMapHistoricSites);

function initMapHistoricSites() {
    let mapHistoricSites = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat:55.7539, 
            lng:37.6208
        },
        styles: dark_style,
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create markers for Historic Sites locations

    const markerHistoricSites = [
        
        // Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
        // Photo Credit: https://www.goodfon.com/wallpaper/moskva-rossiia-krasnaia-ploshchad-ploshchad-tsvety-nebo.html

        {
            location: {lat:55.7539, lng:37.6208}, 

            info:`
            <h5><span>A</span>&nbsp; Red square</h5>
            <img src="../../assets/images/red-square.jpg" class="image">
            <p class="info-text">The heart of Russia’s capital, Red Square is arguably Moscow’s most visited attraction. 
            The cobblestone square is surrounded by beautiful architecture, and is the place where most of the city’s 
            (and country’s) history unfolded. What was once a market square where traders would sell their goods is now 
            a key location in the city, surrounded by unforgettable sites such as the Kremlin, St.Basil’s Cathedral, Lenin’s 
            Mausoleum and other celebrated attractions.</p>`
        },

        // Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
        // Photo Credit: https://www.goodfon.com/wallpaper/st-basil-s-cathedral-red.html

        {
            location: {lat:55.7525, lng:37.6231}, 

            info:`
            <h5><span>B</span>&nbsp; Saint Basil's Cathedral</h5>
            <img src="../../assets/images/st-basil-s-cathedral.jpg" class="image">
            <p>The most recognizable building in the country, the cathedral is very much a symbol of Russia. Ivan the Terrible 
            ordered the cathedral’s construction in the mid-16th century, and legend holds that Ivan put out the architect’s 
            eyes so that he would be unable to build another cathedral more glorious than St. Basil’s. Designed to resemble 
            the shape of a bonfire in full flame, the architecture is not only unique to the period in which it was built but 
            to any subsequent period. For various reasons, both Napoleon and Stalin wanted to destroy the cathedral but 
            fortunately did not succeed. <a rel="noopener" target="_blank" href="https://en.shm.ru/museum/hvb/">Official website
            </a></p>`
        },
        
        // Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
        // Photo Credit: https://www.wallpaperflare.com/bolshoi-theatre-moscow-russia-fountain-illumination-wallpaper-tcgfl
    
        {
            location: {lat:55.7601, lng:37.6186}, 
            
            info:`
            <h5><span>C</span>&nbsp; Bolshoi Theatre</h5>
            <img src="../../assets/images/bolshoi-theatre.jpg" class="image">
            <p class="info-text">The Bolshoi Theater is home to the largest and one of the oldest ballet and opera companies 
            in the world. The Bolshoi Theater you see today opened in 1824, after several older versions burned down. Inside, 
            red velvet, a three-tiered crystal chandelier, and gilt moldings give the place a Byzantine-Renassaince grandiose 
            feel like no other. Catching a show from the resident ballet and opera troupes is a treat, as the theater often 
            presents a number of classic performances, such as Tchaikovsky's Mazeppa and Rachmaninoff's Francesca da Rimini, 
            both of which originally premiered here. <a rel="noopener" target="_blank" href="https://www.bolshoi.ru/en/">Official 
            website</a></p>`
        },

        // Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
        // Photo Credit: https://wall.alphacoders.com/big.php?i=672508
    
        {
            location: {lat:55.7446, lng:37.6055}, 
            
            info:`
            <h5><span>D</span>&nbsp; Cathedral of Christ the Saviour</h5>
            <img src="../../assets/images/cathedral-christ-saviour.jpg" class="image">
            <p class="info-text">This gorgeous Russian Orthodox cathedral is located on the banks of the Moskva River, just a 
            stone’s throw away from the Kremlin. The church as it stands today was consecrated in 2000, as the original church 
            that stood here was destroyed on the command of Josef Stalin in 1931 due to the anti-religious campaign. With its 
            delightful golden dome, spires and dazzling white facades, the Christ the Savior Cathedral is stunning. 
            The interior is just as captivating to wander around, with its beautifully tiled floors and impressive altar.</p>`
        },
    ];
    
    // Add click listener to each marker that opens the InfoWindow with the historic sites info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow (переделать)
    
    let infoWindow = new google.maps.InfoWindow();

    let markers = markerHistoricSites.map(function (markerHistoricSites, i) {

        let marker = new google.maps.Marker({

            position:markerHistoricSites.location,
            label: labels[i % labels.length]
        });

        google.maps.event.addListener(marker, 'click', function() {

            $("#info-window").html(markerHistoricSites.info)
                
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapHistoricSites, markers, {
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
        styles: dark_style,
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
    
    // Add click listener to each marker that opens the InfoWindow with the museums info
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
        styles: dark_style,
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

document.getElementById("shopping").addEventListener("click",initMapShopping);

function initMapShopping() {
    let mapShopping = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat:55.7558, 
            lng:37.6173
        },
        styles: dark_style,
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create markers for Shopping locations
// Credit: Info text is taken from https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
    const markerShopping = [
        {
            location: {lat:55.7601, lng:37.6186}, 
            info:`
            <h5>Bolshoi Theatre</h5>
            <img src="../../assets/images/bolshoi-theatre.jpg" class="image">
            <p class="info-text">Opened in 1856, the legendary Bolshoi Theatre is one of the pest places in Moscow for an evening of entertainment. The building houses two stages, hosting both ballet and opera performances.</p>`
        },
        
    ];
    
    // Add click listener to each marker that opens the InfoWindow with the Shopping info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow (переделать)
    
    let infoWindow = new google.maps.InfoWindow();

    let markers = markerShopping.map(function (markerShopping, i) {

        let marker = new google.maps.Marker({

            position:markerShopping.location,
            label: labels[i % labels.length]
        });

        google.maps.event.addListener(marker, 'click', function() {

            $("#info-window").html(markerShopping.info)
                
    });
    return marker;

    });

    let markerCluster = new MarkerClusterer(mapShopping, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}




