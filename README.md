`python3 -m http.server`

# Visit Moscow Website

View the live project [Here](https://victoriashalabaeva.github.io/Visit-Moscow/)

*Visit Moscow* is an interactive website that guides through the most popular sightseeings of Moscow. The website is aimed for tourists who plan to visit the capital of Russia and look for a concise summery on the locations worth to see first.

The website is designed to be responsive and accessible on a range of devices, making it easy to navigate through.

![Responsive Design](assets/images/responsive-design.jpg)

## User Experience (UX)

### User stories

  - **As a tourist:**

    - I want to see a quick overview on Moscow city and form a first impression on it.
    - I want to read more information and have a visual representation of the advertised locations.
    - I want to see different locations on a map to have a better understanding on how much far the locations are one from each other.
    - I want to have an opportunity to ask for more info, advice or recommendation in organizing my trip.

  - **As a general user:**
    
    - I want to be able to easily navigate throughout the site to find content.
    - I want to open the website from different devices (desktop/laptop/mobile device).
      
### Design

  - **Colour Scheme**

    The main colours used are dark grey (#2d2f31), light grey (#494947), light yellow (#e8e3c9) and orange (#e3952a).

  - **Typography**

    The Roboto and Yanone Kaffeesatz (Navbar heading) fonts are the main fonts used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Roboto is a clean font used frequently in programming, so it is both attractive and appropriate.

  - **Imagery**
     
    The large background images are designed to be striking and catch the user's attention demonstrating Moscow views.

### Wireframes

  - *Home* page - [View](assets/pdf/home-page.pdf)

  - *Things to do* page - [View](assets/pdf/things-to-do-page.pdf)

  - *Contact* page - [View](assets/pdf/contact-page.pdf)

## Features

### Existing Features

- The website is responsive on all device sizes (down to 280 px).

- The website contains a Bootstrap responsive navigation header; a collapse plugin groups and hides navbar content.

- The website contains three pages including *Home*, *Things to do* and *Contact* pages. This thematic division facilitates the website navigation.

- The *Home* page:

  - contains an appealing background image and a Bootstap jumbotron-style component that catches the user's attention. 
  - shows an actual Moscow weather.
  - Bootstrap buttons linking to *Things to do* and *Contact* pages.

- The *Things to do* page:

  - contains an interactive Google map interface to discover the most popular touristic attractions. By clicking on one of the four buttons (*Historic Sites*, *Museums*, *Parks* and *Shopping*), the corresponding marker distribution shows up. Further, by clicking on each marker, the info window with a photo and description appears. 

- The *Contact* page:

  - contains a contact form to submit a message. 

### Features Left to Implement

- a *Search Bar* through which a user can search content of their concern within the website.

- a weather info in real time (currently weather info updates only the *Home* page is refreshed)

## Technologies Used

### Languages Used

- HTML5

- CSS3

- JavaScript

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.1.3:](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

   Grid System to make the site responsive,

   Navbar to make a responsive navigation header,

   Jumbotron-style component for calling extra attention to featured content or information.

2. [Google Maps JavaScript API:](https://developers.google.com/maps/documentation/javascript/overview)   

   Google Maps JavaScript API was used to integrate an interactive Google map with built in features such as markers and info windows to provide additional information.

3. [EmailJS:](https://www.emailjs.com/)

   EmailJS was used to connects the contact form to an email service.

4. [OpenWeather API:](https://openweathermap.org/api)

   OpenWeather API was used to display a current weather in Moscow.
   
5. [Google Fonts:](https://fonts.google.com/)

   Google fonts Roboto and Yanone Kaffeesatz were used on all pages throughout the project.

6. [jQuery:](https://jquery.com/)

   jQuery was used in JavaScript codes for the media query and detection of iOS devices; within Bootstrap to make the navbar responsive.

7. [Git:](https://git-scm.com/)

   Git was used for version control. 

8. [GitPod:](https://www.gitpod.io/)

   GitPod was used as an IDE platform for website realization.

9. [GitHub:](https://github.com/)

   GitHub is used to store the project code after being pushed from GitPod.

10. [Balsamiq:](https://balsamiq.com/)

    Balsamiq was used to create wireframes during the design process.

11. [Squoosh:](https://squoosh.app/editor)

    Squoosh image editor was used to reduces file size of the images.

12. [Am I responsive?](http://ami.responsivedesign.is/)

    Am I responsive? was used to show how the website looks on different devices.

13. [AutoPrefixer:](https://autoprefixer.github.io/)

    AutoPrefixer was used to add vendor prefixes to a CSS code.

14. [Beautifier:](https://beautifier.io/) 

    Beautifier was used to format code in a consistent and readable way.

15. [W3C Markup Validator](https://validator.w3.org/)

    W3C Markup Validator was used to check the markup validity of Web documents in HTML.

16. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 
    W3C CSS Validator was used to check the markup validity of Web documents in CSS.

17. [JSHint](https://jshint.com/)

    JSHint was used to detect errors and potential problems in JavaScript code.

18. [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

    Chrome DevTools was used to inspect and modify the website code.

19. [Lighthouse](https://developers.google.com/web/tools/lighthouse)

    Lighthouse was used to assess performance, accessibility, SEO and best practices.

## Testing

The W3C Markup Validator, W3C CSS Validator and JSHint Services were used to validate HTML, CSS and JS code, respectively, to ensure no syntax error.

- [W3C Markup Validator](https://validator.w3.org/). Please see Figure S1 in [Supp Info](supp-info.md) for the results.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Please see Figure S2 in [Supp Info](supp-info.md) for the result.
- [JSHint](https://jshint.com/) did not detect any potential problem in JavaScript codes.

### Testing User Stories from User Experience (UX) Section

Please see [Here](testing_user_stories.md) to find the user stories testing with corresponding screenshots.

### Testing Functionality, Usability and Responsiveness

The manual testing is described [Here](manual-testing.md).

### Further Testing

- The website was checked for performance in [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools (see results in Figure S3 in [Supp Info](supp-info.md)).

- The Website was tested on Google Chrome, Mozilla Firefox and Microsoft Edge browsers.

- The screen sizes and devices tested in Chrome DevTools include:

    - 1920 x 1080 
    - 1600 x 992
    - 1440 x 900
    - 1366 x 768
    - 1280 x 800
    - Nexus 10 (800 x 1280)
    - iPad (768 x 1024)
    - Surface Duo (540 x 720)
    - iPhone 6/7/8 Plus (414 x 736)
    - Pixel 2 (411 x 731)
    - iPhone 6/7/8 (375 x 667)
    - Nexus 4 (384 x 640)
    - iPhone X (375 x 812)
    - Galaxy S5 (360 x 640)
    - iPhone 5/SE (320 x 568)
    - Galaxy Fold (280 x 653)

- Devices physically tested include:

  - Desktop 
  - Laptop
  - iPhoneXR 
  - Huawei Mate 20 
    
### Bugs

1. A contact form did not work, no email was recieved on a private email account.

   The JavaScript code was checked thoroughly and no mistake was detected.
   
   The problem was solved by avoiding hyphen and underscore symbols in *name* and *id* attributes. 
   In particular, `name="email_address"` was changed to `name="emailaddress"`; `name="your-message"` was changed to `name="yourmessage"`; `id="your-message"` to `id="yourmessage"`.

2. CSS property *Background-size: cover;* did not work in iOS devices. The resulting background image was too big on iPhone. Please see Figure S4 in [Supp Info](supp-info.md).

   The problem was solved following the ideas from [StackOverflow](https://stackoverflow.com/questions/24154666/background-size-cover-not-working-on-ios). This happens when the background image is fixed. Fixed attached images use the whole `body` size which, on mobile devices, can get really tall blowing the image out. Changing a *background-attachment* from *fixed* to *scroll* solved the problem.

3. 100vh height value did not work properly in mobile device browsers due to an appearing/disappearing address bar. The background image was jumping.

   For iPhone devices, the problem was nicely solved by adding `max-height: -webkit-fill-available;`. There is no jump, the background image and the weather info is not cut.

   For Huawei Mate 20, the background image and weather container are cut. I have tried to apply a trick described [Here](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) to recalculate the viewport size (every time the address bar dissappers), however it causes a weird jump of the background image. So it was dicided not to implement further this trick.



#### Existing bugs
        
## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).

2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
    
4. Under "Source", click the dropdown called "None" and select "Master Branch".
    
5. The page will automatically refresh.
    
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
    
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.

3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
    
2. Under the repository name, click "Clone or download".
    
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
    
4. Open Git Bash.
    
5. Change the current working directory to the location where you want the cloned directory to be made.
    
6. Type `git clone`, and then paste the URL you copied in Step 3.

    ```
    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    ```

7. Press Enter. Your local clone will be created.

   ```
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   > Cloning into `CI-Clone`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remove: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.

Click [Here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

### Creating Google Map API key

1. Create a Gmail account [Here](https://accounts.google.com/signup?hl=en). 

2. Create a billing account at [developers.google.com](https://developers.google.com/).

3. Create your API key following this [documentation](https://developers.google.com/maps/gmp-get-started#quickstart).

4. Restrict your API key following this [documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Connecting to EmailJS

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.

2. Connect your email service by following the steps described [Here](https://www.emailjs.com/docs/user-guide/connecting-email-services/).

3. Create an email template by following the steps described [Here](https://www.emailjs.com/docs/user-guide/creating-email-templates/).

4. Create a contact form on your webpage by following the steps described [Here](https://www.emailjs.com/docs/tutorial/creating-contact-form/).

### Creating OpenWeather API key

1. Go to [OpenWeather API](https://openweathermap.org/api) and create an account.

2. Once you have created an account, you will receive an API key on your email.

3. Access current weather data for any location. Read this [documentation](https://openweathermap.org/current) on how to call OpenWeather API. 

## Credits

### Content

#### Images

- Favicon image from [Iconduck](https://iconduck.com/icons/114143/moscow)

- Background image on *Home* page from [Wallpaper](https://wall.alphacoders.com/big.php?i=1117417)

- Background image on *Things to do* page from [WallpaperAccess](https://wallpaperaccess.com/moscow)

- Background image on *Contact* page from [Wallpaper Flare](https://www.wallpaperflare.com/saint-basil-s-cathedral-russia-moscow-rain-water-drops-church-wallpaper-phrrk)

- Red square image from [GoodFon](https://www.goodfon.com/wallpaper/moskva-rossiia-krasnaia-ploshchad-ploshchad-tsvety-nebo.html)

- Saint Basil's Cathedral image from [GoodFon](https://www.goodfon.com/wallpaper/st-basil-s-cathedral-red.html)

- Bolshoi Theatre image from [Wallpaper Flare](https://www.wallpaperflare.com/bolshoi-theatre-moscow-russia-fountain-illumination-wallpaper-tcgfl)

- Cathedral of Christ the Saviour image from [Wallpaper](https://wall.alphacoders.com/big.php?i=672508)

- Moscow Metro image from [russianmetro.ru](https://russianmetro.ru/metro/arbatsin.html)

- Arbat Street image from [Turtella](https://planeta.turtella.ru/russia/moscow/p1192783)

- Novodevichy Convent image from [novodev.ru](http://novodev.ru/)

- Moscow Kremlin image from [Wallpapersden](https://wallpapersden.com/city-moscow-night-wallpaper/2560x1080/)

- State Historical Museum image from [Try Moscow](https://trymoscow.ru/gosudarstvennyj-istoricheskij-muzej/)

- Tretyakov Gallery image from [Wanderings Online](https://wanderings.online/virtualnye-progulki-po-tretyakovskoj-galeree/)

- Pushkin Museum image from [pushkinmuseum.art](https://pushkinmuseum.art/)

- Lenin Mausoleum image from [Culture Trip](https://theculturetrip.com/europe/russia/articles/a-guide-to-visiting-lenins-mausoleum/)

- Museum of Cosmonautics image from [LHM](https://www.lottehotelmagazine.com/en/travel_detail?no=295)

- Sparrow Hills image from [hellotravel](https://www.hellotravel.com/russia/moscow-state-university)

- Tsaritsyno Museum-Reserve image from [Wikipedia](https://en.wikipedia.org/wiki/Tsaritsyno_Palace)

- Kolomenskoye image from [putidorogi-nn.ru](https://putidorogi-nn.ru/evropa/839-usadba-kolomenskoe-v-moskve)

- VDNKh All-Russian Exhibition Centre image from [SPUTNIK](https://www.sputnik8.com/ru/moscow/sights/vdnh/info)

- Gorky Park image from [Wikipedia](https://en.wikipedia.org/wiki/Gorky_Park_(Moscow))

- Moscow Zoo image from [rusunion.com](https://rusunion.com/moskovskiy-zoopark-otsrochil-nastuplenie-oseni/)

- GUM image from [GUM](https://gum.ru/history/)

- Izmailovsky Market image from [Turtella](https://planeta.turtella.ru/russia/moscow/p1156840)

- TSUM image from [KUDAGO](https://kudago.com/msk/place/cum/)

- Aviapark Shopping Centre image from [horosho-tam.ru](https://horosho-tam.ru/rossiya/moskva/aviapark)

- Metropolis Shopping Centre image from [trcmoscow.ru](https://trcmoscow.ru/trc/tc-metropolis.html)

- Danilovsky Market image from [daily.afisha.ru](https://daily.afisha.ru/archive/gorod/eating/chto-novye-hozyain-hochet-pochemu-zakryvaetsya-danilovskiy-rynok/)

#### Text

- Text content on *Home* page was taken from [Touropia](https://www.touropia.com/tourist-attractions-in-moscow/)

- Text content on *Things to do* page was taken from 
  
   - [Culture Trip](https://theculturetrip.com/europe/russia/articles/19-must-see-attractions-in-moscow/)
   - [Touropia](https://www.touropia.com/tourist-attractions-in-moscow/)
   - [PlanetWare](https://www.planetware.com/russia/top-rated-tourist-attractions-in-moscow-r-1-3.htm)
   - [WeHeart](https://weheart.moscow/toptenattractions/)
   - [Bridgetomoscow](https://bridgetomoscow.com/sparrow-hills_2)
   - [Moscovery](https://www.moscovery.com/moscow-zoo/)

- The present README file was written following the [template](https://github.com/Code-Institute-Solutions/SampleREADME) provided by Code Institute. Some parts (like Deployment section) were copied and pasted as they describe exactly the same procedure that was employed for the realization of this project.

### Code

- [EmailJS](https://www.emailjs.com/docs/) documentation and Code Institute tutorials were used to link the contact form to the EmailJS service.

- Weather API integration code is written following the [tutorial by George Martsoukos](https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893).

- The code to apply media query for CSS styling was taken from [Here](https://codepen.io/Midos/pen/LYVpMBP).

- Google Maps JavaScript API was integrated following the Code institute tutorials, [Google maps documentation](https://developers.google.com/maps/documentation/javascript/overview), [YouTube Google Maps JavaScript API Tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw) and [Stackoverflow](https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow).

- Approach to identify iPhone/iPad device was taken from [Here](https://racase.com.np/javascript-how-to-detect-if-device-is-ios/).

- Approach to change a placeholder colour was taken from [Here](https://www.w3schools.com/howto/howto_css_placeholder.asp)

- Approach to align text inside a div was taken from [Here](https://stackoverflow.com/questions/2939914/how-do-i-vertically-align-text-in-a-div/13515693#13515693)

- Trick to make 100vh constant in mobile browsers was taken from [Here](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser).

- Solution how to make *background-size:cover* work on iOS was taken from [Here](https://stackoverflow.com/questions/24154666/background-size-cover-not-working-on-ios).

### Acknowledgements

- My mentor Sandeep Aggarwal for continuous helpful feedback.

- Tutor support at Code Institute for their help and support.
