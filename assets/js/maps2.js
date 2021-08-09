/** 
 * Google Maps JavaScript API.
 * Code credit: the code was written with the aid of Code institute tutorials, Google maps documentation, YouTube Google Maps JavaScript API Tutorial (https://www.youtube.com/watch?v=Zxf1mnP5zcw).
 * Code credit: Integration of Google Maps MarkerClusterer with infowindow from Stackoverflow (https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow).
 */

// Define a map style
// Code credit: Google maps documentation (https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple)
const yellow_style = [{
	elementType: "geometry",
	stylers: [{
		color: "#ebe3cd"
	}]
}, {
	elementType: "labels.text.fill",
	stylers: [{
		color: "#523735"
	}]
}, {
	elementType: "labels.text.stroke",
	stylers: [{
		color: "#f5f1e6"
	}]
}, {
	featureType: "administrative",
	elementType: "geometry.stroke",
	stylers: [{
		color: "#c9b2a6"
	}],
}, {
	featureType: "administrative.land_parcel",
	elementType: "geometry.stroke",
	stylers: [{
		color: "#dcd2be"
	}],
}, {
	featureType: "administrative.land_parcel",
	elementType: "labels.text.fill",
	stylers: [{
		color: "#ae9e90"
	}],
}, {
	featureType: "landscape.natural",
	elementType: "geometry",
	stylers: [{
		color: "#dfd2ae"
	}],
}, {
	featureType: "poi",
	elementType: "geometry",
	stylers: [{
		color: "#dfd2ae"
	}],
}, {
	featureType: "poi",
	elementType: "labels.text.fill",
	stylers: [{
		color: "#93817c"
	}],
}, {
	featureType: "poi.park",
	elementType: "geometry.fill",
	stylers: [{
		color: "#a5b076"
	}],
}, {
	featureType: "poi.park",
	elementType: "labels.text.fill",
	stylers: [{
		color: "#447530"
	}],
}, {
	featureType: "road",
	elementType: "geometry",
	stylers: [{
		color: "#f5f1e6"
	}],
}, {
	featureType: "road.arterial",
	elementType: "geometry",
	stylers: [{
		color: "#fdfcf8"
	}],
}, {
	featureType: "road.highway",
	elementType: "geometry",
	stylers: [{
		color: "#f8c967"
	}],
}, {
	featureType: "road.highway",
	elementType: "geometry.stroke",
	stylers: [{
		color: "#e9bc62"
	}],
}, {
	featureType: "road.highway.controlled_access",
	elementType: "geometry",
	stylers: [{
		color: "#e98d58"
	}],
}, {
	featureType: "road.highway.controlled_access",
	elementType: "geometry.stroke",
	stylers: [{
		color: "#db8555"
	}],
}, {
	featureType: "road.local",
	elementType: "labels.text.fill",
	stylers: [{
		color: "#806b63"
	}],
}, {
	featureType: "transit.line",
	elementType: "geometry",
	stylers: [{
		color: "#dfd2ae"
	}],
}, {
	featureType: "transit.line",
	elementType: "labels.text.fill",
	stylers: [{
		color: "#8f7d77"
	}],
}, {
	featureType: "transit.line",
	elementType: "labels.text.stroke",
	stylers: [{
		color: "#ebe3cd"
	}],
}, {
	featureType: "transit.station",
	elementType: "geometry",
	stylers: [{
		color: "#dfd2ae"
	}],
}, {
	featureType: "water",
	elementType: "geometry.fill",
	stylers: [{
		color: "#b9d3c2"
	}],
}, {
	featureType: "water",
	elementType: "labels.text.fill",
	stylers: [{
		color: "#92998d"
	}],
}, ];

// Database with locations
const database = {
		'historicSites': [{
			location: {
				lat: 55.7539,
				lng: 37.6208
			},
			label: 'A',
			name: 'Red square',
			// Photo Credit: https://www.goodfon.com/wallpaper/moskva-rossiia-krasnaia-ploshchad-ploshchad-tsvety-nebo.html
			imageAddress: 'assets/images/red-square.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `The heart of Russia’s capital, Red Square is arguably Moscow’s most visited attraction. 
            The cobblestone square is surrounded by beautiful architecture, and is the place where most of the city’s 
            (and country’s) history unfolded. What was once a market square where traders would sell their goods is now a 
            key location in the city, surrounded by unforgettable sites such as the Kremlin, St.Basil’s Cathedral, Lenin’s 
            Mausoleum and other celebrated attractions.`
		}, {
            location: {
				lat: 55.7525,
				lng: 37.6231
			},
			label: 'B',
			name: "Saint Basil's Cathedral",
			// Photo Credit: https://www.goodfon.com/wallpaper/st-basil-s-cathedral-red.html
			imageAddress: 'assets/images/st-basil-s-cathedral.jpg',
			// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
			description: `The most recognizable building in the country, the cathedral is very much a symbol of Russia. 
            Ivan the Terrible ordered the cathedral’s construction in the mid-16th century, and legend holds that Ivan put 
            out the architect’s eyes so that he would be unable to build another cathedral more glorious than St. Basil’s. 
            Designed to resemble the shape of a bonfire in full flame, the architecture is not only unique to the period in 
            which it was built but to any subsequent period. For various reasons, both Napoleon and Stalin wanted to destroy 
            the cathedral but fortunately did not succeed. <a rel="noopener" target="_blank" href="https://en.shm.ru/museum/hvb/">
            Official website</a>`
        }, {
            location: {
				lat: 55.7601,
				lng: 37.6186
			},
			label: 'C',
			name: "Bolshoi Theatre",
			// Photo Credit: https://www.wallpaperflare.com/bolshoi-theatre-moscow-russia-fountain-illumination-wallpaper-tcgfl
			imageAddress: 'assets/images/bolshoi-theatre.jpg',
			// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
			description: `The Bolshoi Theater is home to the largest and one of the oldest ballet and opera companies 
            in the world. The Bolshoi Theater you see today opened in 1824, after several older versions burned down. Inside, 
            red velvet, a three-tiered crystal chandelier, and gilt moldings give the place a Byzantine-Renassaince grandiose 
            feel like no other. Catching a show from the resident ballet and opera troupes is a treat, as the theater often 
            presents a number of classic performances, such as Tchaikovsky's Mazeppa and Rachmaninoff's Francesca da Rimini, 
            both of which originally premiered here. <a rel="noopener" target="_blank" href="https://www.bolshoi.ru/en/">Official 
            website</a>`
        }, {
            location: {
				lat: 55.7446,
				lng: 37.6055
			},
			label: 'D',
			name: "Cathedral of Christ the Saviour",
			// Photo Credit: https://wall.alphacoders.com/big.php?i=672508
			imageAddress: 'assets/images/cathedral-christ-saviour.jpg',
			// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
			description: `This gorgeous Russian Orthodox cathedral is located on the banks of the Moskva River, just a 
            stone’s throw away from the Kremlin. The church as it stands today was consecrated in 2000, as the original church 
            that stood here was destroyed on the command of Josef Stalin in 1931 due to the anti-religious campaign. With its 
            delightful golden dome, spires and dazzling white facades, the Christ the Savior Cathedral is stunning. 
            The interior is just as captivating to wander around, with its beautifully tiled floors and impressive altar.`
        }, {
            location: {
				lat: 55.7518,
				lng: 37.6009
			},
			label: 'E',
			name: "Moscow Metro",
			// Photo Credit: https://russianmetro.ru/metro/arbatsin.html
			imageAddress: 'assets/images/metro.jpg',
			// Text Credit: https://weheart.moscow/toptenattractions/ and https://www.rbth.com/arts/2017/08/17/5-treasures-of-moscows-metro-check-out-these-stunning-blue-line-stations_824162
			description: `The Moscow Metro has its own unforgettable charm. It was opened in 1935 and became one 
            of the USSR’s most extravagant architectural projects. That is why most of the central underground stations 
            look like a museum. Every station has its own mood, different decorations and fascinating story. With 223 
            stations and 12 metro lines crosscutting through Moscow, however, this can be tricky, so visiting at least 
            a few of the most impressive ones is a good start. <strong>Arbatskaya station</strong> was designed by a 
            skyscraper architect, so it's no surprise that it features multicolored granite slabs that form a distinctive 
            carpet pattern while its pillars are decorated with white ceramic bouquets. The station’s chandeliers are made 
            of gilded bronze.`
        }, {
            location: {
				lat: 55.751339,
				lng: 37.596398
			},
			label: 'F',
			name: "Arbat Street",
			// Photo Credit: https://planeta.turtella.ru/russia/moscow/p1192783
			imageAddress: 'assets/images/arbat.jpg',
			// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
			description: `Moscow's one-kilometer-long pedestrian street has been around since the 15th century. 
            Originally a trade route in the outskirts of the city, Arbat Street is now very centrally located, home to 
            posh buildings and lots of places to eat and shop. Beautiful street lamps and two significant statues-one 
            of Princess Turandot (from Puccini's last opera) and one of Soviet-era poet Bulat Okudzhava-adorn the street, 
            which fills up with both locals and tourists on evenings and weekends. A great place to pick up souvenirs or 
            sit down at an outdoor café, Arbat Street also offers a chance to visit the former home of poet Alexander 
            Pushkin and the café both Anton Chekhov and Leo Tolstoy used to visit.`
        }, {
            location: {
				lat: 55.7262,
				lng: 37.5564
			},
			label: 'G',
			name: "Novodevichy Convent",
			// Photo Credit: http://novodev.ru/
			imageAddress: 'assets/images/novodevichy-convent.jpg',
			// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
			description: `Drenched in history, the Novodevichy Convent is located in a striking building 
            that was once a fortress. This captivating place is well worth visiting when in Moscow. Founded in 1524, 
            the convent houses four cathedrals; Smolensk Cathedral is the undoubted highlight due to its delightful 
            16th-century frescoes. Wandering around the grounds is like stepping back in time. The Novodevichy Cemetery 
            is where many famous leaders of the Soviet Union are buried, such as Yeltsin and Khrushchev.`
        }],
		'museums': [{
            location: {
				lat: 55.7520,
				lng: 37.6175
			},
			label: 'A',
			name: "Moscow Kremlin",
			// Photo Credit: https://wallpapersden.com/city-moscow-night-wallpaper/2560x1080/
			imageAddress: 'assets/images/moscow-kremlin.jpg',
			// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
			description: `A 15th-century fortified complex that covers an area of 275,000 square meters surrounded 
            by walls built in the 1400s. The Grand Kremlin 
            Palace, which has over 700 rooms, was once home to the Tsar family and is now the official residence of the 
            president of the Russian Federation. The massive complex also includes many other buildings, some of which 
            are open to the public and can be visited regularly. Aside from 
            three cathedrals (including one where the Tsars were once crowned) and a number of towers, the Kremlin is also 
            home to the Armory building, a museum holding everything from the royal crown and imperial carriages to the ivory 
            throne of Ivan the Terrible and Fabergé eggs. <a rel="noopener" target="_blank" 
            href="https://www.kreml.ru/en-Us/museums-moscow-kremlin/">Official website</a>`
        }, {
            location: {
				lat: 55.7553,
				lng: 37.6178
			},
			label: 'B',
			name: "State Historical Museum",
			// Photo Credit: https://trymoscow.ru/gosudarstvennyj-istoricheskij-muzej/
			imageAddress: 'assets/images/state-historical-museum.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `An attraction in its own right, the State Historical Museum, sheltered in a neo-Russian 
            style building, was founded in 1872 by Ivan Zabelin and Aleksey Uvarov. What once was the Principal Medicine 
            Store now houses an impressive collection, which includes relics of prehistoric tribes that once inhabited 
            the territory of present-day Russia, the country’s largest coin collection, as well as 6th-century manuscripts 
            and artworks collected by the Romanov dynasty among other treasures. <a rel="noopener" target="_blank" 
            href="https://en.shm.ru/">Official website</a>`
        }, {
            location: {
				lat: 55.7414,
				lng: 37.6209
			},
			label: 'C',
			name: "Tretyakov Gallery",
			// Photo Credit: https://wanderings.online/virtualnye-progulki-po-tretyakovskoj-galeree/
			imageAddress: 'assets/images/tretyakov-gallery.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `Built between 1900 and 1905, Tretyakov Gallery started as the private collection of the 
            Tretyakov brothers, who were 19th-century philanthropists. Designed by Viktor Vasnetsov, the gallery is a home 
            to one of the largest collections of Russian art in the world. Here you can see icons including Rublev’s Trinity, 
            and pre-revolutionary masterpieces such as Girl with Peaches by Valentin Serov, Demon by Mikhail Vrubel and Rooks 
            have Come Backby Alexei Savrasov. <a rel="noopener" target="_blank" 
            href="https://www.tretyakovgallery.ru/info/en">Official website</a>`
        }, {
            location: {
				lat: 55.7473,
				lng: 37.6051
			},
			label: 'D',
			name: "Pushkin Museum",
			// Photo Credit: https://pushkinmuseum.art/
			imageAddress: 'assets/images/pushkin-museum.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `The largest foreign art museum in Moscow comprises three branches housing a collection 
            of incredible works by masters of ancient civilisations, the Italian Renaissance and the Dutch Golden Age. 
            The main building contains masterpieces by Botticelli, Tiepolo, Veronese and Rembrandt, some of which have 
            never been displayed before. The Gallery of European & American Art, located next door, stores an incredible 
            collection of Impressionist and post-Impressionist paintings. <a rel="noopener" target="_blank" 
            href="https://pushkinmuseum.art/index.php?lang=en">Official website</a>`
        }, {
            location: {
				lat: 55.7537,
				lng: 37.6199
			},
			label: 'E',
			name: "Lenin Mausoleum",
			// Photo Credit: https://theculturetrip.com/europe/russia/articles/a-guide-to-visiting-lenins-mausoleum/
			imageAddress: 'assets/images/lenin-mausoleum.jpg',
			// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
			description: `Opened to the public in 1924, Lenin’s Mausoleum is one of the most popular tourist attractions 
            in Moscow. The red granite structure is located at the heart of the city in Red Square. Lenin’s embalmed body lies 
            in a glass sarcophagus; it is a somewhat eerie experience walking past the former leader of the Soviet Union 
            but is well worth doing as you understandably can’t do it anywhere else in the world. After visiting the mausoleum, 
            head to the Kremlin wall right next to it for more graves of important communist figures such as Stalin and Brezhnev.`
        }, {
            location: {
				lat: 55.8230,
				lng: 37.6398
			},
			label: 'F',
			name: "Museum of Cosmonautics",
			// Photo Credit: https://www.lottehotelmagazine.com/en/travel_detail?no=295
			imageAddress: 'assets/images/museum-cosmonautics.jpg',
			// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
			description: `At one point, Russia and the US were toe-to-toe when it came to space exploration. 
            While that might no longer be the case, the museum's amazing collection-which includes over 85,000 items-is 
            still awe-inspiring. Main exhibits include the space capsule used by Yuri Gagarin, the first human to travel 
            into outer space; a USSR flag with moon fragments; a Soviet spacesuit; and a rocket propulsion unit from the 
            1960s. A special two-story hall showcases sections of the Mir space station interior, and there are also models 
            of the first sputniks and a replica miniature spaceship. <a rel="noopener" target="_blank" 
            href="https://kosmo-museum.ru/?locale=en">Official website</a>`
        }],
		'parks': [{
            location: {
				lat: 55.7094,
				lng: 37.5423
			},
            label: 'A',
			name: "Sparrow Hills",
			// Photo Credit: https://www.hellotravel.com/russia/moscow-state-university
			imageAddress: 'assets/images/sparrow-hills.jpg',
			// Text Credit: https://bridgetomoscow.com/sparrow-hills_2
			description: `Sparrow Hills is a hill on the right bank of the Moskva River and one of the highest points 
            in Moscow. On top of the hill, 85m above the river, is the observation platform which gives a beautiful panoramic 
            view of the city. Here you can also take a closer look at the tallest of the seven Stalinist skyscrapers, 
            the Moscow State University. It looks spectacular at the top of the hill and thanks to its location the University 
            can be seen from afar.`
        }, {
            location: {
				lat: 55.6117,
				lng: 37.6861
			},
            label: 'B',
			name: "Tsaritsyno Museum-Reserve",
			// Photo Credit: https://en.wikipedia.org/wiki/Tsaritsyno_Palace
			imageAddress: 'assets/images/tsaritsino.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `The former summer residence of Empress Catherine the Great was commissioned in 1775, 
            and succumbed to deterioration during the Soviet era. The whole of Tsaritsyno Museum-Reserve has been 
            fundamentally renovated since 1980s to look even brighter than the original. With its opulently decorated 
            buildings, gardens, meadows and forests, Tsaritsyno Park is the perfect place for a green respite in Moscow. 
            <a rel="noopener" target="_blank" href="https://en.tsaritsyno-museum.ru/">Official website</a>`
        }, {
            location: {
				lat: 55.6704,
				lng: 37.6695
			},
            label: 'C',
			name: "Kolomenskoye",
			// Photo Credit: https://putidorogi-nn.ru/evropa/839-usadba-kolomenskoe-v-moskve
			imageAddress: 'assets/images/kolomenskoe.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `A 10-minute metro ride from the city centre will take you to Kolomenskoe Museum-Reserve, 
            where you can get an idea of what Medieval Moscow looked like. Here you’ll find ancient churches (one dating 
            back to the 16th century), the oldest garden in Moscow and a favourite estate of Tsar Alexey Mikhailovich, 
            father of Peter the Great. <a rel="noopener" target="_blank" href="http://mgomz.com/">Official 
            website</a>`
        }, {
            location: {
				lat: 55.8310,
				lng: 37.6298
			},
            label: 'D',
			name: "VDNKh All-Russian Exhibition Centre",
			// Photo Credit: https://www.sputnik8.com/ru/moscow/sights/vdnh/info
			imageAddress: 'assets/images/vdnh.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `The enormous VDNKh (short for All-Russian Exhibition Centre) recently went through an 
            extensive renovation and now looks better than ever. The centre started as the all-Soviet agricultural 
            exhibition in 1935, and now serves as an open-air museum of Soviet architecture. With the iconic fountain 
            at its entrance, the park complex is home to a number of museums, shopping pavilions, multiple eateries, 
            a massive oceanarium, a zip-line, and a horse-riding rink. In winter a skating rink opens – the largest 
            in Europe. <a rel="noopener" target="_blank" href="https://vdnh.ru/en/">Official 
            website</a>`
        }, {
            location: {
				lat: 55.7284,
				lng: 37.6013
			},
            label: 'E',
			name: "Gorky Park",
			// Photo Credit: https://en.wikipedia.org/wiki/Gorky_Park_(Moscow)
			imageAddress: 'assets/images/gorky-park.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `Moscow’s premier green space, Gorky Park, offers entertainment for every taste: outdoor 
            dancing sessions, yoga and fitness classes all summer, as well as beach volleyball and ping-pong, rollerblading, 
            skateboarding and cycling opportunities, along with segway and boat-rentals. In winter, half of the park turns 
            into one of the city’s biggest skating rinks. The park is also home to an open-air movie theatre and the Garage 
            Museum of Contemporary Art. <a rel="noopener" target="_blank" href="https://www.park-gorkogo.com/en/">Official 
            website</a>`
        }, {
            location: {
				lat: 55.7632,
				lng: 37.5766
			},
            label: 'F',
			name: "Moscow Zoo",
			// Photo Credit: https://rusunion.com/moskovskiy-zoopark-otsrochil-nastuplenie-oseni/
			imageAddress: 'assets/images/moscow-zoo.jpg',
			// Text Credit: https://www.moscovery.com/moscow-zoo/
			description: `The Moscow Zoo is one of the oldest zoos in Europe, dating back to 1864. Located in the 
            city centre, the zoo is a favourite place for families with children and a popular tourist attraction. The zoo is 
            home to about 1,100 species, second only to the Berlin Zoological Garden in the European rankings. Primates, elephants, 
            giraffes, tigers, lions, brown bears and polar bears, penguins, rare birds, and seals are kept on a 22-ha plot 
            of land. The zoo contains a number of rare species of wild fauna, such as the Amur tiger, Pallas’s cat, snow 
            leopard, vicuña, white-tailed gnu, guanaco, takin, and so on. 
            <a rel="noopener" target="_blank" href="https://moscowzoo.su/">Official 
            website</a>`
        }],
		'shopping': [{
            location: {
				lat: 55.7547,
				lng: 37.6215
			},
            label: 'A',
			name: "GUM",
			// Photo Credit: https://gum.ru/history/
			imageAddress: 'assets/images/gum.jpg',
			// Text Credit: https://www.lonelyplanet.com/articles/a-guide-to-shopping-in-moscow
			description: `GUM is one of the oldest department stores in the country. It’s famous for the glass roof 
            designed by one of Russia’s most celebrated architects, Vladimir Shukhov. Today it serves as a high-class shopping 
            mall. There are plenty of luxury shops, a supermarket that sells lots of signature Russian goods and several places 
            to eat. Head to the more expensive <a rel="noopener" target="_blank" 
            href="https://gumrussia.com/cafe/bosco-cafe/">Bosco Cafe</a> with a Kremlin view or, for a budget option, 
            try the Soviet-style cafeteria <a rel="noopener" target="_blank" 
            href="https://gumrussia.com/shops/stolovaya-57/">Stolovaya No 57</a>. GUM also occasionally hosts contemporary art exhibitions in one of its three main aisles. 
            <a rel="noopener" target="_blank" href="https://gumrussia.com/?_ga=2.5870197.735455364.1623700250-201588925.1623700250">Official 
            website</a>`
        }, {
            location: {
				lat: 55.79565812194224,
				lng: 37.782535146553634
			},
            label: 'B',
			name: "Izmailovsky Market",
			// Photo Credit: https://planeta.turtella.ru/russia/moscow/p1156840
			imageAddress: 'assets/images/izmailovsky-market.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
			description: `For those on a slightly more limited budget, ditch window shopping at the exclusive GUM and 
            take a foray into the madly bustling world of Izmailovsky, Russia’s best flea market. Delve into the bargains, 
            rifle through the artisan crafts, admire the local handiwork and be tempted by the silky smooth traditional fur hats. 
            Expect walls of matryoshka dolls, fascinating Soviet memorabilia, and glittering hand-crafted jewellery. Head up to 
            one of Izmailovsky market‘s cafés for a warming mulled wine before continuing your shopping spree.`
        }, {
            location: {
				lat: 55.761208008956295,
				lng: 37.6193057
			},
            label: 'C',
			name: "TSUM",
			// Photo Credit: https://kudago.com/msk/place/cum/
			imageAddress: 'assets/images/tsum.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/the-best-shopping-malls-in-moscow/
			description: `Beautifully located in the historic centre of Moscow, the TSUM Department Store is mere 
            steps from the city’s important tourist attractions, including Red Square. Built in 1908, the Gothic style store 
            sells over 1000 famous brands, including Alexander McQueen, Lanvin and Carolina Herrera. Much like its cousin GUM, 
            the TSUM Department Store is known for its luxury boutiques, stunning architecture and great eateries. 
            <a rel="noopener" target="_blank" href="https://www.tsum.ru/english/">Official website</a>`
        }, {
            location: {
				lat: 55.790476072244026,
				lng: 37.53131675179403
			},
            label: 'D',
			name: "Aviapark Shopping Centre",
			// Photo Credit: https://horosho-tam.ru/rossiya/moskva/aviapark
			imageAddress: 'assets/images/aviapark.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/the-best-shopping-malls-in-moscow/
			description: `Of all the malls on the list, Aviapark takes the most time to get to, but Europe’s biggest 
            mall is definitely worth the free shuttle bus ride. With over 500 stores, 80 eateries and a 17-screen cinema, 
            all spread across the equivalent of 36 football pitches, Aviapark is officially the most popular shopping mall 
            in Moscow. However, the major draw of the glass-roofed shopping centre is the 24-meter-tall pillar aquarium, 
            filled with tropical fish. 
            <a rel="noopener" target="_blank" href="https://aviapark.com/en/">Official website</a>`
        }, {
            location: {
				lat: 55.823595805738755,
				lng: 37.49774188619093
			},
            label: 'E',
			name: "Metropolis Shopping Centre",
			// Photo Credit: https://trcmoscow.ru/trc/tc-metropolis.html
			imageAddress: 'assets/images/metropolis.jpg',
			// Text Credit: https://theculturetrip.com/europe/russia/articles/the-best-shopping-malls-in-moscow/
			description: `Metropolis is where you should go for high-street retail if you don’t feel like traveling 
            too far from the city centre. Home to boutiques like Zara, Marks & Spencer, H&M, New Yorker, GAP and River Island, 
            Metropolis also houses a huge supermarket, bowling alley, swimming pool and a cinema. 
            <a rel="noopener" target="_blank" href="https://metropolis.moscow/en/">Official website</a>`
        }, {
            location: {
				lat: 55.71158082026265,
				lng: 37.61903272734157
			},
            label: 'F',
			name: "Danilovsky Market",
			// Photo Credit: https://daily.afisha.ru/archive/gorod/eating/chto-novye-hozyain-hochet-pochemu-zakryvaetsya-danilovskiy-rynok/
			imageAddress: 'assets/images/danilovsky-market.jpg',
			// Text Credit: https://lidenz.ru/danilovsky-moscow-market/
			description: `Danilovsky market is a marketplace where fresh and varied products are sold. 
            It is complemented by a sophisticated bistro concept, seasonal fairs and gastronomic festivals. Today, the market 
            has around 30 restaurant concepts from different countries and cultures, based on 
            the motto “Around the world in 80 minutes”. You can even find restaurants of famous personalities in the 
            gastronomy industry. Do you want Peking duck or rather cravings for falafel? Have you always wanted to try Armenian 
            dolma or Moroccan tazhin? The Danilovsky Moscow market makes it possible – from luxury burgers to Dagistan 
            cuisine everything can be found there. 
            <a rel="noopener" target="_blank" href="https://danilovskymarket.ru/en">Official website</a>`
        }]
	}
    
// Create a map of Moscow
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		center: {
			lat: 55.7558,
			lng: 37.6173
		},
		styles: yellow_style,
	});
}

function initMapHistoricSites() {
	let mapHistoricSites = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: {
			lat: 55.7539,
			lng: 37.6208
		},
		styles: yellow_style,
	});
	let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let markers = database.historicSites.map(function(database.historicSites, i) {
		let marker = new google.maps.Marker({
			position: database.historicSites.location,
			label: labels[i % labels.length]
		});
		google.maps.event.addListener(marker, 'click', function() {
			$("#info-window").html(`
            <h5><span>${database.historicSites.label}</span>&nbsp; ${database.historicSites.name}</h5>
            <img src="${database.historicSites.imageAddress}" class="image" alt="${database.historicSites.name} photo">
            <p class="info-text">${database.historicSites.description}</p>`);
			if(window.matchMedia("(max-width: 600px)").matches) {
				document.querySelector('#info-window').scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
		return marker;
	});
	let markerCluster = new MarkerClusterer(mapHistoricSites, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}

// Create location markers when pressed on the button 'Historic Sites'
document.getElementById("historic-sites").addEventListener("click", initMapHistoricSites);

function initMapHistoricSites() {
	let mapHistoricSites = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: {
			lat: 55.7539,
			lng: 37.6208
		},
		styles: yellow_style,
	});
	let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// Create markers for Historic Sites locations
	const markerHistoricSites = [
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://www.goodfon.com/wallpaper/moskva-rossiia-krasnaia-ploshchad-ploshchad-tsvety-nebo.html
		{
			location: {
				lat: 55.7539,
				lng: 37.6208
			},
			info: `
        <h5><span>A</span>&nbsp; Red square</h5>
        <img src="assets/images/red-square.jpg" class="image" alt="Red square photo">
        <p class="info-text">The heart of Russia’s capital, Red Square is arguably Moscow’s most visited attraction. 
        The cobblestone square is surrounded by beautiful architecture, and is the place where most of the city’s 
        (and country’s) history unfolded. What was once a market square where traders would sell their goods is now 
        a key location in the city, surrounded by unforgettable sites such as the Kremlin, St.Basil’s Cathedral, Lenin’s 
        Mausoleum and other celebrated attractions.</p>`
		},
		// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
		// Photo Credit: https://www.goodfon.com/wallpaper/st-basil-s-cathedral-red.html
		{
			location: {
				lat: 55.7525,
				lng: 37.6231
			},
			info: `
        <h5><span>B</span>&nbsp; Saint Basil's Cathedral</h5>
        <img src="assets/images/st-basil-s-cathedral.jpg" class="image" alt="Saint Basil's Cathedral photo">
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
			location: {
				lat: 55.7601,
				lng: 37.6186
			},
			info: `
        <h5><span>C</span>&nbsp; Bolshoi Theatre</h5>
        <img src="assets/images/bolshoi-theatre.jpg" class="image" alt="Bolshoi Theatre photo">
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
			location: {
				lat: 55.7446,
				lng: 37.6055
			},
			info: `
        <h5><span>D</span>&nbsp; Cathedral of Christ the Saviour</h5>
        <img src="assets/images/cathedral-christ-saviour.jpg" class="image" alt="Cathedral of Christ the Saviour photo">
        <p class="info-text">This gorgeous Russian Orthodox cathedral is located on the banks of the Moskva River, just a 
        stone’s throw away from the Kremlin. The church as it stands today was consecrated in 2000, as the original church 
        that stood here was destroyed on the command of Josef Stalin in 1931 due to the anti-religious campaign. With its 
        delightful golden dome, spires and dazzling white facades, the Christ the Savior Cathedral is stunning. 
        The interior is just as captivating to wander around, with its beautifully tiled floors and impressive altar.</p>`
		},
		// Text Credit: https://weheart.moscow/toptenattractions/ and https://www.rbth.com/arts/2017/08/17/5-treasures-of-moscows-metro-check-out-these-stunning-blue-line-stations_824162
		// Photo Credit: https://russianmetro.ru/metro/arbatsin.html
		{
			location: {
				lat: 55.7518,
				lng: 37.6009
			},
			info: `
        <h5><span>E</span>&nbsp; Moscow Metro</h5>
        <img src="assets/images/metro.jpg" class="image" alt="Moscow Metro photo">
        <p class="info-text">The Moscow Metro has its own unforgettable charm. It was opened in 1935 and became one 
        of the USSR’s most extravagant architectural projects. That is why most of the central underground stations 
        look like a museum. Every station has its own mood, different decorations and fascinating story. With 223 
        stations and 12 metro lines crosscutting through Moscow, however, this can be tricky, so visiting at least 
        a few of the most impressive ones is a good start. <strong>Arbatskaya station</strong> was designed by a 
        skyscraper architect, so it's no surprise that it features multicolored granite slabs that form a distinctive 
        carpet pattern while its pillars are decorated with white ceramic bouquets. The station’s chandeliers are made 
        of gilded bronze.</p>`
		},
		// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
		// Photo Credit: https://planeta.turtella.ru/russia/moscow/p1192783
		{
			location: {
				lat: 55.751339,
				lng: 37.596398
			},
			info: `
        <h5><span>F</span>&nbsp; Arbat Street</h5>
        <img src="assets/images/arbat.jpg" class="image" alt="Arbat Street photo">
        <p class="info-text">Moscow's one-kilometer-long pedestrian street has been around since the 15th century. 
        Originally a trade route in the outskirts of the city, Arbat Street is now very centrally located, home to 
        posh buildings and lots of places to eat and shop. Beautiful street lamps and two significant statues-one 
        of Princess Turandot (from Puccini's last opera) and one of Soviet-era poet Bulat Okudzhava-adorn the street, 
        which fills up with both locals and tourists on evenings and weekends. A great place to pick up souvenirs or 
        sit down at an outdoor café, Arbat Street also offers a chance to visit the former home of poet Alexander 
        Pushkin and the café both Anton Chekhov and Leo Tolstoy used to visit.</p>`
		},
		// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
		// Photo Credit: http://novodev.ru/
		{
			location: {
				lat: 55.7262,
				lng: 37.5564
			},
			info: `
        <h5><span>G</span>&nbsp; Novodevichy Convent</h5>
        <img src="assets/images/novodevichy-convent.jpg" class="image" alt="Novodevichy Convent photo">
        <p class="info-text">Drenched in history, the Novodevichy Convent is located in a striking building 
        that was once a fortress. This captivating place is well worth visiting when in Moscow. Founded in 1524, 
        the convent houses four cathedrals; Smolensk Cathedral is the undoubted highlight due to its delightful 
        16th-century frescoes. Wandering around the grounds is like stepping back in time. The Novodevichy Cemetery 
        is where many famous leaders of the Soviet Union are buried, such as Yeltsin and Khrushchev.</p>`
		},
	];
	// Add click listener to each marker that opens the InfoWindow with the historic sites info
	let infoWindow = new google.maps.InfoWindow();
	let markers = markerHistoricSites.map(function(markerHistoricSites, i) {
		let marker = new google.maps.Marker({
			position: markerHistoricSites.location,
			label: labels[i % labels.length]
		});
		google.maps.event.addListener(marker, 'click', function() {
			$("#info-window").html(markerHistoricSites.info);
			if(window.matchMedia("(max-width: 600px)").matches) {
				document.querySelector('#info-window').scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
		return marker;
	});
	let markerCluster = new MarkerClusterer(mapHistoricSites, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}

//Create location markers of the museums when pressed on the button 'Museums'
document.getElementById("museums").addEventListener("click", initMapMuseums);

function initMapMuseums() {
	let mapMuseums = new google.maps.Map(document.getElementById("map"), {
		zoom: 11,
		center: {
			lat: 55.791278,
			lng: 37.63261
		},
		styles: yellow_style,
	});
	let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//Create markers for Museums locations
	const markerMuseums = [
		// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
		// Photo Credit: https://wallpapersden.com/city-moscow-night-wallpaper/2560x1080/
		{
			location: {
				lat: 55.7520,
				lng: 37.6175
			},
			info: `
        <h5><span>A</span>&nbsp; Moscow Kremlin</h5>
        <img src="assets/images/moscow-kremlin.jpg" class="image" alt="Moscow Kremlin photo">
        <p class="info-text">A 15th-century fortified complex that covers an area of 275,000 square meters surrounded 
        by walls built in the 1400s. The Grand Kremlin 
        Palace, which has over 700 rooms, was once home to the Tsar family and is now the official residence of the 
        president of the Russian Federation. The massive complex also includes many other buildings, some of which 
        are open to the public and can be visited regularly. Aside from 
        three cathedrals (including one where the Tsars were once crowned) and a number of towers, the Kremlin is also 
        home to the Armory building, a museum holding everything from the royal crown and imperial carriages to the ivory 
        throne of Ivan the Terrible and Fabergé eggs. <a rel="noopener" target="_blank" 
        href="https://www.kreml.ru/en-Us/museums-moscow-kremlin/">Official website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://trymoscow.ru/gosudarstvennyj-istoricheskij-muzej/
		{
			location: {
				lat: 55.7553,
				lng: 37.6178
			},
			info: `
        <h5><span>B</span>&nbsp; State Historical Museum</h5>
        <img src="assets/images/state-historical-museum.jpg" class="image" alt="State Historical Museum photo">
        <p class="info-text">An attraction in its own right, the State Historical Museum, sheltered in a neo-Russian 
        style building, was founded in 1872 by Ivan Zabelin and Aleksey Uvarov. What once was the Principal Medicine 
        Store now houses an impressive collection, which includes relics of prehistoric tribes that once inhabited 
        the territory of present-day Russia, the country’s largest coin collection, as well as 6th-century manuscripts 
        and artworks collected by the Romanov dynasty among other treasures. <a rel="noopener" target="_blank" 
        href="https://en.shm.ru/">Official website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://wanderings.online/virtualnye-progulki-po-tretyakovskoj-galeree/
		{
			location: {
				lat: 55.7414,
				lng: 37.6209
			},
			info: `
        <h5><span>C</span>&nbsp; Tretyakov Gallery</h5>
        <img src="assets/images/tretyakov-gallery.jpg" class="image" alt="Tretyakov Gallery photo">
        <p class="info-text">Built between 1900 and 1905, Tretyakov Gallery started as the private collection of the 
        Tretyakov brothers, who were 19th-century philanthropists. Designed by Viktor Vasnetsov, the gallery is a home 
        to one of the largest collections of Russian art in the world. Here you can see icons including Rublev’s Trinity, 
        and pre-revolutionary masterpieces such as Girl with Peaches by Valentin Serov, Demon by Mikhail Vrubel and Rooks 
        have Come Backby Alexei Savrasov. <a rel="noopener" target="_blank" 
        href="https://www.tretyakovgallery.ru/info/en">Official website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://pushkinmuseum.art/
		{
			location: {
				lat: 55.7473,
				lng: 37.6051
			},
			info: `
        <h5><span>D</span>&nbsp; Pushkin Museum</h5>
        <img src="assets/images/pushkin-museum.jpg" class="image" alt="Pushkin Museum photo">
        <p class="info-text">The largest foreign art museum in Moscow comprises three branches housing a collection 
        of incredible works by masters of ancient civilisations, the Italian Renaissance and the Dutch Golden Age. 
        The main building contains masterpieces by Botticelli, Tiepolo, Veronese and Rembrandt, some of which have 
        never been displayed before. The Gallery of European & American Art, located next door, stores an incredible 
        collection of Impressionist and post-Impressionist paintings. <a rel="noopener" target="_blank" 
        href="https://pushkinmuseum.art/index.php?lang=en">Official website</a></p>`
		},
		// Text Credit: https://www.touropia.com/tourist-attractions-in-moscow/
		// Photo Credit: https://theculturetrip.com/europe/russia/articles/a-guide-to-visiting-lenins-mausoleum/
		{
			location: {
				lat: 55.7537,
				lng: 37.6199
			},
			info: `
        <h5><span>E</span>&nbsp; Lenin Mausoleum</h5>
        <img src="assets/images/lenin-mausoleum.jpg" class="image" alt="Lenin Mausoleum photo">
        <p class="info-text">Opened to the public in 1924, Lenin’s Mausoleum is one of the most popular tourist attractions 
        in Moscow. The red granite structure is located at the heart of the city in Red Square. Lenin’s embalmed body lies 
        in a glass sarcophagus; it is a somewhat eerie experience walking past the former leader of the Soviet Union 
        but is well worth doing as you understandably can’t do it anywhere else in the world. After visiting the mausoleum, 
        head to the Kremlin wall right next to it for more graves of important communist figures such as Stalin and Brezhnev.</p>`
		},
		// Text Credit: https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm
		// Photo Credit: https://www.lottehotelmagazine.com/en/travel_detail?no=295
		{
			location: {
				lat: 55.8230,
				lng: 37.6398
			},
			info: `
        <h5><span>F</span>&nbsp; Museum of Cosmonautics</h5>
        <img src="assets/images/museum-cosmonautics.jpg" class="image" alt="Museum of Cosmonautics photo">
        <p class="info-text">At one point, Russia and the US were toe-to-toe when it came to space exploration. 
        While that might no longer be the case, the museum's amazing collection-which includes over 85,000 items-is 
        still awe-inspiring. Main exhibits include the space capsule used by Yuri Gagarin, the first human to travel 
        into outer space; a USSR flag with moon fragments; a Soviet spacesuit; and a rocket propulsion unit from the 
        1960s. A special two-story hall showcases sections of the Mir space station interior, and there are also models 
        of the first sputniks and a replica miniature spaceship. <a rel="noopener" target="_blank" 
        href="https://kosmo-museum.ru/?locale=en">Official website</a></p>`
		},
	];

	// Add click listener to each marker that opens the InfoWindow with the museums info
	let infoWindow = new google.maps.InfoWindow();
	let markers = markerMuseums.map(function(markerMuseums, i) {
		let marker = new google.maps.Marker({
			position: markerMuseums.location,
			label: labels[i % labels.length]
		});
		google.maps.event.addListener(marker, 'click', function() {
			$("#info-window").html(markerMuseums.info);
			if(window.matchMedia("(max-width: 600px)").matches) {
				document.querySelector('#info-window').scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
		return marker;
	});
	let markerCluster = new MarkerClusterer(mapMuseums, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}

//Create location markers of the parks when pressed on the button 'Parks'
document.getElementById("parks").addEventListener("click", initMapParks);

function initMapParks() {
	let mapParks = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		center: {
			lat: 55.73402612486688,
			lng: 37.63365561837892
		},
		styles: yellow_style,
	});
	let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// Create markers for Parks locations
	const markerParks = [
		// Text Credit: https://bridgetomoscow.com/sparrow-hills_2
		// Photo Credit: https://www.hellotravel.com/russia/moscow-state-university
		{
			location: {
				lat: 55.7094,
				lng: 37.5423
			},
			info: `
        <h5><span>A</span>&nbsp; Sparrow Hills</h5>
        <img src="assets/images/sparrow-hills.jpg" class="image" alt="Sparrow Hills photo">
        <p class="info-text">Sparrow Hills is a hill on the right bank of the Moskva River and one of the highest points 
        in Moscow. On top of the hill, 85m above the river, is the observation platform which gives a beautiful panoramic 
        view of the city. Here you can also take a closer look at the tallest of the seven Stalinist skyscrapers, 
        the Moscow State University. It looks spectacular at the top of the hill and thanks to its location the University 
        can be seen from afar.</p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://en.wikipedia.org/wiki/Tsaritsyno_Palace
		{
			location: {
				lat: 55.6117,
				lng: 37.6861
			},
			info: `
        <h5><span>B</span>&nbsp; Tsaritsyno Museum-Reserve</h5>
        <img src="assets/images/tsaritsino.jpg" class="image" alt="Tsaritsyno Museum-Reserve photo">
        <p class="info-text">The former summer residence of Empress Catherine the Great was commissioned in 1775, 
        and succumbed to deterioration during the Soviet era. The whole of Tsaritsyno Museum-Reserve has been 
        fundamentally renovated since 1980s to look even brighter than the original. With its opulently decorated 
        buildings, gardens, meadows and forests, Tsaritsyno Park is the perfect place for a green respite in Moscow. 
        <a rel="noopener" target="_blank" href="https://en.tsaritsyno-museum.ru/">Official website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://putidorogi-nn.ru/evropa/839-usadba-kolomenskoe-v-moskve
		{
			location: {
				lat: 55.6704,
				lng: 37.6695
			},
			info: `
        <h5><span>С</span>&nbsp; Kolomenskoye</h5>
        <img src="assets/images/kolomenskoe.jpg" class="image" alt="Kolomenskoye photo">
        <p class="info-text">A 10-minute metro ride from the city centre will take you to Kolomenskoe Museum-Reserve, 
        where you can get an idea of what Medieval Moscow looked like. Here you’ll find ancient churches (one dating 
        back to the 16th century), the oldest garden in Moscow and a favourite estate of Tsar Alexey Mikhailovich, 
        father of Peter the Great. <a rel="noopener" target="_blank" href="http://mgomz.com/">Official 
        website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://www.sputnik8.com/ru/moscow/sights/vdnh/info
		{
			location: {
				lat: 55.8310,
				lng: 37.6298
			},
			info: `
        <h5><span>D</span>&nbsp; VDNKh All-Russian Exhibition Centre</h5>
        <img src="assets/images/vdnh.jpg" class="image" alt="VDNKh All-Russian Exhibition Centre photo">
        <p class="info-text">The enormous VDNKh (short for All-Russian Exhibition Centre) recently went through an 
        extensive renovation and now looks better than ever. The centre started as the all-Soviet agricultural 
        exhibition in 1935, and now serves as an open-air museum of Soviet architecture. With the iconic fountain 
        at its entrance, the park complex is home to a number of museums, shopping pavilions, multiple eateries, 
        a massive oceanarium, a zip-line, and a horse-riding rink. In winter a skating rink opens – the largest 
        in Europe. <a rel="noopener" target="_blank" href="https://vdnh.ru/en/">Official 
        website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://en.wikipedia.org/wiki/Gorky_Park_(Moscow)
		{
			location: {
				lat: 55.7284,
				lng: 37.6013
			},
			info: `
        <h5><span>E</span>&nbsp; Gorky Park</h5>
        <img src="assets/images/gorky-park.jpg" class="image" alt="Gorky Park photo">
        <p class="info-text">Moscow’s premier green space, Gorky Park, offers entertainment for every taste: outdoor 
        dancing sessions, yoga and fitness classes all summer, as well as beach volleyball and ping-pong, rollerblading, 
        skateboarding and cycling opportunities, along with segway and boat-rentals. In winter, half of the park turns 
        into one of the city’s biggest skating rinks. The park is also home to an open-air movie theatre and the Garage 
        Museum of Contemporary Art. <a rel="noopener" target="_blank" href="https://www.park-gorkogo.com/en/">Official 
        website</a></p>`
		},
		// Text Credit: https://www.moscovery.com/moscow-zoo/
		// Photo Credit: https://rusunion.com/moskovskiy-zoopark-otsrochil-nastuplenie-oseni/
		{
			location: {
				lat: 55.7632,
				lng: 37.5766
			},
			info: `
        <h5><span>F</span>&nbsp; Moscow Zoo</h5>
        <img src="assets/images/moscow-zoo.jpg" class="image" alt="Moscow Zoo photo">
        <p class="info-text">The Moscow Zoo is one of the oldest zoos in Europe, dating back to 1864. Located in the 
        city centre, the zoo is a favourite place for families with children and a popular tourist attraction. The zoo is 
        home to about 1,100 species, second only to the Berlin Zoological Garden in the European rankings. Primates, elephants, 
        giraffes, tigers, lions, brown bears and polar bears, penguins, rare birds, and seals are kept on a 22-ha plot 
        of land. The zoo contains a number of rare species of wild fauna, such as the Amur tiger, Pallas’s cat, snow 
        leopard, vicuña, white-tailed gnu, guanaco, takin, and so on. 
        <a rel="noopener" target="_blank" href="https://moscowzoo.su/">Official 
        website</a></p>`
		},
	];

	// Add click listener to each marker that opens the InfoWindow with the parks info
	let infoWindow = new google.maps.InfoWindow();
	let markers = markerParks.map(function(markerParks, i) {
		let marker = new google.maps.Marker({
			position: markerParks.location,
			label: labels[i % labels.length]
		});
		google.maps.event.addListener(marker, 'click', function() {
			$("#info-window").html(markerParks.info);
			if(window.matchMedia("(max-width: 600px)").matches) {
				document.querySelector('#info-window').scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
		return marker;
	});
	let markerCluster = new MarkerClusterer(mapParks, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}

//Create location markers of the museums when pressed on the button 'Museums'
document.getElementById("shopping").addEventListener("click", initMapShopping);

function initMapShopping() {
	let mapShopping = new google.maps.Map(document.getElementById("map"), {
		zoom: 10.5,
		center: {
			lat: 55.77427567683743,
			lng: 37.632019544817204
		},
		styles: yellow_style,
	});
	let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// Create markers for Shopping locations
	const markerShopping = [
		// Text Credit: https://www.lonelyplanet.com/articles/a-guide-to-shopping-in-moscow
		// Photo Credit: https://gum.ru/history/
		{
			location: {
				lat: 55.7547,
				lng: 37.6215
			},
			info: `
        <h5><span>A</span>&nbsp; GUM</h5>
        <img src="assets/images/gum.jpg" class="image" alt="GUM">
        <p class="info-text">GUM is one of the oldest department stores in the country. It’s famous for the glass roof 
        designed by one of Russia’s most celebrated architects, Vladimir Shukhov. Today it serves as a high-class shopping 
        mall. There are plenty of luxury shops, a supermarket that sells lots of signature Russian goods and several places 
        to eat. Head to the more expensive <a rel="noopener" target="_blank" 
        href="https://gumrussia.com/cafe/bosco-cafe/">Bosco Cafe</a> with a Kremlin view or, for a budget option, 
        try the Soviet-style cafeteria <a rel="noopener" target="_blank" 
        href="https://gumrussia.com/shops/stolovaya-57/">Stolovaya No 57</a>. GUM also occasionally hosts contemporary art exhibitions in one of its three main aisles. 
        <a rel="noopener" target="_blank" href="https://gumrussia.com/?_ga=2.5870197.735455364.1623700250-201588925.1623700250">Official 
        website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/
		// Photo Credit: https://planeta.turtella.ru/russia/moscow/p1156840
		{
			location: {
				lat: 55.79565812194224,
				lng: 37.782535146553634
			},
			info: `
        <h5><span>B</span>&nbsp; Izmailovsky Market</h5>
        <img src="assets/images/izmailovsky-market.jpg" class="image" alt="Izmailovsky Market photo">
        <p class="info-text">For those on a slightly more limited budget, ditch window shopping at the exclusive GUM and 
        take a foray into the madly bustling world of Izmailovsky, Russia’s best flea market. Delve into the bargains, 
        rifle through the artisan crafts, admire the local handiwork and be tempted by the silky smooth traditional fur hats. 
        Expect walls of matryoshka dolls, fascinating Soviet memorabilia, and glittering hand-crafted jewellery. Head up to 
        one of Izmailovsky market‘s cafés for a warming mulled wine before continuing your shopping spree.</p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/the-best-shopping-malls-in-moscow/
		// Photo Credit: https://kudago.com/msk/place/cum/
		{
			location: {
				lat: 55.761208008956295,
				lng: 37.6193057
			},
			info: `
        <h5><span>C</span>&nbsp; TSUM</h5>
        <img src="assets/images/tsum.jpg" class="image" alt="TSUM photo">
        <p class="info-text">Beautifully located in the historic centre of Moscow, the TSUM Department Store is mere 
        steps from the city’s important tourist attractions, including Red Square. Built in 1908, the Gothic style store 
        sells over 1000 famous brands, including Alexander McQueen, Lanvin and Carolina Herrera. Much like its cousin GUM, 
        the TSUM Department Store is known for its luxury boutiques, stunning architecture and great eateries. 
        <a rel="noopener" target="_blank" href="https://www.tsum.ru/english/">Official website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/the-best-shopping-malls-in-moscow/
		// Photo Credit: https://horosho-tam.ru/rossiya/moskva/aviapark
		{
			location: {
				lat: 55.790476072244026,
				lng: 37.53131675179403
			},
			info: `
        <h5><span>D</span>&nbsp; Aviapark Shopping Centre</h5>
        <img src="assets/images/aviapark.jpg" class="image" alt="Aviapark Shopping Centre photo">
        <p class="info-text">Of all the malls on the list, Aviapark takes the most time to get to, but Europe’s biggest 
        mall is definitely worth the free shuttle bus ride. With over 500 stores, 80 eateries and a 17-screen cinema, 
        all spread across the equivalent of 36 football pitches, Aviapark is officially the most popular shopping mall 
        in Moscow. However, the major draw of the glass-roofed shopping centre is the 24-meter-tall pillar aquarium, 
        filled with tropical fish. 
        <a rel="noopener" target="_blank" href="https://aviapark.com/en/">Official website</a></p>`
		},
		// Text Credit: https://theculturetrip.com/europe/russia/articles/the-best-shopping-malls-in-moscow/
		// Photo Credit: https://trcmoscow.ru/trc/tc-metropolis.html
		{
			location: {
				lat: 55.823595805738755,
				lng: 37.49774188619093
			},
			info: `
        <h5><span>E</span>&nbsp; Metropolis Shopping Centre</h5>
        <img src="assets/images/metropolis.jpg" class="image" alt="Metropolis Shopping Centre photo">
        <p class="info-text">Metropolis is where you should go for high-street retail if you don’t feel like traveling 
        too far from the city centre. Home to boutiques like Zara, Marks & Spencer, H&M, New Yorker, GAP and River Island, 
        Metropolis also houses a huge supermarket, bowling alley, swimming pool and a cinema. 
        <a rel="noopener" target="_blank" href="https://metropolis.moscow/en/">Official website</a></p>`
		},
		// Text Credit: https://lidenz.ru/danilovsky-moscow-market/
		// Photo Credit: https://daily.afisha.ru/archive/gorod/eating/chto-novye-hozyain-hochet-pochemu-zakryvaetsya-danilovskiy-rynok/
		{
			location: {
				lat: 55.71158082026265,
				lng: 37.61903272734157
			},
			info: `
        <h5><span>F</span>&nbsp; Danilovsky Market</h5>
        <img src="assets/images/danilovsky-market.jpg" class="image" alt="Danilovsky Market photo">
        <p class="info-text">Danilovsky market is a marketplace where fresh and varied products are sold. 
        It is complemented by a sophisticated bistro concept, seasonal fairs and gastronomic festivals. Today, the market 
        has around 30 restaurant concepts from different countries and cultures, based on 
        the motto “Around the world in 80 minutes”. You can even find restaurants of famous personalities in the 
        gastronomy industry. Do you want Peking duck or rather cravings for falafel? Have you always wanted to try Armenian 
        dolma or Moroccan tazhin? The Danilovsky Moscow market makes it possible – from luxury burgers to Dagistan 
        cuisine everything can be found there. 
        <a rel="noopener" target="_blank" href="https://danilovskymarket.ru/en">Official website</a></p>`
		},
	];

	// Add click listener to each marker that opens the InfoWindow with the Shopping info
	let infoWindow = new google.maps.InfoWindow();
	let markers = markerShopping.map(function(markerShopping, i) {
		let marker = new google.maps.Marker({
			position: markerShopping.location,
			label: labels[i % labels.length]
		});
		google.maps.event.addListener(marker, 'click', function() {
			$("#info-window").html(markerShopping.info);
			if(window.matchMedia("(max-width: 600px)").matches) {
				document.querySelector('#info-window').scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
		return marker;
	});
	let markerCluster = new MarkerClusterer(mapShopping, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}