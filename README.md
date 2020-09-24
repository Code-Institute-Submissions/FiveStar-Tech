# [FiveStar Techniques](https://courtney-l.github.io/FiveStar-Tech/)
*Personal Training and Specialist Combat Coaching*

![FiveStar Techniques](assets/img/fst-header.jpg)

## Contents
* UX
    * Project Goals
    * User Goals
    * User Stories
    * Site Owner Goals
    * User Requirements and Expectations
    * Design Choices
        * Fonts
        * Icons
        * Colours
    * Features
        * Features that have been developed
        * Features that will be implemented in the future
    * Technologies Used
    * Testing
    * Bugs
    * Deployment
    * Credit

## UX (User Experience)

### Project Goals
The **goal** of this project is to highlight the trainer’s knowledge and expertise, display a range of pre-planned programs and offer a tailored service with the use of the contact form. This project is aimed towards fitness enthusiasts and individuals looking to improve their overall health and wellbeing in an appealing way.

### User Goals
  * **Find information** about the trainer’s experience
  * **Review** a variety of fitness programs
  * **Book a consultation** directly from the site
  * **Send** a **message** to the **site owner**
  * Easily **find contact information**
  * **Responsive site** accessible on Desktop, Tablet or Mobile

### User Stories
  * As a **user**, I need to feel comfortable with my potential trainer’s experience, personality and passion for fitness.
  * As a **user**, I want to find a suitable program for my needs where exercises are fun and engaging.
  * As a **user**, I want a trainer who can offer a varied and effective workout.
  * As a **user**, I need to locate a trainer who is accessible to my current location.

### Site Owner Goals
  * As a **site owner**, I want to generate new leads and interest from fitness enthusiasts.
  * As a **site owner**, I want to make the booking process self-explanatory.
  * As a **site owner**, I want to encourage feedback about services offered and how they can be improved.
  * As a **site owner**, I want to receive communication through the contact form.

### User Requirements and Expectations

**Requirements**
  * Browse the website using the navigation menu.
  * Locate information under titled sections
  * Visually appealing content with a mixture of text, images and subtle effects
  * Working contact forms with options

**Expectations**
  * Content is visually satisfying and informative.
  * Navigation and links work as intended.
  * Working buttons to avoid big lumps of clustered text.

### Design Choices
---
The influence of this project's theme came from a previous personal project, which contained sharp imagery that scaled well, so I decided to look for a colour scheme that would be complimentary.

**Fonts**

I selected fonts based on their readability and strength to effectively attract viewers. For the headers and titles I picked **Roboto** and **Montserrat** for general text.

**Icons**

Icons used where provided by [Font-Awesome](https://fontawesome.com/icons?d=gallery), used in moderation and are self-explanatory.

**Colours**

Used a previously designed logo as a starting point, the dominant **Red** was hard not to notice. Such a colour isn't just warm, but hot when used in design projects. The colour scheme I settled on would have **Red** as its primary colour.

The main colours used;
  * for **H2** Section Headers: **#343A40**;
  * for **H3** Section Sub-headers: **#C92222**;
  * for **H4**, **H5** Sub-titles and Cards: **#343A40**;
  * for the Header and Navigation Background: rgb**(52,58,64,0.9)**
  * for the Header and Navigation Text: **#F8F9FA**
  * for the Body and Section Backgrounds: White **#FFFFFF**;
  * for the Body Text: **#494949**;
  * for the Footer Background: **#343A40**;
  * for the Footer Text: **#F8F9FA**; Honey Yellow **#FFB100**

![Palette](assets/img/fst-palette.png)

The parallax text colours used;
  * for some backgrounds: rgb **(52 58 64 / 0.25)**; 
  * for other backgrounds: rgb **(201 34 34 / 0.8)**;
  * for the horizontal rule: **#E3C44C**;
  * for text: **#F8F9FA**;

**Background**

Images used on the Parallax feature were from an 'old project', which I have permission to use. The imagery is crisp, sharp and is the inspiration behind my project choices.

## Wireframing

I used [Balsamiq Wireframes](https://balsamiq.com/wireframes/) to produce basic wireframes for various screen sizes. This helped me to arrange the overall layout and placement of elements on a single scrolling page, with anchored links and sections.

View my wireframes here:

* [Desktop Wireframe](wireframes/fst-desktop.png)
* [Tablet Wireframe - Portrait](wireframes/fst-tablet-portrait.png)
* [Tablet Wireframe - Landscape](wireframes/fst-tablet-landscape.png)
* [Mobile Wireframe - Portrait](wireframes/fst-mobile-portrait.png)
* [Mobile Wireframe - Landscape](wireframes/fst-mobile-landscape.png)

## Features

**Features** that have been **developed**:
  * **Responsive** design on all screen sizes and viewports
  * **Fixed Navigation**
  * Scrolling **Parallax** effect
  * Automatic **Slideshow**
  * **Collapsible / Hidden** data
  * Responsive **Modal**
  * **Contact Forms** with basic validation
  * Links to **Social Media**
  * **Scroll to Top** button

**Features** that will be **implemented** in the **future**:
  * Transformation **Gallery**
  * Testimonial **Slideshow**
  * **Appointment / Booking** system
  * Secure **Payment** options

## Technologies Used

**Languages**
  * [HTML](https://en.wikipedia.org/wiki/HTML)
  * [CSS](https://en.wikipedia.org/wiki/CSS)
  * [JS](https://en.wikipedia.org/wiki/JavaScript)

**Tools & Libraries**
  * [Git](https://git-scm.com/)
  * [Bootstrap](https://getbootstrap.com/)
  * [Font-Awesome](https://fontawesome.com/icons?d=gallery)
  * [Google Fonts](https://fonts.google.com/)
  * [Balsamiq Wireframes](https://balsamiq.com/wireframes/)
  * [IrfanView](https://www.irfanview.com/)
  * [Canva](https://www.canva.com/)
  * [BEM](http://getbem.com/introduction/)
  * [Coolors.co](https://coolors.co/)
  * [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB)

## Testing

When testing this site I used an online tool called [Lambdatest](https://www.lambdatest.com/) and Chromium Dev Tools. 

I tested the CSS code with [CSS Validator](http://jigsaw.w3.org/css-validator/), which passed **without issue**. 

The HTML code was tested with a [HTML Validator](https://validator.w3.org/) tool, which gave me the following **results:**

* Warnings:
  * The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment
  * Attribute is unnecessary for JavaScript resources

* Errors:
  * Required form elements set without a multiple attribute or a size attribute
  * For attribute requires and id

* Fixes:
  * Reduced comment hypens
  * Removed type attribute
  * Removed for attribute
    
**Responsiveness**

  * **Implementation**: I used **Bootstrap** throughout the project to ensure **maximum** responsiveness. Tested with **Chromium Dev Tools** and [Lambdatest](https://www.lambdatest.com/).

  * **Results**: Responsiveness was as expected, except for the **Navbar**, which didn't collapse on click. I eventually found a simple working solution from a fellow students [byllsa](https://github.com/byIlsa/Aloy-from-outcast-to-heroine/blob/master/assets/js/scripts.js) project.

  * **Verdict**: After resolving the Navbar issue, everything was responsive. This test **passed**.

**Design**

  * **Implementation**: The design of the site was based around the Parallax effect and sharp images, which looks modern and sleek on single page sites. I used **colours** and **styles** which complimented the site logo and progressed from there.

  * **Results**: The use of **fonts** and **colours** selected make the **content** standout throughout the site. I changed the opacity of the contact background image and introduced new colours to the list items as the text was hard to read.

  * **Verdict**: The site looks as intended with everything working. This test has **passed**.

**Contact Form**

  * **Implementation**: The **contact form** is used to contact the site owner. I modified the form example from the **Bootstrap** site for **my own needs**. Client side validation was **implemented** at the same time, preventing **users** from skipping required fields when clicking **Submit**.

  * **Results**: The contact form is working as intended, form fields are validated.
  * **Verdict**: Basic form validation works. This test **passed**.
  * **Please Note**: The **Submit** button is not currently configured, no feedback has been gathered.

## Bugs

Here are some bugs I encountered **during development**;

* Fixed Navigation:
  * Added the **no-gutters** class to the **Header** tag which resolved the Parallax overflow issue.

* Navigation Anchors:
  * Added a span inside each **H2** Section Title, then set an **ID** for the navigation anchors.

* Navbar Links Not Collapsing After Click - *on mobile*:
  * Fixed this with some js.

  * ```js
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    }); 
    ```

* Parallax:
  * Set the Parallax container *position* to **Fixed !important** and *Z-Index* to **1**. *This also helped to resolve the fixed navigation issue above*

* Slideshow JS:
  * The **Fade** class for the **Slideshow** conflicted with the same class applied to the **Modal**. Resolved by moving the **Slideshow function** to the end of the **functions.js** script.

* Modal:
  * Placed the **Modal** container outside of the **Main** tag to allow the modal overlay to work correctly.

* Contact Me - *background image*:
  * Changed the image opacity in Canva and re-uploaded file, then changed the colours for **Contact** & **Social** list items to algin with the project colour scheme - Lava **#C92222**, Gunmetal **#343A40** and Cultured **#F8F9FA**.

## Deployment

FiveStar Techniques was developed on GitPod, using git and GitHub to host the repository.

When deploying FiveStar Techniques using GitHub Pages the following steps were made:

* Opened up **GitHub** in the browser.
* Signed in using username and password.
* Selected my **repositories**.
* Navigated to **'/Courtney-L/FiveStar-Tech'**.
* In the top navigation clicked **'settings'**.
* Scrolled down to the **GitHub Pages** area. 
* Selected **'Master Branch'** from the **'Source'** dropdown menu.
* Clicked to confirm my selection.
* FiveStar Techniques now live on GitHub Pages.

#### Running FiveStar Techniques Locally

Cloning FiveStar Techniques from GitHub:

* Navigate to **'/Courtney-L/FiveStar-Tech'**.
* Click the green **'Clone or Download'** button.
* Copy the **url** in the dropdown box.
* Using your favourite **IDE** open up your preferred **terminal**.
* Navigate to your desired file location. 
* Copy the following **code** and input it into your terminal to clone FiveStar Techniques.
 ```git
  git clone https://github.com/Courtney-L/FiveStar-Tech.git 
   ```

## Credits

**Credit for text used on this website**
  * Profile - Contains fictional text for a mock profile description. - *this is my own original writing*
  * Gifs & Quotes - Used Google to find inspirational fitness quotes for the **Parallax** and **Card** gif text. - *all common quotes with unknown sources*
  * Card Descriptions - Sampled training plans provided by **Stuart Anthony**.

**Images Used**
  * Used [Canva](https://www.canva.com/) pro account features to create the site Logo, Card gif's and Contact Me map. All images are free to use under Canva's [Free Media License Agreement](https://about.canva.com/license-agreements/free-media/).

  * Many thanks to **Stuart Anthony** for the permission to use his photo and excellent training shots.

  * **Logos**
    * [YMCAFit](https://www.ymcafit.org.uk/)
    * [CIMSPA](https://www.cimspa.co.uk/)
    * [England Boxing](https://www.englandboxing.org)
    * [British Thai Boxing Council - BTBC](http://www.british-thai-boxing-council.com/)

**Special Thanks**
  * **Stuart Anthony** - *fictious name, but he knows who he is*

**Site for educational purposes only!**