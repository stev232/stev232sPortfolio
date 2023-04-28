# stev232sPortfolio

## Description

With my new skills in ReactJS I am going to build my portfolio again. The portfolio will include an about me along with some links to social media sites and github. There will be a navigation bar that will bring the user to different sections of the site based off of what they selected.

## Acceptance Criteria

GIVEN a single-page application portfolio for a web developer<br>
*WHEN I load the portfolio*<br>
__THEN__ I am presented with a page containing a header, a section for content, and a footer<br>
*WHEN I view the header*<br>
__THEN__ I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio<br>
*WHEN I view the navigation titles*<br>
__THEN__ I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted<br>
*WHEN I click on a navigation title*<br>
__THEN__ I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted<br>
*WHEN I load the portfolio the first time*<br>
__THEN__ the About Me title and section are selected by default<br>
*WHEN I am presented with the About Me section*<br>
__THEN__ I see a recent photo or avatar of the developer and a short bio about them<br>
*WHEN I am presented with the Portfolio section*<br>
__THEN__ I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository<br>
*WHEN I am presented with the Contact section*<br>
__THEN__ I see a contact form with fields for a name, an email address, and a message<br>
*WHEN I move my cursor out of one of the form fields without entering text*<br>
__THEN__ I receive a notification that this field is required<br>
*WHEN I enter text into the email address field*<br>
__THEN__ I receive a notification if I have entered an invalid email address<br>
*WHEN I am presented with the Resume section*<br>
__THEN__ I see a link to a downloadable resume and a list of the developer’s proficiencies<br>
*WHEN I view the footer*<br>
__THEN__ I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)<br>

## Site Architecture

A single Header component that appears on multiple pages

A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio

A single Project component that will be used multiple times in the Portfolio section

A single Footer component that appears on multiple pages

## Deployement Link

https://stev232.github.io/stev232sPortfolio/