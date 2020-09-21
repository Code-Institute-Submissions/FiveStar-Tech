# FiveStar Techniques #
*Personal Training and Specialist Combat Coaching*

## Contents ##
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

## UX (User Experience) ##

### Project Goals ###
The **goal** of this project is to highlight the trainer’s knowledge and expertise, display a range of pre-planned programs and offer a tailored service with the use of the contact form. This project is aimed towards fitness enthusiasts and individuals looking to improve their overall health and wellbeing in an appealing way.

### User Goals ###
* **Find information** about the trainer’s experience
* **Review** a variety of fitness programs
* **Book a consultation** directly from the site
* **Send** a **message** to the **site owner**
* Easily **find contact information**
* **Responsive site** accessible on Desktop, Tablet or Mobile

### User Stories ###
* As a user, I need to feel comfortable with my potential trainer’s experience, personality and passion for fitness.
* As a user, I want to find a suitable program for my needs where exercises are fun and engaging.
* As a user, I want a trainer who can offer a varied and effective workout.
* As a user, I need to locate a trainer who is accessible to my current location.

### Site Owner Goals ###
* As a site owner, I want to generate new leads and interest from fitness enthusiasts.
* As a site owner, I want to make the booking process self-explanatory.
* As a site owner, I want to encourage feedback about services offered and how they can be improved.
* As a site owner, I want to receive communication through the contact form.

### User Requirements and Expectations ###

**Requirements**
* Browse the website using the navigation menu.
* Locate information under titled sections
* Visually appealing content with a mixture of text, images and subtle effects
* Working contact forms with options

**Expectations**
* Content is visually satisfying and informative.
* Navigation and links work as intended.
* Working buttons to avoid big lumps of clustered text.

### Design Choices ###
---

**Fonts**

I looked for strong fonts which effectively attract viewers. I picked **Roboto** for the headers and titles and **Montserrat** for general text.

**Icons**

Icons used where provided by Font Awesome, used in moderation and are self-explanatory.

**Colours**

The main colours used;
* for **H2** section headers: **#484541**;
* for **H3** section sub-headers: **#CD5C5C**;
* for **H4**, **H5** sub-titles and card titles: **#343A40**;
* for header and navigation backgrounds: rgba **(52,58,64,0.9)**; hex **#343A40E6**;
* for footer background: **#343A40**;
* for header, navigation and footer text: **#FFFFFF**;
* for body and section backgrounds: **#FFFFFF**;
* for body text: **#494949**;

![Main Palette](assets/img/fst-palette1.png)

The parallax colours used;
* for some backgrounds: rgba **(248, 6, 6, 0.68)**; hex **#F80606AD**;
* for some backgrounds: rgba **(0, 0, 0, 0.25)**; hex **#00000040**;
* for horizontal rule: **#E3C44C**;
* for all text: **#F4FAFF**;

![Parallax Palette](assets/img/fst-palette2.png)

The card and form colours used;
* for card and form backgrounds: **#D4DADF**;
* for card titles and form-control backgrounds: **#343A40**;
* for card subtitle: **#035D18**;
* for form-control input text: **#CDCDCD**;
* for labels and card text: **#494949**;

![Card & Form Palette](assets/img/fst-palette3.png)

The contact information & social icon colours used;
* for some backgrounds: **#C92222**;
* for some backgrounds: **#343A40**;
* for all text: **#F8F9FA**;

![Contact & Socials Palette](assets/img/fst-palette4.png)

## Wireframing ##

I used Balsamiq Wireframes to produce basic wireframes on various screen sizes. This helped me to arrange the overall layout and placement of elements on a single scrolling page, with anchored links and sections.

View my wireframes here:

* [Desktop Wireframe](wireframes/fst-desktop.png)
* [Tablet Wireframe - Portrait](wireframes/fst-tablet-portrait.png)
* [Tablet Wireframe - Landscape](wireframes/fst-tablet-landscape.png)
* [Mobile Wireframe - Portrait](wireframes/fst-mobile-portrait.png)
* [Mobile Wireframe - Landscape](wireframes/fst-mobile-landscape.png)

## Features ##

**Features** that have been **developed**:
* **Responsive** design on all screen sizes and viewports
* **Fixed Navigation**
* Scrolling **Parallax** effect
* Automatic **Slideshow**
* **Collapsible / Hidden** data
* Responsive **Modal**
* **Contact Forms** with required options
* Links to **Social Media**
* **Back to Top** scroll button

**Features** that will be **implemented** in the **future**:
* **Contact Forms** with form validation
* Transformation **Gallery**
* Testimonial **Slideshow**
* **Appointment / Booking** system
* Secure **Payment** options

## Technologies Used ##

**Languages**

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JS](https://en.wikipedia.org/wiki/JavaScript)

**Tools & Libraries**

* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font-Awesome](https://fontawesome.com/icons?d=gallery)
* [Google Fonts](https://fonts.google.com/)
* [Canva](https://www.canva.com/) used for royalty free images and graphic creation 

## Testing ##





## Bugs ##

Here are some bugs I encountered;

**During development**

* Fixed navigation:
	* Added the no-gutters class to the header tag. This resolve the issue with the parallax image overflowing.
* Navigation anchors:
    * Added a span inside each h2 section title, then set an id for the anchors.
* Navbar links not collapsing after click - on mobile:
    * Fixed this with some js.
* Parallax effect:
    * Set the correct z-index and set position to fixed.
* Slideshow.js:
	* The fade class for the slideshow clashed with the Modal fade class. Moved the slideshow js function to the end of functions.js script to resolve.
* Modal:
    * Placed the modal code outside of the main tag for the modal overlay to work correctly.
* Contact background image:
    * Changed the image opacity in Canva, then changed the contact & social list item colours to this pallette [Contact & Socials Palette](assets/img/fst-palette4.png)

## Deployment ##





## Credits ##

**Credit for text used on this website**




**Images Used**




**Special Thanks**



**Site for educational purposes only!**