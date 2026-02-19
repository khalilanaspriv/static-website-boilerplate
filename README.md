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

## Issues Encountered
* Breakpoints: I tried to use variables for the breakpoints in the media queries to make it clear and easy to use, but I finally learned online that you can't really use variables in media queries. (I later on found that this is possible but not with vanilla CSS).
* Text Visibility: My buttons had text that had poor contrast against the background, which made it hard for users to read. I added inverted text color variables in the variables.css file to fix this accessibility issue.
* Transitions: When the theme changes, it creates a flash issue on all elements, so I decided to priotize a stable working UI by removing transition from the website, with plans to implement them in the near future.

## Future Enhancements and Fixes
* [ ] Add transitions.
* [ ] Enhance Readability.

## AI Use
I used AI as a technical peer to help with repetitive tasks such as troubleshooting Git CLI commands (I'm still learning how to use Git). This allowed me to stay focused on the important part of the project while still learning the best practices for professional documentation and version control.

## License
Distributed under the MIT License. Click the license tab for more information.