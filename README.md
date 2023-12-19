<h1 align="center"> Brain Tic Tac Toe</h1>

[View the live project here](https://elainebroche-dev.github.io/ms1-thrive/)

Brain Tic Tac Toe is a fun game played by two players, the player chooses to be X or O. Some times one can sense the next move by simply looking at the component's impression, by playing with a computer as your component, it's trickier and fun to play with a random move player because you can't see the computer's expressions.

The users of this game improves their virtue and focus skill in due time, because the more you play this game, the better your intellegence improves.

![Mockup](documentation/supp-images/resp-mockup.png)

## Index – Table of Contents
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [esting](#testing)
* [Deployment](#deployment)
* [Credits](#credits)


## Features

### Existing Features

-   __Header__

    - The game consists of a logo and the name:  Brain Tic Tac Toe in the center of the header which is good for user interface.
    - The logo and the name of the game clearly tells the user, that the game is for smart people.

      ![Navbar](documentation/supp-images/f01-nav-bar.png)


-   __Make a choose__

    - The option box tells the player to choose from Prayer(O) or Prayer(O) before the game starts.
    - Once a user chooses a prayer, the game can only begin once the user clicks the button.

      ![Navbar](documentation/supp-images/f01-nav-bar.png)

-   __Result text and Replay button__

    - Once the user wins, it pops a winner message, Tie or Try again if you lose then the game is over.
    - User can click replay button to re-start the game.
    - The Replay button will take the user back to the make a choose section.

      ![Navbar](documentation/supp-images/f01-nav-bar.png)



-   __Footer__

    - The Footer shows the rules of Brain Power Tic Tac Toe.
    - The footer clearly states the rules on how to ply the game, this is crucial to the user.

      ![Footer](documentation/supp-images/f05-footer.png)



### Features which could be implemented in the future

- __future implementation__
    - I wish the loser could be the first one to play, once a replay button is placed given that on clicking replay one has to select who to be from player-X and player-O which I find tricky for now.

- __predication improvements__
    - When the first player starts from the corner he/she has higher chances of winning the game.
    - I could predict my win or the computer's next move even if it has to be random, not sure if it is just my intuition.

## Design

-   ### View
- It is in the middle of the screen
- the width of the elements is in percentage, so I didn't need to use media query in CSS for it to be responsive 

-   ### Colour Scheme
- black
- violetblue
- white smoke
- green

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


### Frameworks, Libraries & Programs Used

-   [Google Fonts:](https://fonts.google.com/) was used to import the 'Familjen and Grotesk' fonts into the style.css file which are used in this project.
-   [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
-   [GitHub:](https://github.com/) is used as the respository for the projects code after being pushed from Git.
-   [iLoveIMG:](https://www.iloveimg.com/) was used for resizing image logo for the website.
-   [favicon:](https://www.favicon.cc/) was used to add icon in the browser.
-   [logomaker:](https://www.logomaker.net/) was used to have a logo for aesthetic and UX purposes.
-   [iloveimg:](https://www.iloveimg.com/) was used to resize the logo I created to have a specific size.


## Testing

### Validator Testing

- [HTML Validator](https://validator.w3.org/)

    - result for index.html
      ![HTML results index](documentation/validation-results/html-validation-result-1.png)
    - result for menu.html
      ![HTML results menu](documentation/validation-results/html-validation-result-2.png)
    - result for contact.html
      ![HTML results contact](documentation/validation-results/html-validation-result-3.png)

    - Full validation results are available on github here :

        - <a href="https://github.com/elainebroche-dev/ms1-thrive/blob/master/documentation/validation-results/html-validation-results-index.pdf" target="_blank">HTML Results - Home Page</a>

        - <a href="https://github.com/elainebroche-dev/ms1-thrive/blob/master/documentation/validation-results/html-validation-results-menu.pdf" target="_blank">HTML Results - Menu Page</a>

        - <a href="https://github.com/elainebroche-dev/ms1-thrive/blob/master/documentation/validation-results/html-validation-results-contact.pdf" target="_blank">HTML Results - Contact Page</a>

- [CSS Validator](https://jigsaw.w3.org/css-validator/)

    - result for styles.css 
      ![CSS results 1](documentation/validation-results/css-validation-result-1.png)
      ![CSS results 2](documentation/validation-results/css-validation-result-2.png)

      The warnings are due to 1) import of the Google fonts and 2) a webkit extension for Safari support of the flip-card effect used on the home page.

    - Full validation results are available on github here :

        - <a href="https://github.com/elainebroche-dev/ms1-thrive/blob/master/documentation/validation-results/css-validation-results.pdf" target="_blank">CSS Results - styles.css</a>

### Browser Compatibility

    - Testing has been carried out on the following browsers :
    - Chrome Version 90.0.4430.212 (Official Build) (64-bit)
    - Firefox Version 88.0.1 (64-bit)
    - Edge Version 90.0.818.62 (Official build) (64-bit)
    - Safari on macOS Catalina (Safari  Version 14.0.3)
    
### Test Cases and Results

- The below table details the test cases that were used, the results and a cross-reference to the Feature ID that each test case exercised (click to open image):

  ![Test Results](documentation/supp-images/test-cases.png)

### Known bugs

- My mentor reported an issue with the "Send Message" button when viewed on an iphone during a review meeting.  Neither of us has since been able to re-create this using the browser dev tools but I am adding an image of the issue here for completeness :

  ![Bug01](documentation/supp-images/bug01-send-message-issue.png)

## Deployment

### How this site was deployed

- In the GitHub repository, navigate to the Settings tab, then choose Pages from the left hand menu 
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment
- Any changes pushed to the master branch will take effect on the live project

  The live link can be found here - [Tic Tac Toe](https://elainebroche-dev.github.io/ms1-thrive/index.html) 

### How to clone the repository

- Go to the https://github.com/elainebroche-dev/ms1-thrive repository on GitHub 
- Click the "Code" button to the right of the screen, click HTTPs and copy the link there
- Open a GitBash terminal and navigate to the directory where you want to locate the clone
- On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process
 
## Credits 
- javaScript : [code institute](https://youtu.be/n6gzxTsbHLc?si=aDJ1GpVS_6qi2efs)
- Beautiful Tic Tac Toe game using HTML, CSS and JavaScript - Code Hawk : [The Queen's Pawn](https://youtu.be/n6gzxTsbHLc?si=aDJ1GpVS_6qi2efs)
- A Complete Overview of JavaScript Events - All You Need To Know : [dcode](https://youtu.be/YiOlaiscqDY?si=wTdI2AmbCT6C8pmX)
- A game of TicTacToe written in JavaScript  : [Bro Code](https://youtu.be/AnmwHjpEhtA?si=V_dSDNVMDIO-d6fQ)

### Content 
- Content on the game was based on watching different youtube videos  : [Tic tac toe](https://www.youtube.com/)
- All other content was written by the developer

### Code
- Code how to create a slider in CSS and JavaScript : [youtube videos on how to build tic tac toe](https://youtu.be/n6gzxTsbHLc?si=53Mkqg3-Gb_kX1qF)
- Code how to create tic tac toe videos from the ones I credited above : [youtube videos on how to build tic tac toe](https://www.youtube.com/)
- Code how to call functions : [code institute course work](https://codeinstitute.net)
- How to hide and show container element when i click the button :  [container hide and show](https://stackoverflow.com/questions/22242686/container-hide-and-show)
- Code on how to munipulate some function to do specific tasks : [W3Schools The inner Element Object](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext)

### Media 

- The fonts used were imported from [Google Fonts](https://fonts.google.com/)
- The favicon was created from [favicon](https://www.favicon.cc/)
- The logo was created using [logomaker](https://www.logomaker.net/)
- The logo image was resize using [iloveimg](https://www.iloveimg.com/)

### Acknowledgments

- I want to thank my cohort facilitator madam Kay Welfare who always check up on me when am lost in my course and am grateful for giving me good advice and feedback on how to plan and execute this project and who provided me with lots of pointers on resources like where to look when looks for colors, resizing images and so on that helped me on this project.

- Thanks to code institute and staff for always providing me with important pointers and resourses to enable me wided my coding scope and knowlege.
- This readyME file was inspired by : [code institute Rock,Paper,scissor](https://codeinstitute.net)
