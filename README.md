# Static Website Boilerplate

## The Problem
I found myself losing time by spending the first hour of every project just setting up folders and variable names. This repetitive manual setup felt like a waste of time that could be better spent actually building the actual website. I needed a way to jump straight from an idea to development.

## The Solution
I engineered this ready-to-use efficient static website boilerplate to serve as a launchpad for my all my websites. By having a pre-defined system, I ensure that every site I build—whether for a local shop or an NGO—starts with the same project file structure so that I reduce the amount of time I waste.

## Tech Stack
I chose to stick with vanilla HTML, CSS, and JS because I wanted to build websites that are future-proof. By avoiding frameworks, the resulting sites are lightweight, load almost instantly for users, and are easy for anyone to maintain without having to know 70 different framework. This approach actually results in a better user experience.

## Project File Structure
The project file structure is designed to be modular and efficient, by putting the files in separate folders.

```
D:.
│   index.html
│   LICENSE
│   README.md
│
├───assets
│   ├───documents
│   │
│   ├───images
│   │
│   └───videos
│
├───css
│   ├───base
│   │
│   └───modules
│
└───js
    ├───base
    │
    └───modules
```

## Thought Process
### Project Start:
* I started with creating the file structure and uploading to GitHub in order to save my progress and document it.
### CSS Design System:
* I started building the design system for the boilerplate. I made sure to use readable variable names and make it work for any screen size by using clamp() function for fonts, media queries. I also made sure to use rem units instead of px for accessibility.
* For the reset attributes, I made sure to use the established variables and that all the components looks similar no matter what browser the user uses.
* I added some classes I can use on HTML components to have some nice default styling to speed up the process of creating the website.
* I imported all the different CSS files in one wrapper file so that I could link only one file in the HTML.
### Navbar:
* I started by preparing the HTML file for my navbar and added a RemixIcon link in the wrapper.css file.
* I made sure to make the navbar SEO friendly by using semantic tags such as header, nav or ul.
* I used the established CSS variables in my navbar.css file to keep the UI consistent.
* I wrote two JS functions to handle theme toggle and hamburger menu openings. Made sure to make it fast and reliable to avoid getting flashes on page reload. Used local storage to remember the user's preference.
### Footer:
* I started by adding the HTML footer elements I needed such as the copyright text and the social icons.
* I added some CSS to make the footer stick to the bottom of the page even when there is no content in the body.
* I wrote a JS function for the footer to update the footer copyright year automatically, making the website boilerplate always up-to-date without having to change it manually.
* I added a couple of popular social media icons that suit all kinds of businesses/ngos.
* I made sure to use accessibility tags in my HTML such as aria-label for screen readers. I also used semantic tags for SEO such as nav or footer.
* I made sure to make the social media links open in a new tab for UX reasons.

## Issues Encountered
* Breakpoints: I tried to use variables for the breakpoints in the media queries to make it clear and easy to use, but I finally learned online that you can't really use variables in media queries. (I later on found that this is possible but not with vanilla CSS).
* Text Visibility: My buttons had text that had poor contrast against the background, which made it hard for users to read. I added inverted text color variables in the variables.css file to fix this accessibility issue.
* Transitions: When the theme changes, it creates a flash issue on all elements, so I decided to priotize a stable working UI by removing transition from the website, with plans to implement them in the near future.
* Navbar Alignment: It took me some time to learn about positioning in css and the different attributes I need in order to make it look good.
* Default Theme: I didn't know how to check the user's theme preference on page reload (dark mode or light mode). After a quick research on Google I figured that I needed to use window.matchMedia().
* Footer Layout: At first, I struggled to make the footer stick to the very bottom of the page. After some debugging, I added the display flex property to the body tag with flex direction set to column, then I added margin-top auto to the footer which made it stick to the bottom.

## Future Enhancements and Fixes
* [ ] Add transitions.
* [ ] Enhance Readability.

## AI Use
I used AI as a technical peer to help with repetitive tasks such as troubleshooting Git CLI commands (I'm still learning how to use Git). This allowed me to stay focused on the important part of the project while still learning the best practices for professional documentation and version control.

## License
Distributed under the MIT License. Click the license tab for more information.